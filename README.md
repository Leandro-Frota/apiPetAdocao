# API para um Sistema de Adoção de Pets 

> Essa API faz parte de um sistema de adoção de pets que permite aos abrigos  o gerenciamento do fluxo de adoções, e possibilita o cadastro e visualização de pets, o registro de adotantes e a relização de adoçoes.

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
- [Autor](#Autor)


---

## Sobre o Projeto

Esse projeto acadêmico foi promovido pelo Bootcamp de desenvolvimento Full Stack da Escola AVANTI Atlãntico. É uma problemática baseada na seguinte situação :Um abrigo de animais deseja modernizar seu processo de adoção. Atualmente, todas as informações dos pets e adotantes são controladas manualmente, o que resulta em atrasos e desorganização. Com uma aplicação web, o abrigo pretende agilizar o cadastro de pets disponíveis para adoção e facilitar a conexão com possíveis adotantes, tornando o processo mais eficiente e acessível.

## Funcionalidades

- Cadastro de Pets
- Gerenciamento de Adotantes
- Processo de Adoção
- Visualização de Pets Disponíveis


## Tecnologias Utilizadas


- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [PrismaOrm](https://www.prisma.io/)
- [Postgres](https://www.postgresql.org/)

## Como Rodar o Projeto

Para rodar o projeto localmente, siga as instruções abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/Leandro-Frota/appAdocaoPetBackend.git
2. Entre no diretório do projeto:
   ```bash
   cd nome-do-projeto
3. Instale as dependências
   ```bash
   npm install
4. Configure o banco de dados PostgreSQL
- Certifique-se de que o PostgreSQL está instalado e em execução.
- Crie um banco de dados para o projeto no Postgres.
- Defina as variáveis de ambiente no arquivo .env, como o exemplo abaixo:
   ```bash
   DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"
5. Configure o prisma
- Gere o cliente Prisma a partir do esquema definido:
   ```bash
      npx prisma generate
- Execute as migrações para configurar o banco de dados:
   ```bash
      npx prisma migrate dev
6. Execute o projeto:
   ```bash
   npm start
   
## Autor
- [Leandro Morais da Frota)](https://github.com/Leandro-Frota)





