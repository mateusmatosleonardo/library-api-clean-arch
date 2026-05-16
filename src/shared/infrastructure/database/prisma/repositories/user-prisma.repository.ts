import { UserRepository } from "@/user/domain/repositories/user.respository";
import { PrismaService } from "../prisma.service";
import { UserEntity } from "@/user/domain/entities/user.entity";
import { UserModelMapper } from "../models/user-model.mapper";

export class UserPrismaRepository implements UserRepository.Repository {
  constructor(private prismaService: PrismaService) {}

  async findByEmail(email: string): Promise<UserEntity | null> {
    const user = await this.prismaService.user.findUnique({
      where: { email }
    });
    return user ? UserModelMapper.toEntity(user) : null;
  }

  async findByPhone(phone: string): Promise<UserEntity | null> {
    const user = await this.prismaService.user.findUnique({
      where: { phone }
    });
    return user ? UserModelMapper.toEntity(user) : null;
  }

  async findByCpf(cpf: string): Promise<UserEntity | null> {
    const user = await this.prismaService.user.findUnique({
      where: { cpf }
    });
    return user ? UserModelMapper.toEntity(user) : null;
  }

  async findById(id: string): Promise<UserEntity | null> {
    const user = await this.prismaService.user.findUnique({
      where: { id }
    });

    return user ? UserModelMapper.toEntity(user) : null;
  }

  async insert(entity: UserEntity): Promise<void> {
    await this.prismaService.user.create({
      data: {
        id: entity.id,
        name: entity.name,
        email: entity.email,
        phone: entity.phone,
        cpf: entity.cpf,
        password: entity.password
      }
    });
  }

  findAll(): Promise<UserEntity[]> {
    throw new Error("Method not implemented.");
  }

  update(entity: UserEntity): Promise<void> {
    void entity;
    throw new Error("Method not implemented.");
  }

  delete(id: string): Promise<void> {
    void id;
    throw new Error("Method not implemented.");
  }
}
