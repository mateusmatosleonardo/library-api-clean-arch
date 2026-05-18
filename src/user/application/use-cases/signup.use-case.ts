import { HashProvider } from "@/shared/application/providers/hash-provider";
import { UseCase as DefaultUseCase } from "@/shared/application/use-cases/use-case";
import { ConflictException } from "@/shared/application/errors/http-exceptions/conflict.exception";
import { BadRequestException } from "@/shared/application/errors/http-exceptions/bad-request.exception";
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
    created_at: Date;
    updated_at: Date;
  };

  export class UseCase implements DefaultUseCase<Input, Output> {
    constructor(
      private readonly userRepository: UserRepository.Repository,
      private readonly hashProvider: HashProvider
    ) {}

    async execute(input: Input): Promise<Output> {
      const requiredFields: (keyof Input)[] = [
        "name",
        "email",
        "phone",
        "cpf",
        "password"
      ];

      const fields: Record<string, string> = {};

      requiredFields.forEach((field) => {
        if (!input[field]) {
          fields[field] = "Field required";
        }
      });

      if (Object.keys(fields).length > 0) {
        throw new BadRequestException("Input data not provided", fields);
      }

      const [emailExists, phoneExists, cpfExists] = await Promise.all([
        this.userRepository.findByEmail(input.email),
        this.userRepository.findByPhone(input.phone),
        this.userRepository.findByCpf(input.cpf)
      ]);

      if (emailExists) {
        throw new ConflictException("Email already in use");
      }

      if (phoneExists) {
        throw new ConflictException("Phone already in use");
      }

      if (cpfExists) {
        throw new ConflictException("Cpf already in use");
      }

      const hashPassword = await this.hashProvider.hash(input.password);

      const entity = new UserEntity({
        ...input,
        password: hashPassword
      });

      const user = await this.userRepository.insert(entity);

      return user.toJSON();
    }
  }
}
