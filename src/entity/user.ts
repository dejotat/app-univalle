import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity()
export class user 
 {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Nombre: string

    @Column()
    Apellido: string

    @Column()
    Edad: number
}