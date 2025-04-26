import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMetodoPagoDto } from './dto/create-metodo-pago.dto';
import { UpdateMetodoPagoDto } from './dto/update-metodo-pago.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MetodoPago } from './entities/metodo-pago.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MetodosPagosService {
  constructor(
    @InjectRepository(MetodoPago)
    private readonly metodoPagoRepository: Repository<MetodoPago>,
  ){}

  async create(createMetodoPagoDto: CreateMetodoPagoDto) : Promise<MetodoPago> {
    const metodoPago = this.metodoPagoRepository.create(createMetodoPagoDto);
    return this.metodoPagoRepository.save(metodoPago);
  }

  async findAll() : Promise<MetodoPago[]>{
    const metodosPagos = await this.metodoPagoRepository.find();
    return metodosPagos;
  }

  async findOne(id: string) : Promise<MetodoPago>{
    const metodoPago = await this.metodoPagoRepository.findOneBy({id});
    if(!metodoPago) throw new NotFoundException(`Metodo de Pago con ID ${id} no encontrado`);
    return metodoPago;
  }

  async update(id: string, updateMetodoPagoDto: UpdateMetodoPagoDto) : Promise<MetodoPago>{
    const metodoPago = await this.findOne(id);
    Object.assign(metodoPago, updateMetodoPagoDto);
    return this.metodoPagoRepository.save(metodoPago);
  }

  async remove(id: string) : Promise<void> {
    const result = await this.metodoPagoRepository.delete(id);
    if(result.affected === 0){
      throw new NotFoundException(`Metodo de Pago con ID ${id} no encontrado`);
    }
  }
}
