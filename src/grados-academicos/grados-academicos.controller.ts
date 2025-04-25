import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, Query, ValidationPipe } from '@nestjs/common';
import { GradosAcademicosService } from './grados-academicos.service';
import { CreateGradoAcademicoDto } from './dto/create-grado-academico.dto';
import { UpdateGradoAcademicoDto } from './dto/update-grado-academico.dto';
import { FindGradoAcademicoByNivelDto } from './dto/find-grado-academico-by-nivel.dto';

@Controller('grados-academicos')
export class GradosAcademicosController {
  constructor(private readonly gradosAcademicosService: GradosAcademicosService) {}

  @Post()
  create(@Body() createGradoAcademicoDto: CreateGradoAcademicoDto) {
    return this.gradosAcademicosService.create(createGradoAcademicoDto);
  }

  @Get()
  findAll() {
    return this.gradosAcademicosService.findAll();
  }

  @Get('buscar')
  findByNivel(@Query() query: FindGradoAcademicoByNivelDto){
    return this.gradosAcademicosService.findByNivel(query.nivel);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.gradosAcademicosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateGradoAcademicoDto: UpdateGradoAcademicoDto) {
    return this.gradosAcademicosService.update(id, updateGradoAcademicoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.gradosAcademicosService.remove(id);
  }
}
