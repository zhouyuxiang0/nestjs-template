import { MemberService } from './../service/member.service';
import { Member } from '../dto/member.gql';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { Int } from 'type-graphql';

@Resolver(of => Member)
export class MemberResolver {

    @Inject() memberService: MemberService;

    @Query(returns => Member)
    async fetchMember(@Args({ name: 'id', type: () => Int }) id: number): Promise<any> {
        console.log(id);
        return;
    }
}
