import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { Logger } from '@nestjs/common';
@Injectable()
export class AuthService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async signUpWithEmail(email: string, password: string) {
    const result = await this.supabaseService.getClient().auth.signUp({
      email,
      password,
    });
    Logger.log(result);
  }

  async signInWithGoogle() {
    const { data, error } = await this.supabaseService
      .getClient()
      .auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `http://localhost:3000/auth/callback`,
          queryParams: { access_type: 'offline' },
          skipBrowserRedirect: true,
        },
      });

    if (error) throw new UnauthorizedException(error.message);
    return data;
  }

  async getUser(accessToken: string) {
    const { data, error } = await this.supabaseService
      .getClient()
      .auth.getUser(accessToken);

    if (error) throw new UnauthorizedException(error.message);
    return data.user;
  }
}
