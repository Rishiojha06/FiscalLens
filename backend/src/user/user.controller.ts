import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./user.entity";
import { validate as isUUID } from "uuid";
import { CreateUserDto } from "./dtos/create-user.dto";
import { ApiTags } from "@nestjs/swagger";
import { UpdateUserDto } from "./dtos/update-user.dto";

@Controller("user")
@ApiTags("User Endpoints")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(":id")
  async findUserById(@Param("id") id: string): Promise<User> {
    return this.userService.findUserByIdOrThow(id);
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Post()
  async createUser(@Body() createUser: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUser);
  }

  @Patch(":id")
  async updateUser(
    @Body() updateUserDto: UpdateUserDto,
    @Param("id") id: string
  ): Promise<User> {
    const context = { updateUserDto, id };
    return this.userService.updateUser(context);
  }
}
