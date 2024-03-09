<img width="897" alt="Screenshot 2024-03-09 203300" src="https://github.com/robsen123-fexil/CRD/assets/111446547/669823ca-9b7c-4c71-9f99-03665bbd9f28">
<img width="550" alt="Screenshot 2024-03-09 203236" src="https://github.com/robsen123-fexil/CRD/assets/111446547/1f97aa46-1442-4388-9395-b5afd47bf10d">
# Make Music/Test Project

## Description

This project is a combination of a Django REST API and a React application using Redux Saga and Toolkit. It aims to provide a seamless integration between the backend and frontend, creating a powerful and efficient web application.

## Table of Contents
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [License](#license)

## Features
- Django REST API with CRUD operations.
- React application with Redux Saga and Toolkit for state management.
- Seamless integration between the frontend and backend.
- Easy-to-understand folder structure for scalability.

## Requirements
Make sure you have the following installed before setting up the project:
- `python3-openid==3.2.0`
- `Node.js == v21.6.0`
- `npm == 10.5.0`
- `Django==5.0.1`
- `Django REST Framework == 3.14.0`
- `React@18.2.0`
- `Redux Toolkit`
- `Redux Saga`

## Installation
- Clone the repository:

 - `git clone https://github.com/robsen123-fexil/CRD`
 - `cd saga-toolkit-frontend`
 - `npm install`
 - `npm i redux@redux-saga redux-toolkit`
 - `npm i stylecomponent@emotion`
 - `npm i react-dom`
 - `cd back-end`
 - `pip install django`
 - `pip install django-cors-headers`
 - `pip install djangorestframeworks`
 - `pip install -r requirements.txt`
## Usage

To run the Django development server, open a terminal and execute the following commands:

bash
cd back-end
 - `python manage.py makemigrations`
 - `python manage.py migrate`
 - `python manage.py createsuperuser`   # I recommend using the username as "admin" and password "123"
 - `python manage.py runserver` 
to Run the React development server:
  - `cd saga-toolkit-frontend`
  - `npm start`
# License

This project is licensed under the MIT License.

## MIT License

Copyright (c) 2024 Robsen Teshome

# Deployed Link
Deployed Link: [https://makemusic-lrduirvdx-robsen123-fexils-projects.vercel.app/](https://makemusic-lrduirvdx-robsen123-fexils-projects.vercel.app/)
