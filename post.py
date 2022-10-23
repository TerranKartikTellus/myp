import requests
import json

res = requests.post('http://localhost:3000/api',
      data = { 'info': [ 'India' , 'China' , 'USA' , 'Japan' , 'Russia' , 'Nepal','Aus','Pakistan','Mexico']})

print(res.text)
