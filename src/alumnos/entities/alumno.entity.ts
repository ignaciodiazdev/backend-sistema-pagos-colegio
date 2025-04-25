import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Alumno {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    nullable: false,
  })
  nombre: string;
}