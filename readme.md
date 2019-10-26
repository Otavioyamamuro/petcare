#Automatico
docker-compose build
docker-compise up

#instalando mongo
docker pull mongo
docker run -d -p 27017:27017 --name mongo -e AUTH=no mongo

#instalando front
docker -t build front .
docker run  -p 8085:8085 --name frontend --link backend:backend front

#instalando backend
docker -t build backend .
docker run  -p 8080:8080 --name backend --link mongo:mongo cadastro


#url front

http://127.0.0.1:8085/#/
http://localhost:8080/swagger-ui.html


