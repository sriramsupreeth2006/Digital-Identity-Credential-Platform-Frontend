from django.db import models
from django.contrib.auth.models import AbstractUser
# Table 1: Refugee (Main User Information)
class Refugee(models.Model):
    # Step 1 – Personal Information
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField()
    country_of_origin = models.CharField(max_length=100)

    # Step 2 – Contact Information
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20)
    location = models.CharField(max_length=150)

    # Step 3 – Document Verification
    document_type = models.CharField(max_length=100)
    document_file = models.FileField(upload_to='documents/')  # stores uploaded ID docs

    # Step 4 – Security
    password = models.CharField(max_length=255)
    consent = models.BooleanField(default=False)

    # Auto fields
    date_registered = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.country_of_origin})"


# Table 2: SupportRequest (for Help Center submissions)
class SupportRequest(models.Model):
    full_name = models.CharField(max_length=150)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    date_submitted = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} - {self.subject}"


# Table 3: AdminUser (for internal platform management)
class AdminUser(models.Model):
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    role = models.CharField(max_length=50, choices=[
        ('superadmin', 'Super Admin'),
        ('moderator', 'Moderator'),
        ('verifier', 'Verifier'),
    ], default='verifier')

    def __str__(self):
        return f"{self.username} ({self.role})"
class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)

    def __str__(self):
        return self.email