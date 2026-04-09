# School Management API

## Live API

https://school-management-api-jzi3.onrender.com/

## Tech Stack

* Node.js
* Express.js
* MySQL (Railway)
* Render (Deployment)

## Features

* Add School API
* List Schools sorted by proximity
* Input validation using Zod
* Distance calculation using Haversine formula

## Endpoints

### Add School

POST /api/addSchool

Body:
{
"name": "School Name",
"address": "City",
"latitude": 12.97,
"longitude": 77.59
}

### List Schools

GET /api/listSchools?latitude=12.97&longitude=77.59

## Notes

* Latitude range: -90 to 90
* Longitude range: -180 to 180
