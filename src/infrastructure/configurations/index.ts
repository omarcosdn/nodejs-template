import env from 'env-var';

export const Env = {
  SERVER_BASE_ROUTE: env.get('SERVER_BASE_ROUTE').required(true).asString(),
  SERVER_PORT: env.get('SERVER_PORT').default(3000).asInt(),
};
