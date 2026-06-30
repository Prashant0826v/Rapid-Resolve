from django.urls import path
from rest_framework.routers import DefaultRouter

from .auth_views import login_view, logout_view, signup, verify_signup
from .views import TaskViewSet

router = DefaultRouter()
router.register(r"tasks", TaskViewSet, basename="task")

urlpatterns = [
    path("signup/", signup, name="signup"),
    path("verify-signup/", verify_signup, name="verify-signup"),
    path("login/", login_view, name="login"),
    path("logout/", logout_view, name="logout"),
] + router.urls
