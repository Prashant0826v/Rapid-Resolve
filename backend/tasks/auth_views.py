import random
import string

from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.core.cache import cache
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny

from .email_utils import send_otp_email, store_otp, verify_otp


@csrf_exempt
@api_view(["POST"])
@permission_classes([AllowAny])
def signup(request):
    username = request.data.get("username", "").strip()
    password = request.data.get("password", "").strip()
    email = request.data.get("email", "").strip()

    if not username or not password or not email:
        return JsonResponse({"error": "Username, email, and password are required"}, status=400)

    if User.objects.filter(username=username).exists():
        return JsonResponse({"error": "Username already exists"}, status=400)

    if User.objects.filter(email__iexact=email).exists():
        return JsonResponse({"error": "Email already registered"}, status=400)

    otp = ''.join(random.choices(string.digits, k=6))
    store_otp(email, otp)
    send_otp_email(email, otp, purpose='registration')

    return JsonResponse({"message": "Verification code sent to your email", "email": email}, status=201)


@csrf_exempt
@api_view(["POST"])
@permission_classes([AllowAny])
def verify_signup(request):
    email = request.data.get("email", "").strip()
    otp = request.data.get("otp", "").strip()
    username = request.data.get("username", "").strip()
    password = request.data.get("password", "").strip()

    if not verify_otp(email, otp):
        return JsonResponse({"error": "Invalid or expired OTP"}, status=400)

    user = User.objects.create_user(username=username, email=email, password=password)
    login(request, user)
    return JsonResponse({"message": "Account created successfully", "user": username}, status=201)


@csrf_exempt
@api_view(["POST"])
@permission_classes([AllowAny])
def login_view(request):
    username = request.data.get("username", "").strip()
    password = request.data.get("password", "").strip()

    client_key = f"login_failed:{request.META.get('REMOTE_ADDR', 'unknown')}:{username.lower()}"
    failed_attempts = cache.get(client_key, 0)
    if failed_attempts >= 5:
        return JsonResponse({"error": "Too many failed login attempts. Please try again later."}, status=429)

    user = authenticate(request, username=username, password=password)
    if user is None:
        cache.set(client_key, failed_attempts + 1, 600)
        return JsonResponse({"error": "Invalid credentials"}, status=400)

    cache.delete(client_key)
    login(request, user)
    return JsonResponse({"message": "Logged in successfully", "user": username}, status=200)


@csrf_exempt
@api_view(["POST"])
def logout_view(request):
    logout(request)
    return JsonResponse({"message": "Logged out successfully"}, status=200)
