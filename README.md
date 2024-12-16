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
# Usando Yarn
yarn install

# Ou usando NPM
npm install
```

### 2. **Atualizando Dependências**

Use o comando `yarn upgrade-interactive` para atualizar as dependências de forma interativa:

```bash
yarn upgrade-interactive
```

### 3. **Variáveis de Ambiente**

Crie um arquivo `.env` na raiz do projeto e configure suas variáveis de ambiente com base no arquivo `.env.example`.

### 4. **Scripts Disponíveis**

No arquivo `package.json`, você encontrará os seguintes scripts:

```json
"scripts": {
  "clean": "rimraf out && rimraf coverage",
  "build": "tsc",
  "start": "node -r tsconfig-paths/register --env-file=.env out/main.js",
  "dev": "ts-node-dev -r tsconfig-paths/register --env-file=.env src/main.ts",
  "test": "jest --runInBand",
  "test:coverage": "jest --runInBand --coverage",
  "format": "prettier --write ."
}
```

- **`clean`**: Exclui as pastas /out e /coverage
- **`build`**: Transpila o projeto para JavaScript.
- **`start`**: Executa a aplicação em produção.
- **`dev`**: Executa a aplicação em modo de desenvolvimento.
- **`test`**: Executa todos os testes com Jest.
- **`test:coverage`**: Gera um relatório de cobertura de testes.
- **`format`**: Formata o código usando Prettier.

---

## ▶️ Executando o Projeto

### 1. **Modo Desenvolvimento**

Execute o projeto com hot reload:

```bash
yarn dev
```

### 2. **Executando Testes**

Para rodar os testes:

```bash
yarn test
```

Para visualizar a cobertura dos testes:

```bash
yarn test:coverage
```

---

## 🔧 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução.
- **TypeScript**: Superset de JavaScript para tipagem estática.
- **Express.js**: Framework minimalista para APIs.
- **Jest**: Framework de testes.
- **Docker**: Contêinerização.

---

## 🚀 Construção e Execução da Imagem Docker

Para construir a imagem Docker localmente e executar a aplicação, siga os passos abaixo:

### 1. **Build da Imagem**

Crie a imagem Docker utilizando os seguintes comandos:

```bash
docker build -t nodejs-template:1.0.0 -t nodejs-template:latest .
```

### 2. **Executar a Imagem**

Execute o container da aplicação expondo a porta 3000:

```bash
docker run -p 3000:3000 nodejs-template
```

### 3. **Testar a Aplicação**

Após a execução, a aplicação estará acessível em:

```bash
curl --location 'http://localhost:3000/api/template-service/health'
```

---
