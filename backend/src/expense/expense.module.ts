import { Module } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { ExpenseController } from './expense.controller';
import { ExpenseRepository } from './expense.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expense } from './expense.entity';
import { UserService } from '../user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([Expense])],
  providers: [ExpenseService, ExpenseRepository],
  controllers: [ExpenseController],
})
export class ExpenseModule {}