import { Injectable } from '@nestjs/common';
import { ExpenseRepository } from './expense.repository';
import { Expense } from './expense.entity';
import { CreateExpenseDto } from './dtos/create-expense.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class ExpenseService {
    constructor (
        private readonly expenseRepository: ExpenseRepository,
        private readonly userService: UserService,
    ){}

    async createExpense(createExpenseDto: CreateExpenseDto): Promise<Expense> {
        const {userId} = createExpenseDto;
        this.userService.findUserByIdOrThow(userId);
        return this.expenseRepository.createExpense(createExpenseDto);
    }
}
