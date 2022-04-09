import { Module } from "@nestjs/common";
import { UserDataModule } from "src/frameworks/user/user.data.module";
import { UserService } from "./user.service";

@Module({
    imports: [
        UserDataModule,
    ],
    providers: [
        UserService,
    ],
    exports: [
        UserService,
    ]
})
export class UserModule{}