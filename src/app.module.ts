import { Module } from '@nestjs/common';
import { ApisModule } from './apis.module';

@Module({
  imports: [ApisModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
