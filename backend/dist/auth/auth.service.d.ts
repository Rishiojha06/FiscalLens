import { SupabaseService } from '../supabase/supabase.service';
export declare class AuthService {
    private readonly supabaseService;
    constructor(supabaseService: SupabaseService);
    signUpWithEmail(email: string, password: string): Promise<void>;
    signInWithGoogle(): Promise<{
        provider: import("@supabase/auth-js").Provider;
        url: string;
    }>;
    getUser(accessToken: string): Promise<import("@supabase/auth-js").User>;
}
