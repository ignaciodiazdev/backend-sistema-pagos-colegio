import { Module } from '@nestjs/common';
import { AlumnosModule } from './alumnos/alumnos.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GradosAcademicosModule } from './grados-academicos/grados-academicos.module';
import { ConceptosPagosModule } from './conceptos-pagos/conceptos-pagos.module';
import { MetodosPagosModule } from './metodos-pagos/metodos-pagos.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true
    }),
    AlumnosModule,
    GradosAcademicosModule,
    ConceptosPagosModule,
    MetodosPagosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}