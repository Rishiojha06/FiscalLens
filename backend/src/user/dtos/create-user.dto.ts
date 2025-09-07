import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsOptional, IsString, Max, Min } from "class-validator";

export class CreateUserDto{

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    @Min(10)
    @Max(100)
    age?: number;
}