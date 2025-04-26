import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "conceptos_pagos" })
export class ConceptoPago {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    nullable: false
  })
  nombre: string;
}