import { Repository } from "typeorm";
import { User } from "./user.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
     ){}
    async findUserByIdOrThow(id: string): Promise<User>{
        try {
            return await this.userRepository.findOneByOrFail({ id });
        } catch (error) {
            throw new Error(`User does not exist for user Id: ${id}`);
        }
    }
    async getAllUsers(): Promise<User[]>{
        return await this.userRepository.find();
    }
}