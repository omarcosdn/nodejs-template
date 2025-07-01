[![Node.js](https://img.shields.io/badge/Node.js-20.x-green?logo=node.js)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-4.x-lightgrey?logo=express)](https://expressjs.com/)
[![Jest](https://img.shields.io/badge/Jest-29.x-brightgreen?logo=jest)](https://jestjs.io/)
[![Docker](https://img.shields.io/badge/Docker-ready-blue?logo=docker)](https://www.docker.com/)
[![Coverage Lines](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/omarcosdn/nodejs-template/coverage-report/coverage-summary.json&label=linhas&query=$.total.lines.pct)](https://github.com/omarcosdn/nodejs-template/tree/coverage-report)
[![Coverage Functions](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/omarcosdn/nodejs-template/coverage-report/coverage-summary.json&label=funções&query=$.total.functions.pct)](https://github.com/omarcosdn/nodejs-template/tree/coverage-report)
[![Coverage Statements](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/omarcosdn/nodejs-template/coverage-report/coverage-summary.json&label=statements&query=$.total.statements.pct)](https://github.com/omarcosdn/nodejs-template/tree/coverage-report)
[![Coverage Branches](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/omarcosdn/nodejs-template/coverage-report/coverage-summary.json&label=branches&query=$.total.branches.pct)](https://github.com/omarcosdn/nodejs-template/tree/coverage-report)

# Node.js Template Project

Este repositório é um template para projetos Node.js. Ele segue boas práticas de desenvolvimento, utilizando conceitos como **Clean Architecture**, **DDD (Domain-Driven Design)** e estrutura modular.

---

## 🌳 Estrutura do Projeto

```plaintext
.
├── src/
│   ├── core/                # Entidades, agregados, objetos de valor, casos de uso, lógica de aplicação, interfaces de repositório
│   ├── infrastructure/      # Implementações concretas (ORM, API externas, etc.)
│   │   ├── database/        # Configurações de banco de dados (Migrations, Seeds, etc.)
│   │   ├── http/            # Controllers e middlewares do Express
│   │   ├── rabbitmq/        # Configuração e consumidores RabbitMQ
│   ├── shared/              # Código compartilhado (Utils, Providers, Errors)
│   └── main.ts              # Arquivo principal de inicialização da aplicação
├── .env.example             # Exemplo de variáveis de ambiente
├── Dockerfile               # Arquivo Docker para o projeto
├── docker-compose.yml       # Configuração para subir containers (Postgres, RabbitMQ, etc.)
├── README.md                # Documentação inicial do projeto
```

---

## 🛠️ Configurações Essenciais

### 1. **Instalação de Dependências**

```bash
yarn install
# ou
npm install
```

### 2. **Configuração de Variáveis de Ambiente**

Crie um arquivo `.env` na raiz do projeto com base no `.env.example`:

```bash
cp .env.example .env
```

Edite o `.env` conforme necessário para seu ambiente.

### 3. **Scripts Disponíveis**

Veja os scripts principais no `package.json`:

- `yarn dev`: Executa a aplicação em modo desenvolvimento (hot reload)
- `yarn build`: Transpila o projeto para JavaScript
- `yarn start`: Executa a aplicação em produção
- `yarn test`: Executa todos os testes
- `yarn test:coverage`: Gera relatório de cobertura
- `yarn format`: Formata o código com Prettier

---

## 🐳 Buildando e Executando com Docker

### 1. **Build e execução do ambiente de produção**

Utiliza o `Dockerfile` padrão, que gera uma imagem enxuta apenas com dependências de produção e o código transpilado.

```bash
# Build da imagem de produção
# (usa o Dockerfile padrão)
docker build -t nodejs-template:prod .

# Executa o container de produção
# (usa as variáveis do .env, expõe a porta 4000)
docker run --env-file .env -p 4000:4000 nodejs-template:prod
```

### 2. **Build e execução do ambiente de desenvolvimento**

Utiliza o `Dockerfile.dev`, que instala todas as dependências (incluindo dev), compila o projeto e roda em modo development.

```bash
# Build da imagem de desenvolvimento
# (usa o Dockerfile.dev)
docker build -f Dockerfile.dev -t nodejs-template:dev .

# Executa o container de desenvolvimento
# (usa as variáveis do .env, expõe a porta 4000)
docker run --env-file .env -p 4000:4000 nodejs-template:dev
```

> **Dica:** Use o Docker Compose para orquestrar múltiplos serviços e facilitar o desenvolvimento local.

---

## ▶️ Executando Localmente

### 1. **Modo Desenvolvimento**

```bash
yarn dev
```

### 2. **Modo Produção**

```bash
yarn build
yarn start
```

### 3. **Executando Testes**

```bash
yarn test
# ou
yarn test:coverage
```

---

## 🧪 Rodando Testes dentro do Container (Opcional)

Se desejar rodar os testes dentro do container:

```bash
docker run nodejs-template:latest yarn test
```

---

## 🛠️ Troubleshooting

- Certifique-se de que as portas necessárias (ex: 4000) estejam livres.
- Verifique se o arquivo `.env` está corretamente configurado.
- Para logs detalhados, consulte a saída do container ou utilize `docker logs <container_id>`.

---

## 🔧 Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **Express.js**
- **Jest**
- **Docker**

---
