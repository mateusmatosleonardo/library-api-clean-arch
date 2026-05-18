import { Controller, Post, Body, Inject } from "@nestjs/common";
import { SignUpUseCase } from "../application/use-cases/signup.use-case";
import { SignUpDto } from "./dtos/sign-up.dto";

@Controller("users")
export class UserController {
  @Inject(SignUpUseCase.UseCase)
  private signUpUseCase!: SignUpUseCase.UseCase;

  @Post()
  async create(@Body() signUpDto: SignUpDto) {
    return this.signUpUseCase.execute(signUpDto);
  }
}
