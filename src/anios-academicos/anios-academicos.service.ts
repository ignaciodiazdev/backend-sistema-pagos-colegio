import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateAnioAcademicoDto } from './dto/create-anio-academico.dto';
import { UpdateAnioAcademicoDto } from './dto/update-anio-academico.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AnioAcademico } from './entities/anio-academico.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AniosAcademicosService {
  constructor(
    @InjectRepository(AnioAcademico)
    private readonly anioAcademicoRepository: Repository<AnioAcademico>,
  ){}

  async create(createAnioAcademicoDto: CreateAnioAcademicoDto) : Promise<AnioAcademico> {
    try {
      const anioAcademico = this.anioAcademicoRepository.create(createAnioAcademicoDto);
      await this.anioAcademicoRepository.save(anioAcademico);
      return anioAcademico;
    } catch (error) {
      this.handleDatabaseError(error);
    }
  }

  async findAll() : Promise<AnioAcademico[]> {
    const aniosAcademicos = await this.anioAcademicoRepository.find();
    return aniosAcademicos;
  }

  async findOne(id: string) : Promise<AnioAcademico> {
    const anioAcademico = await this.anioAcademicoRepository.findOneBy({ id });
    if(!anioAcademico) throw new NotFoundException(`El Año Académico con id ${id} no encontrado`);
    return anioAcademico;
  }

  async update(id: string, updateAnioAcademicoDto: UpdateAnioAcademicoDto) : Promise<AnioAcademico> {
    const anioAcademico = await this.findOne(id);
    try {
      Object.assign(anioAcademico, updateAnioAcademicoDto);
      return await this.anioAcademicoRepository.save(anioAcademico);
    } catch (error) {
      this.handleDatabaseError(error);
    }
  }

  async remove(id: string) : Promise<void> {
    const result = await this.anioAcademicoRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Año Académico con id ${id} no encontrado`);
    }
  }

  private handleDatabaseError(error: any) {
    if (error.code === '23505') {
      throw new ConflictException('El año académico ya existe');
    }
    throw new InternalServerErrorException('Error al procesar la solicitud');
  }
}