import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsAlpha, IsDate, IsNumber, IsString, IsUUID } from "class-validator";

export class CreateExpenseDto {
    @ApiProperty()
    @IsUUID()
    userId: string;

    @ApiProperty()
    @IsNumber()
    amount: number;

    @ApiProperty()
    @IsUUID()
    category: string;

    @ApiProperty()
    @Type(() => Date)
    @IsDate()
    transactionDate: Date;

    @ApiProperty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsString()
    paymentMethod: string;
}