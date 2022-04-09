import { Inject, InternalServerErrorException } from "@nestjs/common";
import { User } from "src/core/entities/user.entity";
import { UserRepository } from "src/core/repositories/user.repository";

export class UserService {
    constructor(
        @Inject(UserRepository)
        private readonly userDataService: UserRepository
    ){}

    async getAll(): Promise<User[]> {
        return await this.userDataService.getAll();
    }

    async create(user: User): Promise<User>{
        return await this.userDataService.create(user);
    }
}