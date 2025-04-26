import { IsNotEmpty, IsString } from "class-validator";
import { Transform } from "class-transformer";

export class UpdateConceptoPagoDto {
  @IsString()
  @Transform(({ value }) => (value as string).trim())
  @IsNotEmpty()
  nombre: string;
}