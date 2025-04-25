import { IsEnum, IsNotEmpty } from "class-validator";
import { NivelAcademico } from "../enums/nivel-academico.enum";

export class FindGradoAcademicoByNivelDto {
  @IsNotEmpty()
  @IsEnum(NivelAcademico)
  nivel: NivelAcademico;
}