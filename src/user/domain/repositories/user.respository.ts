import { RepositoryInterface } from "@/shared/domain/repositories/repository-contracts";
import { UserEntity } from "../entities/user.entity";

export namespace UserRepository {
  export interface Repository extends RepositoryInterface<UserEntity> {
    findByEmail(email: string): Promise<UserEntity | null>;
    findByPhone(phone: string): Promise<UserEntity | null>;
    findByCpf(cpf: string): Promise<UserEntity | null>;
  }
}
