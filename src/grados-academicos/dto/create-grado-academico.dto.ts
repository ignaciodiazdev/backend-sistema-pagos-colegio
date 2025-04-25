import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { NivelAcademico } from "../enums/nivel-academico.enum";
import { Transform } from "class-transformer";

export class CreateGradoAcademicoDto {
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsEnum(NivelAcademico)
  nivel: NivelAcademico;
}