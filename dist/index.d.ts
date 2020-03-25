import { AccessTokenInfo } from './api/get-access-token-info';
import { StoredOptions, ServiceId, ConfigsOptions, InitOptions, AuthorizeOptions, GetAccessTokenOptions, GetAccessTokenInfoOptions } from './typings';
export declare class MtLinkSdk {
    storedOptions: StoredOptions;
    init(clientId: string, options?: InitOptions): void;
    authorize(options?: AuthorizeOptions): void;
    onboard(options?: AuthorizeOptions): void;
    logout(options?: ConfigsOptions): void;
    openService(serviceId: ServiceId, options?: ConfigsOptions): void;
    requestMagicLink(magicLinkTo: string, options?: ConfigsOptions): Promise<void>;
    getAccessToken(options?: GetAccessTokenOptions): Promise<string>;
    getAccessTokenInfo(accessToken: string, options?: GetAccessTokenInfoOptions): Promise<AccessTokenInfo>;
}
declare const _default: MtLinkSdk;
export default _default;
