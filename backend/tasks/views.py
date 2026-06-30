from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import Task
from .serializers import TaskSerializer


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all().order_by("-created_at")
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Task.objects.filter(user=self.request.user).order_by("-created_at")

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    @action(detail=False, methods=["get"])
    def prioritize(self, request):
        tasks = list(self.get_queryset())
        if not tasks:
            return Response({"message": "No tasks available"}, status=status.HTTP_200_OK)

        ranked = sorted(
            tasks,
            key=lambda task: {
                "high": 3,
                "medium": 2,
                "low": 1,
            }.get(task.priority, 0),
            reverse=True,
        )
        serializer = self.get_serializer(ranked[0])
        return Response({"recommended_task": serializer.data})
