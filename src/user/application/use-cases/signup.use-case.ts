import { UseCase as DefaultUseCase } from "@/shared/application/use-cases/use-case";

export namespace SignUpUseCase {
  type Input = {
    name: string;
    email: string;
    phone: string;
    cpf: string;
    password: string;
  };

  type Output = {
    id: string;
    name: string;
    email: string;
    phone: string;
    cpf: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
  };

  export class UseCase implements DefaultUseCase<Input, Output> {
    execute(input: Input): Promise<Output> {
      return Promise.resolve({
        id: input.name,
        name: input.name,
        email: input.email,
        phone: input.phone,
        cpf: input.cpf,
        password: input.password,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
  }
}
