# udemy-comunicacao-microsservicos

# Criaçao ambiente

## PostgreSQL Auth DB

> docker run --name auth-db -p 5432:5432 -e POSTGRES_DB=auth-db -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=123456 postgres:11

## PostgreSQL Produto DB

> docker run --name product-db -p 5433:5432 -e POSTGRES_DB=product-db -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=123456 postgres:11

## MongoDB Sales DB

> docker run --name saled-db -p 27017:27017 -p 28017:28017 -e MONGODB_USER=admin -e MONGODB_DATABASE=sales -e MONGODB_PASS=123456 tutum/mongodb

## RabbitMQ/RabbitMQ Management

> docker run --name sales_rabbit -p 5672:5672 -p 25676:25676 -p 15672:15672 rabbitmq:3-management