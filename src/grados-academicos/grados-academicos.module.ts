import { Module } from '@nestjs/common';
import { GradosAcademicosService } from './grados-academicos.service';
import { GradosAcademicosController } from './grados-academicos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GradoAcademico } from './entities/grado-academico.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([GradoAcademico])
  ],
  controllers: [GradosAcademicosController],
  providers: [GradosAcademicosService],
})
export class GradosAcademicosModule {}