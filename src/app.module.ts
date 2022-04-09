import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApisModule } from './apis.module';
import { ormConfig } from './config/ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    ApisModule
  ],
})
export class AppModule {}
