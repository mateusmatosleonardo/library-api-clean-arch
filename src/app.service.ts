import { Injectable } from "@nestjs/common";
import { UserEntity } from "@/user/domain/entities/user.entity";

@Injectable()
export class AppService {
  private user = new UserEntity({
    name: "John Doe",
    email: "john.doe@example.com"
  });

  getHello(): string {
    console.log(this.user.toJSON());
    return "Hello World!";
  }
}
