import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserGuard implements CanActivate {

  constructor(private jwtService: JwtService) { }

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const token = request.headers['auth-token'];
    if (!token || Array.isArray(token)) {
      throw new UnauthorizedException('No token was provided');
    }
    try {
      const payload = await this.jwtService.verify(token, { algorithms: ['HS256'] });
    } catch (error) {
      console.error(error);
      throw new UnauthorizedException('Invalid token', { cause: error });
    }
    return true;
  }
}
