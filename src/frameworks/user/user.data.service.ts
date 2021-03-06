import { InternalServerErrorException } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/core/entities/user.entity";
import { UserRepository } from "src/core/repositories/user.repository";
import { mylog } from "src/utils";

export class UserDataService implements UserRepository {
    constructor(
        @InjectRepository(User)
        private readonly userRepo: Repository<User>
    ){}

    async getAll(): Promise<User[]> {
        return await this.userRepo.find();
    }

    async create(user: User): Promise<User> {
        return await this.userRepo.save(user);
    }
}