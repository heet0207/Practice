# rest_framework viewsets
from rest_framework.viewsets import ModelViewSet  # type: ignore
from .models import Student
from .serializers import StudentSerializer
from rest_framework.permissions import IsAuthenticated # type:ignore
from .pagination import StudentPagination
# Create your views here.

class StudentViewSet(ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    pagination_class = StudentPagination

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            permission_classes = [IsAuthenticated]
        else:
            permission_classes = []
        return [permission() for permission in permission_classes]