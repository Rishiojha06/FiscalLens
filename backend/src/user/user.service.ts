import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UserService {
    constructor(
        private readonly userRepository: UserRepository,
    ){}
    async findUserByIdOrThow(id: string): Promise<User>{
        return await this.userRepository.findUserByIdOrThow(id);
    }

    async getAllUsers(): Promise<User[]>{
        return await this.userRepository.getAllUsers();
    }

    async createUser(createUser: CreateUserDto): Promise<User> {
        return await this.userRepository.createUser(createUser);
    }
    
    async getUserByUserId(user_id: string): Promise<User> {
        console.log(`S - User ID: ${user_id}`)
        return await this.userRepository.getUserByUserId(user_id);
    }

    async updateUser(context: {updateUserDto: UpdateUserDto, user_id: string}): Promise<User> {
        return await this.userRepository.updateUser(context);
    }
}
