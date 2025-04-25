import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';

@Controller('alumnos')
export class AlumnosController {
  constructor(private readonly alumnosService: AlumnosService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createAlumnoDto: CreateAlumnoDto) {
    return this.alumnosService.create(createAlumnoDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.alumnosService.findAll();
  }

  @Get('buscar')
  @HttpCode(HttpStatus.OK)
  async findByName(@Query('nombre') nombre: string) {
    return this.alumnosService.findByName(nombre);
  }
  
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.alumnosService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateAlumnoDto: UpdateAlumnoDto) {
    return this.alumnosService.update(id, updateAlumnoDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.alumnosService.remove(id);
  }
}