import { User } from "../entities/user.entity";

export abstract class UserRepository {
    abstract getAll: () => Promise<User>;
}