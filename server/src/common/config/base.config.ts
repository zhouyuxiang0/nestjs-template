import { parse, DotenvParseOutput } from 'dotenv';
import * as fs from 'fs';
import * as Joi from 'joi';

export class BaseConfig {
    protected readonly envConfig: DotenvParseOutput;

    public constructor(filePath: string) {
        filePath = 'development.env';
        const config = parse(fs.readFileSync(filePath));
        this.envConfig = this.validateInput(config);
    }

    protected validatorSchema(): Joi.ObjectSchema {
        throw new Error(`请重写validatorSchema方法`);
    }

    protected validateInput(envConfig: DotenvParseOutput) {
        const envVarsSchema: Joi.ObjectSchema = this.validatorSchema();
        return this.validate(envConfig, envVarsSchema);
    }

    protected validate(envConfig: DotenvParseOutput, envVarsSchema: Joi.ObjectSchema): DotenvParseOutput {
        const { error, value: validatedEnvConfig } = Joi.validate(envConfig, envVarsSchema, { allowUnknown: true });
        if (error) {
            this.validationError(error);
        }
        return validatedEnvConfig;
    }

    protected validationError(error: Error): never {
        throw new Error(`Config validation error: ${error.message}`);
    }
}
