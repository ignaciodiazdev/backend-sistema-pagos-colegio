import { IsNotEmpty, IsString } from "class-validator";
import { Transform } from "class-transformer";

export class UpdateAnioAcademicoDto {
  @IsString()
  @Transform(({ value }) => value.trim())
  @IsNotEmpty()
  nombre: string;
}