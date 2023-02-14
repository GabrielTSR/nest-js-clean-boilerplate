const oneMinute = 60000;
const expiresMinutesQuantity = 30;
const jwtSecretDefaultExpiresInMs = oneMinute * expiresMinutesQuantity;

const API_DEFAULT_PORTS = {
  build: '3330',
  development: '3333'
};

const API_PORTS = {
  build: process.env.API_PORT_BUILD ?? API_DEFAULT_PORTS.build,
  development: process.env.API_PORT_DEV ?? API_DEFAULT_PORTS.development
};

const getApiPort = (): string => {
  if (typeof process.env.TS_NODE_DEV === 'undefined') return API_PORTS.build;
  return API_PORTS.development;
};

export const environmentConfig = {
  apiPort: getApiPort(),
  jwt: {
    expiresInMs: process.env.JWT_SECRET_EXPIRES_IN ?? jwtSecretDefaultExpiresInMs,
    secret: process.env.JWT_SECRET ?? 'eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZ'
  },
  staticPaths: {
    images: {
      users: { profile: process.env.PROFILE_PICTURE_PATH ?? '' }
    }
  }
};

export const hashConfig = {
  salt: Number(process.env.HASH_SALT)
};
