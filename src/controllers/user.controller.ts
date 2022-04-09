import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "src/core/dtos/user.dto";
import { User } from "src/core/entities/user.entity";
import { UserService, UserFactoryService } from "src/services/user";
import { mylog } from "src/utils";

@Controller("/user")
export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly userFactoryService: UserFactoryService,
    ){}

    @Get("/")
    async getAll(): Promise<User[]> {
        return await this.userService.getAll();
    }

    @Post("/")
    async create(
        @Body() dto: CreateUserDto,
    ): Promise<User | boolean> {
        try{
            const newUser = this.userFactoryService.createNewUser(dto);
            const createdUser = await this.userService.create(newUser)
            mylog(`DEBUG created user === ${createdUser}`);
            return createdUser
        }catch(err) {
            mylog(`DEBUG error message === ${err}`)
            return false
        }
    }
}