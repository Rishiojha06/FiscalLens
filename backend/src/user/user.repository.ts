import { Repository } from "typeorm";
import { User } from "./user.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  }

  async findUserByIdOrThow(id: string): Promise<User> {
    try {
      return await this.userRepository.findOneByOrFail({ id });
    } catch (error) {
      throw new Error(`User does not exist for user Id: ${id}`);
    }
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }
  
  async updateUser(context: {updateUserDto: UpdateUserDto, id: string}): Promise<User> {
    const {updateUserDto, id} = context;
    const user = await this.findUserByIdOrThow(id);
    const updatedUser = this.userRepository.merge(user, updateUserDto);
    return await this.userRepository.save(updatedUser);
  }
}