import { Module } from "@nestjs/common";
import { UserDataModule } from "src/frameworks/user/user.data.module";
import { UserFactoryService } from "./user.factory.service";
import { UserService } from "./user.service";

@Module({
    imports: [
        UserDataModule,
    ],
    providers: [
        UserService,
        UserFactoryService,
    ],
    exports: [
        UserService,
        UserFactoryService,
    ]
})
export class UserModule{}