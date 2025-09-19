import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, Index, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { IsEmail, Validate } from "class-validator";
import { Expense } from "src/expense/expense.entity";

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

    @OneToMany(() => Expense, expense => expense.userId)
    expenses: Expense[];
}