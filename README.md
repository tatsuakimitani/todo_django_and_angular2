## What is this?
Simple to-do application using Django Rest Framework and Angular 2

It is under development and it is incomplete.

## SetUp Django

install library
```
$ pip install django
$ pip install djangorestframework
$ pip install django-filter
$ pip install django-cors-headers
$ pip install djangorestframework-jwt
```

migration Django
```
$python manage.py migrate
```

create admin user
```
$ python manage.py createsuperuser
```

start Django
```
$ cd django_app
$ python manage.py runserver
```

## SetUp Angular2

install Angular-CLI
```
$ npm install -g @angular/cli
```

install npm module
```
$ npm install
$ npm install --save bootstrap ng2-bootstrap
$ npm install angular2-jwt --save
```

start Angular
```
$ cd ng2app
$ ng serve
```
