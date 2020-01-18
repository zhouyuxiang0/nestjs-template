import { BaseConfig } from './base.config';
import * as Joi from 'joi';

export class AllinpayConfig extends BaseConfig {
    protected validatorSchema(): Joi.ObjectSchema {
        return Joi.object({
            ALLINPAY_SYSID: Joi.string().default().required(),
            ALLINPAY_MENHOST: Joi.string().default().required(),
            ALLINPAY_ACCOUNT_SETNO: Joi.string().default().required(),
            ALLINPAY_INDUSTRY_CODE: Joi.string().default().required(),
            ALLINPAY_INDUSTRY_NAME: Joi.string().default().required(),
        });
    }
// 用户  allinpay  account
    get ALLINPAY_SYSID(): string {
        return this.envConfig.ALLINPAY_SYSID;
    }

    get ALLINPAY_MENHOST(): string {
        return this.envConfig.ALLINPAY_MENHOST;
    }

    get ALLINPAY_ACCOUNT_SETNO(): string {
        return this.envConfig.ALLINPAY_ACCOUNT_SETNO;
    }

    get ALLINPAY_INDUSTRY_CODE(): string {
        return this.envConfig.ALLINPAY_INDUSTRY_CODE;
    }

    get ALLINPAY_INDUSTRY_NAME(): string {
        return this.envConfig.ALLINPAY_INDUSTRY_NAME;
    }
}
