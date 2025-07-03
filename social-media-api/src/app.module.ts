import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma';

@Module({
  imports: [UserModule, PrismaModule],
})
export class AppModule { }
