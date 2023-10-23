<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Noticiei (Backend)</h3>
</div>


<!-- ABOUT THE PROJECT -->
## Sobre o projeto

Uma plataforma que tem como objetivo, levar as noticias de uma forma fácil, simples e direta paras seus usuários.

### Tecnologias utilizadas

* [![Python][Python]][Python-url]
* [![FastAPI][FastAPI]][FastAPI-url]
* [![SQLite][SQLite]][SQLite-url]
* [![Docker][Docker]][Docker-url]

### Pré-requisitos

* python

### Instalação

1. Clonar o repositório
   ```sh
   git clone https://github.com/plscabral/MVP3-Noticiei-Backend.git
   ```
2. Criar arquivo .env e preencher conforme o exemplo:
   ```sh
   SECRET_KEY=0fcb89b2a2d0e096a566e836eb3644ea
   ALGORITHM=HS256
   EXPIRES_IN_MIN=3000
   ```
3. Rodar o comando abaixo em modo administrador:
   ```sh
   pip install -r requirements.txt
   ```

### Docker
1. Buildar projeto
   ```sh
   docker build -t noticiei-backend .
   ```
2. Configurar a porta de acesso
   ```sh
   docker run -p 8000:8000 noticiei-backend
   ```
   
### Execução

1. Rodar o comando abaixo:
   ```sh
   python -m uvicorn main:app --reload
   ```

### Documentação

1. Basta acessar a rota abaixo:
   ```sh
   http://localhost:8000/docs
   ```

<!-- CONTACT -->
## Contato

[![Intagram Badge](https://img.shields.io/badge/-@plscabral-6633cc?style=flat-square&labelColor=6633cc&logo=instagram&logoColor=white&link=https://twitter.com/dieegosf)](https://www.instagram.com/plscabral/)
[![Linkedin Badge](https://img.shields.io/badge/-Paulo%20Cabral-6633cc?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/plscabral/)](https://www.linkedin.com/in/plscabral/)
[![Gmail Badge](https://img.shields.io/badge/-paulo.luiz127@gmail.com-6633cc?style=flat-square&logo=Gmail&logoColor=white&link=mailto:diego.schell.f@gmail.com)](mailto:paulo.luiz127@gmail.com)

[Python]: https://img.shields.io/badge/Python-20232A?style=for-the-badge&logo=python&logoColor=61DAFB
[Python-url]: https://www.python.org/
[FastAPI]: https://img.shields.io/badge/FastAPI-20232A?style=for-the-badge&logo=fastapi&logoColor=61DAFB
[FastAPI-url]: https://fastapi.tiangolo.com/
[SQLite]: https://img.shields.io/badge/SQLite-20232A?style=for-the-badge&logo=sqlite&logoColor=61DAFB
[SQLite-url]: https://www.sqlite.org/index.html
[Docker]: https://img.shields.io/badge/Docker-20232A?style=for-the-badge&logo=docker&logoColor=61DAFB
[Docker-url]: https://www.docker.com/
