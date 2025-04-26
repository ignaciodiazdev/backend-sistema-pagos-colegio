import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "metodos_pagos" })
export class MetodoPago { 
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    nullable: false
  })
  nombre: string;
}