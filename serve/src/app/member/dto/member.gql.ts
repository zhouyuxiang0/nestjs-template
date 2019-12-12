import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
export class Member {
    @Field(() => Int)
    id: number;

    @Field()
    uuid: string;

    @Field()
    username: string;

    @Field()
    password: string;

    @Field()
    real_name: string;

    @Field()
    cardno: string;

    @Field()
    phone: string;

    @Field(() => Int)
    status: number;
}
