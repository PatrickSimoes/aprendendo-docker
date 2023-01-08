<h1>"Comandos Utilizados no Meu Primeiro Curso de Docker"</h1>

Docker Hub - Imagens Oficiais/Comunidade
https://hub.docker.com/

<h2>--Baixando Imagens do Docker Hub:</h2>

    docker pull node;
    docker pull ubuntu;
    docker pull mysql;

<h2>--Para Rodar o Conteiner Pode ser Usado o Comando Abaixo:</h2>

    docker run -d --rm --name patrick-mysql -e MYSQL_ROOT_PASSWORD=segredo -v volume-mysql:/var/lib/mysql -p "3306:3306" mysql;

<h2>--Para Rodar o Node Pode Ser Usado o Comando Abaixo:</h2>

    docker run -it --rm --name patrick-node -v "${PWD}:/user/src/app" -w "/user/src/app" -p "3000:3000" --network=patrick-network node bash -c "npm i && node index";

<h2>--Para Rodar a Imagem Criada Pelo Dockerfile, Pode Ser Usado o Comando Acabaixo:</h2>

    docker run -it --rm --name patrick-node2 -p "3000:3000" --network=patrick-network patrick-imagem;

***COMANDOS AUXILIARES PARA O DOCKER, REMOVER ASPAS ANTES DE RODAR***
/*
<h2>--Lista as Imagens Criadas.</h2>

    docker images; 

<h2>--Aparece Diversas informações sobre o anyware.</h2>

    docker inspect 'anyware'; 

<h2>--Lista Conteiners Rodando.</h2>

    docker ps;

<h2>--Lista Todos os Containers.</h2>

    docker ps -a;

<h2>--Para a Execução de Um Conteiner.</h2>

    docker stop 'nomeConteiner';


<h2>--Mata a Execução de Um Conteiner.</h2>

    docker kill 'nomeConteiner';

<h2>--Lista Volumes Criados.</h2>

    docker volume ls;

<h2>--Escolhe qual o network do conteiner.</h2>

    docker network connect 'network para conectar' 'conteiner'; 

<h2>--Remove network do conteiner.</h2>

    docker network disconnect 'network para desconectar' 'conteiner';

<h2>--Executa um conteiner.</h2>

    docker exec -it 'conteiner' bash;

<h2>--Para criar uma imagem.</h2>

    docker build -t 'nomeImagem' 'caminho da pasta ou . atual'

<h2>--Acessar e o banco de dados mysql.</h2>

    mysql -uroot -p'senha';

*/