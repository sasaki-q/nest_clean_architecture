import { Inject, InternalServerErrorException } from "@nestjs/common";
import { User } from "src/core/entities/user.entity";
import { UserRepository } from "src/core/repositories/user.repository";
import { mylog } from "src/utils";

export class UserService {
    constructor(
        @Inject(UserRepository)
        private readonly userDataService: UserRepository
    ){}

    async getAll(): Promise<User> {
        try{
            return await this.userDataService.getAll();
        }catch(err){
            mylog(`DEBUG error message === ${err}`)
            throw new InternalServerErrorException()
        }
    }
}