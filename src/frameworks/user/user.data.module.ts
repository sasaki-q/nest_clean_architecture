import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/core/entities/user.entity";
import { UserRepository } from "src/core/repositories/user.repository";
import { UserDataService } from "./user.data.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            User
        ])
    ],
    providers: [
        {
            provide: UserRepository,
            useClass: UserDataService,
        }
    ],
    exports: [
        UserRepository
    ]
})
export class UserDataModule{}