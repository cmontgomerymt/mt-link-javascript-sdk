import { stringify } from 'qs';

import { generateConfigs, mergeConfigs } from '../helper';
import { MY_ACCOUNT_DOMAINS } from '../server_paths';
import { StoredOptions, ConfigsOptions } from '../typings';

export default async function requestMagicLink(
  storedOptions: StoredOptions,
  magicLinkTo: string,
  options: ConfigsOptions = {}
): Promise<void> {
  const { clientId, mode, email: defaultEmail } = storedOptions;
  const { email = defaultEmail } = options;
  const configs = mergeConfigs(storedOptions, { ...options, email: undefined });

  if (!email) {
    throw new Error(
      '[MT-Link-SDK] Missing option `email` in `requestMagicLink`, make sure to pass one via `requestMagicLink` options or `init` options.'
    );
  }

  if (!magicLinkTo) {
    throw new Error('[MT-Link-SDK] Missing parameter `magicLinkTo` in `requestMagicLink`.');
  }

  const queryString = stringify({
    client_id: clientId,
    configs: generateConfigs(configs)
  });

  const url: string = `${MY_ACCOUNT_DOMAINS[mode]}/magic-link.json?${queryString}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email,
        magic_link_to: magicLinkTo
      })
    });

    if (response.status < 200 || response.status >= 300) {
      throw new Error(response.statusText);
    }
  } catch (error) {
    throw new Error(`[MT-Link-SDK] \`requestMagicLink\` execution failed. ${error}`);
  }
}
