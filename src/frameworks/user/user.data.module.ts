import { Module } from "@nestjs/common";
import { UserRepository } from "src/core/repositories/user.repository";
import { UserDataService } from "./user.data.service";

@Module({
    imports: [],
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