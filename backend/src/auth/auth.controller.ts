import { Body, Controller, Post, Get, Query, Redirect } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { SignupDto } from './dtos/signup.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  @ApiBody({type: SignupDto})
  async signUpWithMail(@Body() body: SignupDto) {
    const { email, password } = body;
    return await this.authService.signUpWithEmail(email, password);
  }

  @Get('google')
  async signInWithGoogle() {
    return this.authService.signInWithGoogle();
  }

  @Get('user')
  async getUser(@Query('access_token') token: string) {
    return this.authService.getUser(token);
  }
}
