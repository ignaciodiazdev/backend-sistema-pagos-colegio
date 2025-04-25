import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Alumno } from './entities/alumno.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AlumnosService {
  constructor(
    @InjectRepository(Alumno)
    private readonly alumnoRepository: Repository<Alumno>,
  ){}

  async create(createAlumnoDto: CreateAlumnoDto) : Promise<Alumno> {
    const alumno = this.alumnoRepository.create(createAlumnoDto);
    const nuevoAlumno =  await this.alumnoRepository.save(alumno);
    return nuevoAlumno;
  }

  async findAll() {
    const alumnos = await this.alumnoRepository.find();
    return alumnos;
  }

  async findByName(nombre: string): Promise<Alumno[]> {
    if(!nombre){
      return [];
    }
    return await this.alumnoRepository
    .createQueryBuilder('alumno')
    .where('unaccent(LOWER(alumno.nombre)) LIKE unaccent(LOWER(:nombre))', { nombre: `%${nombre}%` })
    .getMany();
  }

  async findOne(id: string) : Promise<Alumno>{
    const alumno = await this.alumnoRepository.findOneBy({id});
    if(!alumno) throw new NotFoundException(`Alumno con ID ${id} no encontrado`)
    return alumno;
  }

  async update(id: string, updateAlumnoDto: UpdateAlumnoDto) : Promise<Alumno>{
    const alumno = await this.findOne(id);
    Object.assign(alumno, updateAlumnoDto);
    return this.alumnoRepository.save(alumno);
  }

  async remove(id: string): Promise<void> {
    const deleteResult = await this.alumnoRepository.delete(id);
    if(deleteResult.affected === 0){
      throw new NotFoundException(`Alumno con ID ${id} no encontrado`)
    }
  }
}