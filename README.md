# Comandos Utilizados no Meu Primeiro Curso de Docker #

## Docker Hub - Imagens Oficiais/Comunidade ##

<a href="https://hub.docker.com/#tag-de-marcação" target="_blank">Docker Hub</a>

---

## Baixando Imagens do Docker Hub: ##

    docker pull node
    docker pull ubuntu
    docker pull mysql

## Para Rodar o Conteiner Pode ser Usado o Comando Abaixo: ##

    docker run -d --rm --name patrick-mysql -e MYSQL_ROOT_PASSWORD=segredo -v volume-mysql:/var/lib/mysql -p "3306:3306" mysql

## Para Rodar o Node Pode Ser Usado o Comando Abaixo: ##

    docker run -it --rm --name patrick-node -v "${PWD}:/user/src/app" -w "/user/src/app" -p "3000:3000" --network=patrick-network node bash -c "npm i && node index"

## Para Rodar a Imagem Criada Pelo Dockerfile, Pode Ser Usado o Comando Acabaixo: ##

    docker run -it --rm --name patrick-node2 -p "3000:3000" --network=patrick-network patrick-imagem

---

## Lista as Imagens Criadas. ##

    docker images 

## Aparece Diversas informações sobre o Conteiner/Imagem/Volumes. ##

    docker inspect nomereferencia 

## Lista Conteiners Rodando. ##

    docker ps

## Lista Todos os Containers. ##

    docker ps -a

## Para a Execução de Um Conteiner. ##

    docker stop nomeConteiner


## Mata a Execução de Um Conteiner. ##

    docker kill nomeConteiner

## Lista Volumes Criados. ##

    docker volume ls

## Escolhe qual o network do conteiner. ##

    docker network connect nomeNetwork nomeConteiner 

## Remove network do conteiner. ##

    docker network disconnect nomeNetwork nomeConteiner

## Executa um conteiner. ##

    docker exec -it nomeConteiner bash

## Para criar uma imagem. ##

    docker build -t nomeImagem caminhoArivo

## Acessar e o banco de dados mysql. ##

    mysql -uroot -pSenha

## Como fazer Backup de Bando de dados c/ Docker no Postgres (Dump) ##

- Criando o arquivo para o Dump 
```
    docker exec nomeConteiner pg_dumpall -U postgres > /caminho/da/pasta/nome_arquivo.sql
```


- Fazendo a restauração do Banco de dados
```
    cat C:\caminho\da\pasta\nome_arquivo.sql | docker exec -i docker-db-1 psql -U postgres
```