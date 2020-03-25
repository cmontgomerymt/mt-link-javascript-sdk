export declare type AuthAction = 'login' | 'signup';
export interface ConfigsOptions {
    email?: string;
    backTo?: string;
    authAction?: AuthAction;
    showAuthToggle?: boolean;
    showRememberMe?: boolean;
    isNewTab?: boolean;
}
export declare type Scopes = string | string[];
interface AuthorizeConfigsOptions {
    forceLogout?: boolean;
}
interface OAuthSharedParams {
    state?: string;
    redirectUri?: string;
    codeVerifier?: string;
}
export interface AuthorizeOptions extends OAuthSharedParams, ConfigsOptions, AuthorizeConfigsOptions {
    country?: string;
    scopes?: Scopes;
}
export interface GetAccessTokenOptions extends OAuthSharedParams {
    code?: string;
}
export declare type GetAccessTokenInfoOptions = Omit<Omit<OAuthSharedParams, 'state'>, 'codeVerifier'>;
export declare type OnboardOptions = Omit<Omit<AuthorizeOptions, 'email'>, 'forceLogout'>;
export declare type Mode = 'production' | 'staging' | 'develop' | 'local';
export declare type InitOptions = ConfigsOptions & AuthorizeOptions & GetAccessTokenOptions & {
    mode?: Mode;
};
export declare type StoredOptions = InitOptions & {
    clientId: string;
    mode: Mode;
    codeVerifier: string;
    state: string;
};
export declare type ServiceId = 'vault' | 'my-account-settings' | 'issho-tsucho';
export {};
