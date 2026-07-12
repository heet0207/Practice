from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import JSONParser, FormParser, MultiPartParser

from django.contrib.auth import authenticate

from rest_framework_simplejwt.tokens import RefreshToken

from .serializers import (
    RegisterSerializer,
    LoginSerializer,
    UserProfileSerializer,
    ChangePasswordSerializer,
)


# ===========================
# Register User
# ===========================

class RegisterView(APIView):

    parser_classes = [JSONParser, FormParser, MultiPartParser]

    def post(self, request):

        serializer = RegisterSerializer(data=request.data)

        if serializer.is_valid():

            serializer.save()

            return Response(
                {
                    "message": "User registered successfully"
                },
                status=status.HTTP_201_CREATED
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )


# ===========================
# Login User
# ===========================

class LoginView(APIView):

    parser_classes = [JSONParser, FormParser]

    def post(self, request):

        serializer = LoginSerializer(data=request.data)

        if serializer.is_valid():

            username = serializer.validated_data["username"]
            password = serializer.validated_data["password"]

            user = authenticate(
                username=username,
                password=password
            )

            if user is not None:

                refresh = RefreshToken.for_user(user)

                return Response({

                    "message": "Login Successful",

                    "refresh": str(refresh),

                    "access": str(refresh.access_token),

                    "username": user.username,

                    "role": user.role,

                })

            return Response(
                {
                    "error": "Invalid Username or Password"
                },
                status=status.HTTP_401_UNAUTHORIZED
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )


# ===========================
# User Profile
# ===========================

class ProfileView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        serializer = UserProfileSerializer(request.user)

        return Response(serializer.data)


# ===========================
# Change Password
# ===========================

class ChangePasswordView(APIView):

    permission_classes = [IsAuthenticated]

    def put(self, request):

        serializer = ChangePasswordSerializer(
            data=request.data
        )

        if serializer.is_valid():

            user = request.user

            if not user.check_password(
                serializer.validated_data["old_password"]
            ):

                return Response(
                    {
                        "error": "Old Password is Incorrect"
                    },
                    status=status.HTTP_400_BAD_REQUEST
                )

            user.set_password(
                serializer.validated_data["new_password"]
            )

            user.save()

            return Response(
                {
                    "message": "Password Changed Successfully"
                }
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )


# ===========================
# Logout
# ===========================

class LogoutView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):

        try:

            refresh_token = request.data["refresh"]

            token = RefreshToken(refresh_token)

            token.blacklist()

            return Response(
                {
                    "message": "Logout Successful"
                }
            )

        except Exception:

            return Response(
                {
                    "error": "Invalid Refresh Token"
                },
                status=status.HTTP_400_BAD_REQUEST
            )