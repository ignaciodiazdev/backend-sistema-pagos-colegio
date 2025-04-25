import { Transform } from "class-transformer";
import { IsString, MinLength } from "class-validator";

export class CreateAlumnoDto {
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString()
  @MinLength(10)
  nombre: string;
}