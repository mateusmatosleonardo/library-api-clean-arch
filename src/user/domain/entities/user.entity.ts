import { Entity } from "@/shared/domain/entities/entity";

export type UserProps = {
  name: string;
  email: string;
  phone: string;
  cpf: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export class UserEntity extends Entity<UserProps> {
  constructor(props: UserProps, id?: string) {
    super(props, id);
  }

  private validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }

  get phone() {
    return this.props.phone;
  }

  get cpf() {
    return this.props.cpf;
  }

  get password() {
    return this.props.password;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  private set name(name: string) {
    this.props.name = name;
  }

  private set email(email: string) {
    if (!this.validateEmail(email)) {
      throw Error("Invalid email format");
    }
    this.props.email = email;
  }

  private set phone(phone: string) {
    this.props.phone = phone;
  }

  private set cpf(cpf: string) {
    this.props.cpf = cpf;
  }

  private set password(password: string) {
    this.props.password = password;
  }

  toJSON(): Required<{ id: string } & UserProps> {
    return {
      id: this.id,
      ...this.props
    } as Required<{ id: string } & UserProps>;
  }
}
