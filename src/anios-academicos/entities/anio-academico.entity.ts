import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'anios_academicos' })
export class AnioAcademico {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    unique: true
  })
  nombre: string;
}