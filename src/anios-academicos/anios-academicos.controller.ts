import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, ParseUUIDPipe } from '@nestjs/common';
import { AniosAcademicosService } from './anios-academicos.service';
import { CreateAnioAcademicoDto } from './dto/create-anio-academico.dto';
import { UpdateAnioAcademicoDto } from './dto/update-anio-academico.dto';

@Controller('anios-academicos')
export class AniosAcademicosController {
  constructor(private readonly aniosAcademicosService: AniosAcademicosService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createAnioAcademicoDto: CreateAnioAcademicoDto) {
    return this.aniosAcademicosService.create(createAnioAcademicoDto);
  }

  @Get()
  findAll() {
    return this.aniosAcademicosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.aniosAcademicosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateAnioAcademicoDto: UpdateAnioAcademicoDto) {
    return this.aniosAcademicosService.update(id, updateAnioAcademicoDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.aniosAcademicosService.remove(id);
  }
}