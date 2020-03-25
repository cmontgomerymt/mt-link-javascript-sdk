declare const VERSION: string;

import { stringify } from 'qs';
import { snakeCase } from 'snake-case';

import { Scopes, InitOptions, ConfigsOptions, AuthAction } from './typings';

export function constructScopes(scopes: Scopes = ''): string | undefined {
  return (Array.isArray(scopes) ? scopes.join(' ') : scopes) || undefined;
}

export function getIsTabValue(isNewTab: boolean = false): '' | '_self' {
  return isNewTab ? '' : '_self';
}

export function mergeConfigs(initValues: InitOptions, newValues: ConfigsOptions) {
  const {
    email: defaultEmail,
    backTo: defaultBackTo,
    authAction: defaultAuthAction,
    showAuthToggle: defaultShowAuthToggle,
    showRememberMe: defaultShowRememberMe
  } = initValues;

  const {
    email = defaultEmail,
    backTo = defaultBackTo,
    authAction = defaultAuthAction,
    showAuthToggle = defaultShowAuthToggle,
    showRememberMe = defaultShowRememberMe,
    ...rest
  } = newValues;

  return {
    ...rest,
    email,
    backTo,
    authAction,
    showAuthToggle,
    showRememberMe
  };
}

export function generateConfigs(configs: ConfigsOptions) {
  const snakeCaseConfigs: { [key: string]: string | AuthAction | boolean | undefined } = {};

  for (const key in configs) {
    if (configs.hasOwnProperty(key)) {
      snakeCaseConfigs[snakeCase(key)] = configs[key as keyof ConfigsOptions];
    }
  }

  return stringify(
    {
      ...snakeCaseConfigs,
      sdk_platform: 'js',
      sdk_version: VERSION
    }
  );
}
