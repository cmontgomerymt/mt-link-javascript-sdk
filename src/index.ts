import { v4 as uuid } from 'uuid';

import authorize from './api/authorize';
import onboard from './api/onboard';
import logout from './api/logout';
import openService from './api/open-service';
import requestMagicLink from './api/request-magic-link';
import getAccessToken from './api/get-access-token';
import getAccessTokenInfo, { AccessTokenInfo } from './api/get-access-token-info';
import {
  StoredOptions,
  ServiceId,
  ConfigsOptions,
  InitOptions,
  AuthorizeOptions,
  GetAccessTokenOptions,
  GetAccessTokenInfoOptions,
  Mode
} from './typings';
import storage from './storage';

const validModes: Mode[] = ['production', 'staging', 'develop', 'local'];

export class MtLinkSdk {
  public storedOptions: StoredOptions = {
    clientId: '',
    mode: 'production',
    state: storage.get('state') || uuid(),
    codeVerifier: storage.get('codeVerifier') || uuid()
  };

  public init(clientId: string, options: InitOptions = {}) {
    const { mode = 'production', ...rest } = options;

    // sdk instance state
    this.storedOptions = {
      ...this.storedOptions,
      ...rest,
      mode: validModes.indexOf(mode) === -1 ? 'production' : mode,
      clientId
    };

    storage.set('state', this.storedOptions.state);
    storage.set('codeVerifier', this.storedOptions.codeVerifier);

    if (!clientId) {
      throw new Error('[MT-Link-SDK] Missing parameter `client_id` in `init`.');
    }
  }

  public authorize(options?: AuthorizeOptions): void {
    authorize(this.storedOptions, options);
  }

  public onboard(options?: AuthorizeOptions): void {
    onboard(this.storedOptions, options);
  }

  public logout(options?: ConfigsOptions): void {
    logout(this.storedOptions, options);
  }

  public openService(serviceId: ServiceId, options?: ConfigsOptions): void {
    openService(this.storedOptions, serviceId, options);
  }

  public requestMagicLink(magicLinkTo: string, options?: ConfigsOptions): Promise<void> {
    return requestMagicLink(this.storedOptions, magicLinkTo, options);
  }

  public getAccessToken(options?: GetAccessTokenOptions): Promise<string> {
    return getAccessToken(this.storedOptions, options);
  }

  public getAccessTokenInfo(accessToken: string, options?: GetAccessTokenInfoOptions): Promise<AccessTokenInfo> {
    return getAccessTokenInfo(this.storedOptions, accessToken, options);
  }
}

export default new MtLinkSdk();
