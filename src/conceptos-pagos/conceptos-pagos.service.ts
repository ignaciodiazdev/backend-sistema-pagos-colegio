import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateConceptoPagoDto } from './dto/create-concepto-pago.dto';
import { UpdateConceptoPagoDto } from './dto/update-concepto-pago.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ConceptoPago } from './entities/concepto-pago.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ConceptosPagosService {
  constructor(
    @InjectRepository(ConceptoPago)
    private readonly conceptoPagoRepository: Repository<ConceptoPago>
  ){}

  async create(createConceptoPagoDto: CreateConceptoPagoDto) : Promise<ConceptoPago>{
    const conceptoPago = this.conceptoPagoRepository.create(createConceptoPagoDto);
    return this.conceptoPagoRepository.save(conceptoPago);
  }

  async findAll() : Promise<ConceptoPago[]>{
    const conceptosPagos = await this.conceptoPagoRepository.find();
    return conceptosPagos;
  }

  async findOne(id: string) : Promise<ConceptoPago>{
    const conceptoPago = await this.conceptoPagoRepository.findOneBy({id});
    if(!conceptoPago) throw new NotFoundException(`Concepto de Pago con ID ${id} no encontrado`)
    return conceptoPago;
  }

  async update(id: string, updateConceptoPagoDto: UpdateConceptoPagoDto) : Promise<ConceptoPago>{
    const conceptoPago = await this.findOne(id);
    Object.assign(conceptoPago, updateConceptoPagoDto);
    return this.conceptoPagoRepository.save(conceptoPago);
  }

  async remove(id: string) : Promise<void> {
    const result = await this.conceptoPagoRepository.delete(id);
    if(result.affected === 0){
      throw new NotFoundException(`Grado Academico con ID ${id} no encontrado`)
    }
  }
}