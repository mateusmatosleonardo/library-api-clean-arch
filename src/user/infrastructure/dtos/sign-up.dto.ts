import { SignUpUseCase } from "@/user/application/use-cases/signup.use-case";
import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength
} from "class-validator";

export class SignUpDto implements SignUpUseCase.Input {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @MinLength(8)
  name!: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail({}, { message: "E-mail inválido" })
  @MaxLength(255)
  email!: string;

  @IsString()
  @IsNotEmpty()
  @IsPhoneNumber("BR", { message: "Número de telefone inválido" })
  @MaxLength(11)
  phone!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(11)
  cpf!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8, { message: "Senha deve ter no mínimo 8 caracteres" })
  @MaxLength(255, { message: "Senha deve ter no máximo 255 caracteres" })
  password!: string;
}
