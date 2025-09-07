import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";
import { IsEmail, Validate } from "class-validator";

@Entity()
export class User{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({unique: true})
    user_id: string;

    @Column()
    name: string;

    @Column({nullable: true})
    age?: number;

    @Column()
    @IsEmail({}, {message: "Invalid Email format"})
    email: string;
}