import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity()
export class reserva 
 {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()  
    lastName: string

    @Column()
    age: number
}