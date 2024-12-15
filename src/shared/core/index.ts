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
