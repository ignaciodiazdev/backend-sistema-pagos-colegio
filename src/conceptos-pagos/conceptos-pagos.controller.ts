import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { ConceptosPagosService } from './conceptos-pagos.service';
import { CreateConceptoPagoDto } from './dto/create-concepto-pago.dto';
import { UpdateConceptoPagoDto } from './dto/update-concepto-pago.dto';

@Controller('conceptos-pagos')
export class ConceptosPagosController {
  constructor(private readonly conceptosPagosService: ConceptosPagosService) {}

  @Post()
  create(@Body() createConceptoPagoDto: CreateConceptoPagoDto) {
    return this.conceptosPagosService.create(createConceptoPagoDto);
  }

  @Get()
  findAll() {
    return this.conceptosPagosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.conceptosPagosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateConceptoPagoDto: UpdateConceptoPagoDto) {
    return this.conceptosPagosService.update(id, updateConceptoPagoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.conceptosPagosService.remove(id);
  }
}