import { MemberService } from './../../app/member/service/member.service';
import { Injectable, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    @Inject() memberService: MemberService;
    @Inject() jwtService: JwtService;

    async validateUser(username: string, pass: string): Promise<any> {
        return;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
