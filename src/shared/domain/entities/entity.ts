import { randomUUID } from "node:crypto";

export abstract class Entity<Props = unknown> {
  public readonly props: Props;
  private readonly _id: string;

  constructor(props: Props, id?: string) {
    this.props = props;
    this._id = id || randomUUID();
  }

  get id() {
    return this._id;
  }

  toJSON(): Required<{ id: string } & Props> {
    return {
      id: this._id,
      ...this.props
    } as Required<{ id: string } & Props>;
  }
}
