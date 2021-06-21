from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import CommentSerializer

from .models import Comment
# Create your views here.

@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'List':'/comment-list/',
		'Detail View':'/comment-detail/<str:pk>/',
		'Create':'/comment-create/',
		}

	return Response(api_urls)

@api_view(['GET'])
def commentList(request):
	comments = Comment.objects.all().order_by('-id')
	serializer = CommentSerializer(comments, many=True)
	return Response(serializer.data)

@api_view(['GET'])
def commentDetail(request, pk):
	comments = Comment.objects.get(id=pk)
	serializer = CommentSerializer(comments, many=False)
	return Response(serializer.data)


@api_view(['POST'])
def commentCreate(request):
	serializer = CommentSerializer(data=request.data)
	if serializer.is_valid():
		serializer.save()
	return Response(serializer.data)
