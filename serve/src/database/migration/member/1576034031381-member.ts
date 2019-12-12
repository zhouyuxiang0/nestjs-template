import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class member1576034031381 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            CREATE TABLE allinpay_member (
                id int NOT NULL,
                uuid varchar(40) NOT NULL COMMENT 'UUID',
                username varchar(255) NOT NULL COMMENT '用户名',
                password varchar(255) NOT NULL COMMENT '密码',
                real_name varchar(255) NOT NULL COMMENT '真实姓名' DEFAULT '',
                cardno varchar(25) NOT NULL COMMENT '用户身份证号' DEFAULT '',
                phone varchar(15) NOT NULL COMMENT '用户手机号' DEFAULT '',
                status tinyInt(1) NOT NULL COMMENT '用户状态 0 未签约 1 已签约' DEFAULT 0,
                PRIMARY KEY (id)
            ) ENGINE=InnoDB
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        queryRunner.dropTable('allinpay_member');
    }

}
