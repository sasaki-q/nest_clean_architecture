import { User } from "../entities/user.entity";

export abstract class UserRepository {
    abstract getAll: () => Promise<User[]>;
    abstract create: (user: User) => Promise<User>;
}