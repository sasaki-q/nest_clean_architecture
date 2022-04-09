import { Inject, InternalServerErrorException } from "@nestjs/common";
import { User } from "src/core/entities/user.entity";
import { UserRepository } from "src/core/repositories/user.repository";

export class UserService {
    constructor(
        @Inject(UserRepository)
        private readonly userDataService: UserRepository
    ){}

    async getAll(): Promise<User[]> {
        try{
            return await this.userDataService.getAll();
        }catch(err){
            throw new InternalServerErrorException()
        }
    }
}