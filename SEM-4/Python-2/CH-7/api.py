# import requests
# import json
# def get_coordinates():
    
#     api_key = input('Enter API Key : ')
#     city = input('Enter Your City : ')
    
#     request_url = (
#         'http://api.openweathermap.org/geo/1.0/direct?q='
#         +city
#         +'&limit=1&appid='
#         +api_key
#     )
    
    
#     response = requests.get(request_url)
#     coordinates = response.json()
#     print(json.dumps(coordinates,indent=5))
    
#     latitude = coordinates[0]['lat']
#     longitude = coordinates[0]['lon']
#     print('Latitude : ',latitude)
#     print('Longitude : ',longitude)
# get_coordinates()



# import requests
# import json
# def display_current_weather():

#     api_key = input('Enter API Key : ')
#     city = input('Enter City : ')
    
#     request_url = (
#         'http://api.openweathermap.org/data/2.5/weather?q='
#         +city
#         +'&appid='
#         +api_key
#         +'&units=metric'
#     )

#     response = requests.get(request_url)
#     current_weather = response.json()

#     print(json.dumps(current_weather, indent=2))

#     # Safely extract fields
#     description = current_weather['weather'][0]['description']
#     temperature = current_weather['main']['temp']
#     pressure = current_weather['main']['pressure']
#     humidity = current_weather['main']['humidity']
#     wind_speed = current_weather['wind']['speed']
#     visibility = current_weather['visibility']

#     print('current_weather')
#     print('description:', description)
#     print('temperature:',temperature)
#     print('pressure:', pressure)
#     print('humidity:', humidity)
#     print('wind_speed:', wind_speed)
#     print('visibility:', visibility)

# display_current_weather()


# air pollution API

import requests
import json

quality_air_index = {
    1: 'Good',
    2: 'Fair',
    3: 'Moderate',
    4: 'Poor',
    5: 'Very Poor'
}

def display_air_pollution():
    api_key = input('Enter API Key : ')
    city = input('Enter City : ')

    
    # Now, get the air pollution data using the coordinates
    pollution_request_url = (
        'http://api.openweathermap.org/data/2.5/air_pollution?q='
        +city
        +'&appid='
        +api_key
    )
    
    pollution_response = requests.get(pollution_request_url)
    pollution_data = pollution_response.json()
    
    print(json.dumps(pollution_data, indent=2))
    pollution_data = pollution_data['list'][0]
    air_quality_index = pollution_data['main']['aqi']
    print('Air Quality:', quality_air_index.get(air_quality_index, 'Unknown'))
display_air_pollution()