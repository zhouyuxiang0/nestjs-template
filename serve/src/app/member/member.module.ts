import { MemberService } from './service/member.service';
import { MemberResolver } from './resolver/member.resolver';
import { Module } from '@nestjs/common';

@Module({
    controllers: [],
    providers: [MemberResolver, MemberService],
})
export class MemberModule {}
