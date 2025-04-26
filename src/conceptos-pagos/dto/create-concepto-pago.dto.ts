import { IsNotEmpty, IsString } from "class-validator";
import { Transform } from "class-transformer";

export class CreateConceptoPagoDto {
  @IsString()
  @Transform(({ value }) => (value as string).trim())
  @IsNotEmpty()
  nombre: string;
}