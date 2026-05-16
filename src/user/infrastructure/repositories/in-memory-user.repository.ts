import { UserEntity } from "@/user/domain/entities/user.entity";
import { UserRepository } from "@/user/domain/repositories/user.respository";

export class InMemoryUserRepository implements UserRepository.Repository {
  private readonly users = new Map<string, UserEntity>();

  findByEmail(email: string): Promise<UserEntity | null> {
    const user = Array.from(this.users.values()).find(
      (user) => user.email === email
    );
    return Promise.resolve(user || null);
  }

  findByPhone(phone: string): Promise<UserEntity | null> {
    const user = Array.from(this.users.values()).find(
      (user) => user.phone === phone
    );
    return Promise.resolve(user || null);
  }

  findByCpf(cpf: string): Promise<UserEntity | null> {
    const user = Array.from(this.users.values()).find(
      (user) => user.cpf === cpf
    );
    return Promise.resolve(user || null);
  }

  insert(entity: UserEntity): Promise<void> {
    this.users.set(entity.id, entity);
    return Promise.resolve();
  }

  findById(id: string): Promise<UserEntity> {
    const user = this.users.get(id);
    if (!user) {
      return Promise.reject(new Error("User not found"));
    }
    return Promise.resolve(user);
  }

  findAll(): Promise<UserEntity[]> {
    return Promise.resolve([...this.users.values()]);
  }

  update(entity: UserEntity): Promise<void> {
    this.users.set(entity.id, entity);
    return Promise.resolve();
  }

  delete(id: string): Promise<void> {
    this.users.delete(id);
    return Promise.resolve();
  }
}
