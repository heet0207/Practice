from rest_framework.pagination import PageNumberPagination

class StudentPagination(PageNumberPagination):
    page_size = 2
    page_size_query_param = 'size'
    max_page_size = 4