import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserDataModule } from './frameworks/user/user.data.module';
import { UserModule } from './services/user/user.module';

@Module({
    imports: [
        UserModule,
        UserDataModule,
    ],
    controllers: [
        UserController,
    ]
})
export class ApisModule {}
