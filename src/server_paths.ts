interface ServerPaths {
  [key: string]: string;
}

export const MY_ACCOUNT_DOMAINS: ServerPaths = {
  production: 'https://myaccount.getmoneytree.com',
  staging: 'https://myaccount-staging.getmoneytree.com',
  develop: 'https://myaccount-develop.getmoneytree.com',
  local: 'http://localhost:3002'
};

export const VAULT_DOMAINS: ServerPaths = {
  production: 'https://vault.getmoneytree.com',
  staging: 'https://vault-staging.getmoneytree.com',
  develop: 'https://vault-develop.getmoneytree.com',
  local: 'http://localhost:9000'
};

export const ISSHO_TSUCHO_DOMAINS: ServerPaths = {
  production: 'https://isshotsucho.getmoneytree.com',
  staging: 'https://isshotsucho-staging.getmoneytree.com',
  develop: 'https://isshotsucho-develop.getmoneytree.com',
  local: 'http://localhost:9000'
};
