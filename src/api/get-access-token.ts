import qs from 'qs';

import { MY_ACCOUNT_DOMAINS } from '../server_paths';
import { StoredOptions, GetAccessTokenOptions } from '../typings';

function getCode(): string {
  const { code } = qs.parse(window.location.search, {
    ignoreQueryPrefix: true
  });

  return Array.isArray(code) ? code[code.length - 1] : code;
}

export default async function getAccessToken(
  storedOptions: StoredOptions,
  options: GetAccessTokenOptions = {}
): Promise<string> {
  const {
    clientId,
    redirectUri: defaultRedirectUri,
    state: defaultState,
    mode,
    codeVerifier: defaultCodeVerifier
  } = storedOptions;
  const {
    redirectUri = defaultRedirectUri,
    state = defaultState,
    codeVerifier = defaultCodeVerifier,
    code = getCode()
  } = options;

  if (!code) {
    throw new Error(
      '[MT-Link-SDK] Missing parameter `code` in `getAccessToken`, or failed to get `code` from query parameter in the URL.'
    );
  }

  if (!redirectUri) {
    throw new Error(
      '[MT-Link-SDK] Missing option `redirectUri` in `getAccessToken`, make sure to pass one via `getAccessToken` options or `init` options.'
    );
  }

  try {
    const response = await fetch(`${MY_ACCOUNT_DOMAINS[mode]}/oauth/token.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        code,
        state,
        client_id: clientId,
        grant_type: 'authorization_code',
        redirect_uri: redirectUri,
        code_verifier: codeVerifier,
        code_challenge_method: codeVerifier && 'S256'
      })
    });

    const result = await response.json();

    if (result.error) {
      throw new Error(result.error_description);
    }

    return result.access_token;
  } catch (error) {
    throw new Error(`[MT-Link-SDK] \`getAccessToken\` execution failed. ${error}`);
  }
}
