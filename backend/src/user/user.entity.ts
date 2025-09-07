import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, Index } from "typeorm";
import { IsEmail, Validate } from "class-validator";

@Index('IDX_USER_ID', ['user_id'])
@Entity()
export class User{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({unique: true, nullable: false})
    user_id: string;

    @Column()
    name: string;

    @Column({nullable: true})
    age?: number;

    @Column({unique: true})
    @IsEmail({}, {message: "Invalid Email format"})
    email: string;
}