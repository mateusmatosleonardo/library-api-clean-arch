import { User } from "@/application/dto/user/user.dto"

export interface UserRepository {
  save(user: User): Promise<{ id: string }>
  findByEmail(email: string): Promise<User | null>
  findByCpf(cpf: string): Promise<User | null>
  findAll(): Promise<User[] | null>
  update(id: string, user: Partial<User>): Promise<User | null>
  delete(id: string): Promise<{ message: string } | null>
}
