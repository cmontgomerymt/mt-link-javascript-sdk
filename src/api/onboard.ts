import { stringify } from 'qs';

import { constructScopes, generateConfigs, mergeConfigs, getIsTabValue } from '../helper';
import { MY_ACCOUNT_DOMAINS } from '../server_paths';
import { StoredOptions, OnboardOptions } from '../typings';
import storage from '../storage';

export default function onboard(storedOptions: StoredOptions, options: OnboardOptions = {}): void {
  const {
    mode,
    clientId,
    scopes: defaultScopes,
    redirectUri: defaultRedirectUri,
    state: defaultState,
    codeVerifier: defaultCodeVerifier,
    country: defaultCountry
  } = storedOptions;

  const {
    scopes = defaultScopes,
    redirectUri = defaultRedirectUri,
    state = defaultState,
    codeVerifier = defaultCodeVerifier,
    country = defaultCountry,
    isNewTab
  } = options;
  const configs = mergeConfigs(storedOptions, options);

  const { email } = configs;

  // update state
  if (state !== defaultState) {
    storage.set('state', state);
  }

  // update codeVerifier
  if (codeVerifier !== defaultCodeVerifier) {
    storage.set('codeVerifier', codeVerifier);
  }

  if (!email) {
    throw new Error(
      '[MT-Link-SDK] Missing parameter `email` in `onboard`, make sure to pass one via `onboard` options or `init` options.'
    );
  }

  if (!country) {
    throw new Error(
      '[MT-Link-SDK] Missing parameter `country` in `onboard`, make sure to pass one via `onboard` options or `init` options.'
    );
  }

  const queryString = stringify({
    client_id: clientId,
    response_type: 'code',
    scope: constructScopes(scopes),
    redirect_uri: redirectUri,
    state,
    country,
    configs: generateConfigs(configs)
  });

  window.open(`${MY_ACCOUNT_DOMAINS[mode]}/onboard?${queryString}`, getIsTabValue(isNewTab));
}
