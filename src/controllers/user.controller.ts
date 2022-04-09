import { Controller, Get } from "@nestjs/common";
import { User } from "src/core/entities/user.entity";
import { UserService } from "src/services/user/user.service";

@Controller("/user")
export class UserController {
    constructor(
        private readonly userService: UserService,
    ){}

    @Get("/")
    async getAll(): Promise<User[]> {
        return await this.userService.getAll();
    }
}