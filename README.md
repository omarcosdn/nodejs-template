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

## 🐳 Executando com Docker

### 1. **Preparação**

- Certifique-se de ter o Docker instalado e em execução.
- Crie o arquivo `.env` na raiz do projeto (veja instruções acima).

### 2. **Build da Imagem Docker**

```bash
docker build -t nodejs-template:1.0.0 -t nodejs-template:latest .
```

### 3. **Executando o Container**

```bash
docker run --env-file .env -p 3000:3000 nodejs-template:latest
```

A aplicação estará disponível em: [http://localhost:3000/api/template-service/health](http://localhost:3000/api/template-service/health)

### 4. **Executando com Docker Compose (Opcional)**

Se houver um arquivo `docker-compose.yml`:

```bash
docker-compose up --build
```

Isso irá subir a aplicação e serviços dependentes (ex: banco de dados, RabbitMQ).

---

## 🧪 Rodando Testes dentro do Container (Opcional)

Se desejar rodar os testes dentro do container:

```bash
docker run --env-file .env nodejs-template:latest yarn test
```

---

## 🛠️ Troubleshooting

- Certifique-se de que as portas necessárias (ex: 3000) estejam livres.
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
