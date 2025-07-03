import { CreateUserRequestDto } from './dto/create-user-request.dto';
import { CreatedUserDto } from './dto/created-user.dto';
import { LoginRequestDto } from './dto/login-request.dto';


import { PrismaService } from '../prisma/prisma.service';
import { HttpStatus, BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthTokenDto } from './dto/auth-token.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(private prismaService : PrismaService,  private jwtServ: JwtService ) {}
  
  async createUser( request : CreateUserRequestDto ) : Promise<CreatedUserDto> {
    try{
      await this.prismaService.user.create({
        data: {
          password: bcrypt.hashSync(request.password,12),
          email : request.email,
          name : request.name 
        }
      });
    }catch (e){
      
      let result = new CreatedUserDto();
      result.message = "Usuário não pode ser criado";
      result.sucessfull = false;
      return result;
      // return 
    }
    
    let result = new CreatedUserDto();
    result.message = "Usuário foi criado com sucesso!";
    result.sucessfull = true;
    return result;
  }

  async login(request : LoginRequestDto) {

    const user = await this.prismaService.user.findFirst({
      where: { email: request.email }, 
    });
    if(!user){
      throw new BadRequestException('Credencias Inválidas');
    }
    const IsPasswordValid = bcrypt.compareSync(request.password, user.password);
    if(IsPasswordValid == false){
      throw new BadRequestException('Credencias Inválidas');
    }
    const token = this.jwtServ.sign({id: user.id})   
    const result = new AuthTokenDto();
    result.access_token = token;
    result.message = "";
    result.user_name = user.name;
    return result;
  }


  async delete(){
    const result = await this.prismaService.user.deleteMany({
      where : { name: ''},
    });
    return result;
  }

}
