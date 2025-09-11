import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, Index } from "typeorm";
import { IsEmail, Validate } from "class-validator";

@Entity()
export class User{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({nullable: true})
    age?: number;

    @Column({unique: true})
    @IsEmail({}, {message: "Invalid Email format"})
    email: string;
}