import { AuthService } from './auth.service';
import { Injectable, Inject } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-strategy";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    @Inject() private readonly authService: AuthService;

    async validate(username: string, password: string): Promise<any> {
        return;
    }
}