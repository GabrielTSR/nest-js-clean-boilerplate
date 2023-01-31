export const env = {
    apiPort:
        typeof process.env.TS_NODE_DEV === 'undefined'
            ? process.env.API_PORT_BUILD ?? 3330
            : process.env.API_PORT_DEV ?? 3333,
    database: {
        database: process.env.API_DB_DATABASE ?? '',
        host: process.env.API_DB_HOST ?? '',
        password: process.env.API_DB_PASSWORD ?? '',
        port: Number(process.env.API_DB_PORT) ?? 5432,
        username: process.env.API_DB_USERNAME ?? ''
    },
    jwt: {
        expiresInMs: process.env.JWT_SECRET_EXPIRES_IN ?? 60000 * 60 * 24 * 7,
        secret:
            process.env.JWT_SECRET ?? 'eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZ' // 1 week
    },
    staticPaths: {
        images: {
            users: { profile: process.env.PROFILE_PICTURE_PATH ?? '' }
        }
    }
};
