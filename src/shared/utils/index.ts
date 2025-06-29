import env from 'env-var';

export const Env = {
  LOG_LEVEL: env.get('LOG_LEVEL').asString(),
  SERVER_BASE_ROUTE: env.get('SERVER_BASE_ROUTE').required(true).asString(),
  SERVER_PORT: env.get('SERVER_PORT').default(3000).asInt(),
};

export type UUID = string;

export abstract class Entity {
  private readonly id: UUID;

  protected constructor(id: UUID) {
    this.id = id;
  }

  public getIdentity(): UUID {
    return this.id;
  }

  abstract serialize(): unknown;
}
