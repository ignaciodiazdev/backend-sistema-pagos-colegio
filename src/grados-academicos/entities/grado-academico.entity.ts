import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { NivelAcademico } from "../enums/nivel-academico.enum";

@Entity({ name: "grados_academicos" })
export class GradoAcademico {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    nullable: false,
  })
  nombre: string;

  @Column({
    type: 'enum',  enum: NivelAcademico, nullable: false
  })
  nivel: NivelAcademico;
}