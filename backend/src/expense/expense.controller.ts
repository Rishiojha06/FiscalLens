import { Body, Controller, Post } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { CreateExpenseDto } from './dtos/create-expense.dto';
import { Expense } from './expense.entity';
import { ApiSchema, ApiTags } from '@nestjs/swagger';

@Controller('expense')
@ApiTags("Expense Endpoints")
export class ExpenseController {
    constructor(
        private readonly expenseService: ExpenseService,
    ){}

    @Post()
    async createExpense(@Body() createExpenseDto: CreateExpenseDto): Promise<Expense> {
        return this.expenseService.createExpense(createExpenseDto);
    }
} 
