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
    //Todo: This is approach is not feasible when multiple users try to create at a same time therefore either implement DB Sequence or DB Locking.
    const lastUser = await this.userRepository
      .createQueryBuilder("user")
      .orderBy("user.user_id", "DESC")
      .getOne();

    let nextNumber = 1;
    if (lastUser && lastUser.user_id) {
      const lastNumber = parseInt(lastUser.user_id.replace("USR", ""), 10);
      nextNumber = lastNumber + 1;
    }
    const user_id = `USR${nextNumber.toString().padStart(6, "0")}`;
    const { name, email, age } = createUserDto;
    const user = this.userRepository.create({ name, email, age, user_id });

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

  async getUserByUserId(user_id: string): Promise<User> {
    return await this.userRepository.findOneOrFail({where:{user_id}});
  }
  
  async updateUser(context: {updateUserDto: UpdateUserDto, user_id: string}): Promise<User> {
    const {updateUserDto, user_id} = context;
    const user = await this.getUserByUserId(user_id);
    if(!user) throw new Error(`User does not exist for user Id: ${user_id}`);

    const updatedUser = this.userRepository.merge(user, updateUserDto);
    return await this.userRepository.save(updatedUser);
  }
}