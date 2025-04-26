import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { MetodosPagosService } from './metodos-pagos.service';
import { CreateMetodoPagoDto } from './dto/create-metodo-pago.dto';
import { UpdateMetodoPagoDto } from './dto/update-metodo-pago.dto';

@Controller('metodos-pagos')
export class MetodosPagosController {
  constructor(private readonly metodosPagosService: MetodosPagosService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createMetodoPagoDto: CreateMetodoPagoDto) {
    return this.metodosPagosService.create(createMetodoPagoDto);
  }

  @Get()
  findAll() {
    return this.metodosPagosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.metodosPagosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateMetodoPagoDto: UpdateMetodoPagoDto) {
    return this.metodosPagosService.update(id, updateMetodoPagoDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.metodosPagosService.remove(id);
  }
}