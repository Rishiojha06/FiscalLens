import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateUserDto{

    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsNumber()
    @IsOptional()
    age?: number;
}