import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUpWithMail(body: {
        email: string;
        password: string;
    }): Promise<void>;
    signInWithGoogle(): Promise<{
        provider: import("@supabase/auth-js").Provider;
        url: string;
    }>;
    getUser(token: string): Promise<import("@supabase/auth-js").User>;
}
