import { UserEntity } from "@/user/domain/entities/user.entity";
import { User } from "@prisma/client";

export class UserModelMapper {
  static toEntity(model: User) {
    const data = {
      name: model.name,
      email: model.email,
      phone: model.phone,
      cpf: model.cpf,
      password: model.password,
      created_at: model.created_at,
      updated_at: model.updated_at
    };

    return new UserEntity(data, model.id);
  }
}
