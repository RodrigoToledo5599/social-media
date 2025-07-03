import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './users.service';
import { JwtModule } from '@nestjs/jwt';
import { UserGuard } from './guards/user.guard'

@Module({
  imports: [
    JwtModule.register({
      secret: 'segredao',
      global: true,
      signOptions: { expiresIn: '2h', algorithm: 'HS256' },
    })
  ],
  controllers: [UserController],
  providers: [UserService, UserGuard],
  exports: [UserGuard]
})
export class UserModule { }
