import { IsNotEmpty, IsString } from "class-validator";
import { Transform } from "class-transformer";

export class CreateAnioAcademicoDto {
  @IsString()
  @Transform(({ value }) => value.trim())
  @IsNotEmpty()
  nombre: string;
}