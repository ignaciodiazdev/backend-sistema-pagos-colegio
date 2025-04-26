import { Module } from '@nestjs/common';
import { ConceptosPagosService } from './conceptos-pagos.service';
import { ConceptosPagosController } from './conceptos-pagos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConceptoPago } from './entities/concepto-pago.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ConceptoPago])],
  controllers: [ConceptosPagosController],
  providers: [ConceptosPagosService],
})
export class ConceptosPagosModule {}