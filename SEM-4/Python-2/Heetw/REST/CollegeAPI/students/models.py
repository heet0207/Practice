from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=100)
    Semester = models.IntegerField()
    Branch = models.CharField(max_length=100)
    Department = models.CharField(max_length=50)
    cgpa = models.FloatField()

    def __str__(self):
        return self.name
# Create your models here.
