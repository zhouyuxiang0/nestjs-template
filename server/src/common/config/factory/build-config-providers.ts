import { BaseConfig } from '../base.config';
import { ConfigProviderInterface } from './config-provider.interface';
import { configList } from '../';

function factoryConfig(config: typeof BaseConfig): ConfigProviderInterface {
  return {
    provide: config,
    useValue: new config(process.env.NODE_ENV === 'development' ? `development.env` : '.env'),
  };
}

export function buildConfigProviders(): ConfigProviderInterface[] {
  const configProviders: ConfigProviderInterface[] = [];
  for (const config of configList) {
    const provider: ConfigProviderInterface = factoryConfig(config);
    configProviders.push(provider);
  }

  return configProviders;
}
