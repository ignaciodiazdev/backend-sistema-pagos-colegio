import { PartialType } from '@nestjs/mapped-types';
import { CreateGradoAcademicoDto } from './create-grado-academico.dto';

export class UpdateGradoAcademicoDto extends PartialType(CreateGradoAcademicoDto) {}
