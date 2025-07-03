import { BadRequestException, InternalServerErrorException, Delete, UseGuards } from '@nestjs/common';
import { Body, Controller, Get, Param, Post, UnprocessableEntityException } from '@nestjs/common';

import { UserService } from './users.service';
import { CreateUserRequestDto } from './dto/create-user-request.dto';
import { CreatedUserDto } from './dto/created-user.dto';
import { LoginRequestDto } from './dto/login-request.dto';
import { AuthTokenDto } from './dto/auth-token.dto';
import { UserGuard } from './guards/user.guard';


@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('create-user')
  async createUser(
    @Body() params: CreateUserRequestDto
  ): Promise<CreatedUserDto> {

    if (!params.email || !params.name || !params.password) {
      throw new BadRequestException('Preencha todos os campos');
    }
    var result = await this.userService.createUser(params);
    // if(result['name'] == "PrismaClientInitializationError"){
    //   throw new InternalServerErrorException("Não foi possível se conectar ao banco de dados");
    // }
    return result;
  }

  @Post('login')
  async Login(
    @Body() params: LoginRequestDto) {

    if (!params.email || !params.email) {
      throw new BadRequestException('Preencha todos os campos');
    }
    var result = this.userService.login(params);
    return result;
  }





  //método feito pro programador deletar oq ele quiser
  @Delete('delete')
  async Delete() {
    return this.userService.delete();
  }

}
