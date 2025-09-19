import { timestamp } from "rxjs";
import { User } from "src/user/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Expense {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    userId: string;

    @ManyToOne(() => User, user => user.expenses)
    @JoinColumn({name: 'userId'})
    user: User;
    
    @Column()
    amount: number;

    @Column({type: 'uuid'})
    category: string;

    @Column()
    transactionDate: Date;

    @CreateDateColumn({type: 'timestamp'})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp'})
    updatedAt: Date;

    @Column()
    description: string;

    @Column()
    paymentMethod: string;
}