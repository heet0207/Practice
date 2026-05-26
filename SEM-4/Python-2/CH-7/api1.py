# import requests

# url = 'https://jsonplaceholder.typicode.com/posts/1'

# response = requests.get(url)

# print(response.status_code)
# print(response.text)


# import requests
# import json

# url = 'https://jsonplaceholder.typicode.com/posts/1'

# response = requests.get(url)
# data = response.json()

import requests
import json

new_post = {
    'title': 'Python API',
    'body': 'Learning REST API',
    'userId': 1
}

response = requests.post(
    'https://jsonplaceholder.typicode.com/posts',
    json=new_post
)

print(response.status_code)
print(response.json())
print(type(response.json()))


updated_post = {
    'id': 1,
    'title': 'Updated Title',
    'body': 'Updated Body',
    'userId': 1
}

response = requests.put(
    'https://jsonplaceholder.typicode.com/posts/1',
    json=updated_post
)
print(response.json())
print(data)
print(type(data))

print(data['title'])
print(data['body'])
print(data['userId'])

formetted = json.dumps(data,indent=4)

print(formetted)

import requests
import json

new_post = {
    'title': 'Python API',
    'body': 'Learning REST API',
    'userId': 1
}

response = requests.post(
    'https://jsonplaceholder.typicode.com/posts',
    json=new_post
)

print(response.status_code)
print(response.json())
print(type(response.json()))


updated_post = {
    'id': 1,
    'title': 'Updated Title',
    'body': 'Updated Body',
    'userId': 1
}

response = requests.put(
    'https://jsonplaceholder.typicode.com/posts/1',
    json=updated_post
)
print(response.json())

patch_data = {
    'title': 'Partially Updated Title'
}

response = requests.patch(
    'https://jsonplaceholder.typicode.com/posts/1',
    json=patch_data
)
print(response.json())

response = requests.delete('https://jsonplaceholder.typicode.com/posts/1')
print(response.status_code)