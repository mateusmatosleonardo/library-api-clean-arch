import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { BcryptjsHashProvider } from "./hash-provider/bcryptjs-hash.provider";
import { HashProvider } from "@/shared/application/providers/hash-provider";
import { UserRepository } from "../domain/repositories/user.respository";
import { SignUpUseCase } from "../application/use-cases/signup.use-case";
import { PrismaService } from "@/shared/infrastructure/database/prisma/prisma.service";
import { UserPrismaRepository } from "@/shared/infrastructure/database/prisma/repositories/user-prisma.repository";

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    {
      provide: "PrismaService",
      useClass: PrismaService
    },
    {
      provide: "UserRepository",
      useFactory: (prismaService: PrismaService) => {
        return new UserPrismaRepository(prismaService);
      },
      inject: ["PrismaService"]
    },
    {
      provide: "HashProvider",
      useClass: BcryptjsHashProvider
    },
    {
      provide: SignUpUseCase.UseCase,
      useFactory: (
        userRepository: UserRepository.Repository,
        hashProvider: HashProvider
      ) => {
        return new SignUpUseCase.UseCase(userRepository, hashProvider);
      },
      inject: ["UserRepository", "HashProvider"]
    }
  ]
})
export class UserModule {}
