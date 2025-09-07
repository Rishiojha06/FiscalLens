import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateUserDto {

    @ApiProperty()
    @IsOptional()
    @IsString()
    name?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    @IsEmail()
    email?: string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    age?: number;
}