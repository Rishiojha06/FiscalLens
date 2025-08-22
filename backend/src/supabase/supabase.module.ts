import { Module } from '@nestjs/common';
import { SupabaseService } from './supabase.service';
import { ConfigService } from '@nestjs/config';
@Module({
  providers: [SupabaseService, ConfigService],
  exports: [SupabaseService],
})
export class SupabaseModule {}
