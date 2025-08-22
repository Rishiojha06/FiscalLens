"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const supabase_service_1 = require("../supabase/supabase.service");
const common_2 = require("@nestjs/common");
let AuthService = class AuthService {
    supabaseService;
    constructor(supabaseService) {
        this.supabaseService = supabaseService;
    }
    async signUpWithEmail(email, password) {
        const result = await this.supabaseService.getClient().auth.signUp({
            email,
            password,
        });
        common_2.Logger.log(result);
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
        if (error)
            throw new common_1.UnauthorizedException(error.message);
        return data;
    }
    async getUser(accessToken) {
        const { data, error } = await this.supabaseService
            .getClient()
            .auth.getUser(accessToken);
        if (error)
            throw new common_1.UnauthorizedException(error.message);
        return data.user;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [supabase_service_1.SupabaseService])
], AuthService);
//# sourceMappingURL=auth.service.js.map