import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login() {
    return this.authService.login();
  }

  @Get('refresh')
  refresh() {
    return this.authService.refresh();
  }

  @Post('logout')
  logout() {
    return this.authService.logout();
  }
}
