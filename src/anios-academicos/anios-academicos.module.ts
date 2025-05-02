import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AniosAcademicosService } from './anios-academicos.service';
import { AniosAcademicosController } from './anios-academicos.controller';
import { AnioAcademico } from './entities/anio-academico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AnioAcademico])],
  controllers: [AniosAcademicosController],
  providers: [AniosAcademicosService],
})
export class AniosAcademicosModule {}