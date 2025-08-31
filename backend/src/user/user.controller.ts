import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import {validate as isUUID} from 'uuid';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ){}
    @Get(':id')
    async findUserById(@Param('id') id: string): Promise<User>{
        return this.userService.findUserByIdOrThow(id);
    }

    @Get()
    async getAllUsers():Promise<User[]>{
        return this.userService.getAllUsers();
    }
}
