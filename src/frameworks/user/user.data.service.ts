import { InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/core/entities/user.entity";
import { UserRepository } from "src/core/repositories/user.repository";
import { Repository } from "typeorm";

export class UserDataService implements UserRepository {
    constructor(){}

    async getAll(): Promise<User> {
        try{
            return new User()
        }catch(err){
            throw new InternalServerErrorException();
        }
    }
}