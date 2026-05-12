import { HashProvider } from "@/shared/application/providers/hash-provider";
import { UseCase as DefaultUseCase } from "@/shared/application/use-cases/use-case";
import { UserEntity } from "@/user/domain/entities/user.entity";
import { UserRepository } from "@/user/domain/repositories/user.respository";

export namespace SignUpUseCase {
  export type Input = {
    name: string;
    email: string;
    phone: string;
    cpf: string;
    password: string;
  };

  export type Output = {
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
    constructor(
      private readonly userRepository: UserRepository.Repository,
      private readonly hashProvider: HashProvider
    ) {}

    async execute(input: Input): Promise<Output> {
      const { name, email, phone, cpf, password } = input;

      if (!name) {
        throw new Error("Name is required");
      }

      if (!email) {
        throw new Error("Email is required");
      }

      if (!phone) {
        throw new Error("Phone is required");
      }

      if (!cpf) {
        throw new Error("CPF is required");
      }

      if (!password) {
        throw new Error("Password is required");
      }

      const hashPassword = await this.hashProvider.hash(password);

      const entity = new UserEntity({
        ...input,
        password: hashPassword
      });

      await this.userRepository.insert(entity);

      return entity.toJSON();
    }
  }
}
