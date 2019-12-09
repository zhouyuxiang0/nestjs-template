import { PaginateDto } from './../../../common/dto/paginate.dto';
import { Controller, Get, Post, Query } from '@nestjs/common';

@Controller('member')
export class MemberController {
    @Get()
    async fetchMembers(@Query() params: PaginateDto) {
        return;
    }

    @Post()
    async createMember() {
        return;
    }
}
