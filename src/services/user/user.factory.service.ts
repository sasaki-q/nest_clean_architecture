import { CreateUserDto } from "src/core/dtos/user.dto";
import { User } from "src/core/entities/user.entity";

export class UserFactoryService {
    createNewUser(dto: CreateUserDto): User {
        const { name, age } = dto;
        const user = new User()
        user.name = name;
        user.age = age;
        return user;
    }
}