import { SupabaseClient } from '@supabase/supabase-js';
import { ConfigService } from '@nestjs/config';
export declare class SupabaseService {
    private configServive;
    private supabase;
    constructor(configServive: ConfigService);
    getClient(): SupabaseClient;
}
