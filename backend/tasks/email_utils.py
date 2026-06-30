import random
import string
from datetime import datetime, timedelta

from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags


OTP_STORE = {}


def generate_otp(length=6):
    return ''.join(random.choices(string.digits, k=length))


def send_otp_email(email, otp, purpose='verification'):
    subject = 'Verify your Rapid Resolve account'
    html_content = render_to_string('email/otp_email.html', {'otp': otp, 'purpose': purpose})
    text_content = strip_tags(html_content)
    msg = EmailMultiAlternatives(subject, text_content, 'noreply@rapidresolve.app', [email])
    msg.attach_alternative(html_content, 'text/html')
    msg.send()


def store_otp(email, otp):
    expiry = datetime.utcnow() + timedelta(minutes=10)
    OTP_STORE[email.lower()] = {'otp': otp, 'expires_at': expiry}


def verify_otp(email, otp):
    entry = OTP_STORE.get(email.lower())
    if not entry:
        return False
    if datetime.utcnow() > entry['expires_at']:
        OTP_STORE.pop(email.lower(), None)
        return False
    if entry['otp'] != otp:
        return False
    OTP_STORE.pop(email.lower(), None)
    return True
