import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Expense } from "./expense.entity";
import { Injectable } from "@nestjs/common";
import { CreateExpenseDto } from "./dtos/create-expense.dto";

@Injectable()
export class ExpenseRepository {
    constructor(
        @InjectRepository(Expense)
        private readonly expenseRepository: Repository<Expense>
    ){}

    async createExpense(createExpenseDto: CreateExpenseDto): Promise<Expense>{
        const expense = this.expenseRepository.create(createExpenseDto);
        return this.expenseRepository.save(expense);
    }
}