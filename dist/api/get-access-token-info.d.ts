import { StoredOptions, GetAccessTokenInfoOptions, Scopes } from '../typings';
export interface AccessTokenInfo {
    resourceServer: string;
    country: string;
    currency: string;
    locale: string;
    clientName: string;
    expTimestamp: number;
    scopes: Scopes;
}
export default function getAccessTokenInfo(storedOptions: StoredOptions, accessToken: string, options?: GetAccessTokenInfoOptions): Promise<AccessTokenInfo>;
