import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGradoAcademicoDto } from './dto/create-grado-academico.dto';
import { UpdateGradoAcademicoDto } from './dto/update-grado-academico.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { GradoAcademico } from './entities/grado-academico.entity';
import { Repository } from 'typeorm';
import { NivelAcademico } from './enums/nivel-academico.enum';

@Injectable()
export class GradosAcademicosService {
  constructor(
    @InjectRepository(GradoAcademico)
    private readonly gradoAcademicoRepository: Repository<GradoAcademico>,
  ){}

  async create(createGradoAcademicoDto: CreateGradoAcademicoDto) : Promise<GradoAcademico> {
    const gradoAcademico = this.gradoAcademicoRepository.create(createGradoAcademicoDto);
    return this.gradoAcademicoRepository.save(gradoAcademico);
  }

  async findAll() : Promise<GradoAcademico[]> {
    const gradosAcademicos =  await this.gradoAcademicoRepository.find();
    return gradosAcademicos;
  }

  async findByNivel(nivel: NivelAcademico) : Promise<GradoAcademico[]> {
    const gradosAcademicos = await this.gradoAcademicoRepository.find({
      where: {nivel}
    })
    return gradosAcademicos;
  }

  async findOne(id: string) : Promise<GradoAcademico> {
    const gradoAcademico = await this.gradoAcademicoRepository.findOneBy({id});
    if(!gradoAcademico) throw new NotFoundException(`Grado Academico con ID ${id} no encontrado`);
    return gradoAcademico;
  }

  async update(id: string, updateGradoAcademicoDto: UpdateGradoAcademicoDto) : Promise<GradoAcademico>{
    const gradoAcademico = await this.findOne(id);
    Object.assign(gradoAcademico, updateGradoAcademicoDto);
    return this.gradoAcademicoRepository.save(gradoAcademico)
  }

  async remove(id: string) : Promise<void> {
    const deleteResult =  await this.gradoAcademicoRepository.delete(id);
    if(deleteResult.affected === 0){
      throw new NotFoundException(`Grado Academico con ID ${id} no encontrado`)
    }
  }
}