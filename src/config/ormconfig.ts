import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "src/core/entities/user.entity";

export const ormConfig: TypeOrmModuleOptions = {
    type: "postgres",
    host: "localhost",
    database: "test",
    username: "postgres",
    password: "postgres",
    entities: [User],
    synchronize: false,
}