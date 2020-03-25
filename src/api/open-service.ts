import { stringify } from 'qs';

import { generateConfigs, mergeConfigs, getIsTabValue } from '../helper';
import { MY_ACCOUNT_DOMAINS, VAULT_DOMAINS, ISSHO_TSUCHO_DOMAINS } from '../server_paths';
import { StoredOptions, ServiceId, ConfigsOptions } from '../typings';

export default function openService(
  storedOptions: StoredOptions,
  serviceId: ServiceId,
  options: ConfigsOptions = {}
): void {
  const { clientId, mode } = storedOptions;
  const { isNewTab } = options;

  const queryString = stringify({
    client_id: clientId,
    configs: generateConfigs(mergeConfigs(storedOptions, options))
  });

  switch (serviceId) {
    case 'vault':
      window.open(`${VAULT_DOMAINS[mode]}?${queryString}`, getIsTabValue(isNewTab));
      break;

    case 'my-account-settings':
      window.open(`${MY_ACCOUNT_DOMAINS[mode]}/settings?${queryString}`, getIsTabValue(isNewTab));
      break;

    case 'issho-tsucho':
      window.open(`${ISSHO_TSUCHO_DOMAINS[mode]}?${queryString}`, getIsTabValue(isNewTab));
      break;

    default:
      throw new Error('[MT-Link-SDK] Invalid `serviceId` in `openService`');
  }
}
