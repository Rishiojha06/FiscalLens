import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import {validate as isUUID} from 'uuid';
import { CreateUserDto } from './dtos/create-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('user')
@ApiTags('User Endpoints')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ){}

@Get(':identifier')
async findUserById(@Param('identifier') identifier: string): Promise<User> {
    if (identifier.startsWith('USR')) {
        console.log(`Searching by user_id: ${identifier}`);
        return this.userService.getUserByUserId(identifier);
    } else {
        console.log(`Searching by id: ${identifier}`);
        return this.userService.findUserByIdOrThow(identifier);
    }
}

    @Get()
    async getAllUsers():Promise<User[]>{
        return this.userService.getAllUsers();
    }

    @Post()
    async createUser(@Body() createUser: CreateUserDto): Promise<User> {
        return this.userService.createUser(createUser);
    }

    @Patch(':user_id')
    async updateUser(
        @Body() updateUserDto: UpdateUserDto,
        @Param('user_id') user_id: string,
    ): Promise<User> {
        const context = {updateUserDto, user_id}
        return this.userService.updateUser(context);
    }
}
