import store from 'store';

const STORE_KEY = 'mt-jetpack';

export function get(key: string): string | undefined {
  const data = store.get(STORE_KEY) || {};

  return data[key];
}

export function set(key: string, value: string): void {
  const data = store.get(STORE_KEY) || {};
  data[key] = value;

  store.set(STORE_KEY, data);
}

export default {
  set,
  get
};
