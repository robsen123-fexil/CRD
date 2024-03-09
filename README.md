# Make Music/Test Project

## Description

This project is a combination of a Django REST API and a React application using Redux Saga and Toolkit. It aims to provide a seamless integration between the backend and frontend, creating a powerful and efficient web application.

## Table of Contents
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
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

## Folder Structure 
 CRD/
CRD/
CRD/
-- back-end/
|   |-- user_api/
|   |   |-- migrations/
|   |   |-- static/
|   |   |-- templates/
|   |   |-- __init__.py
|   |   |-- admin.py
|   |   |-- apps.py
|   |   |-- models.py
|   |   |-- serialezers.py
|   |   |-- tests.py
|   |   |-- urls.py
|   |   |-- views.py
|   |-- backend/
|   |   |-- __init__.py
|   |   |-- asgi.py
|   |   |-- settings.py
|   |   |-- urls.py
|   |   |-- wsgi.py
|-- saga-toolkit-frontend/
|   |-- public/
|   |-- src/
|   |   |-- actions/
|   |   |-- components/
|   |   |-- reducers/
|   |   |-- sagas/
|   |   |-- services/
|   |   |-- App.js
|   |   |-- index.js
|-- .env
|-- .gitignore
|-- manage.py
|-- package.json
|-- README.md
|-- requirements.txt
