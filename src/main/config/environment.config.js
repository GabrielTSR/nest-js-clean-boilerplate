"use strict";
var _a, _b, _c, _d, _e;
exports.__esModule = true;
var oneMinute = 60000;
var expiresMinutesQuantity = 30;
var jwtSecretDefaultExpiresInMs = oneMinute * expiresMinutesQuantity;
var API_DEFAULT_PORTS = {
    build: '3330',
    development: '3333'
};
var API_PORTS = {
    build: (_a = process.env.API_PORT_BUILD) !== null && _a !== void 0 ? _a : API_DEFAULT_PORTS.build,
    development: (_b = process.env.API_PORT_DEV) !== null && _b !== void 0 ? _b : API_DEFAULT_PORTS.development
};
var getApiPort = function () {
    if (typeof process.env.TS_NODE_DEV === 'undefined')
        return API_PORTS.build;
    return API_PORTS.development;
};
var environmentConfig = {
    apiPort: getApiPort(),
    jwt: {
        expiresInMs: (_c = process.env.JWT_SECRET_EXPIRES_IN) !== null && _c !== void 0 ? _c : jwtSecretDefaultExpiresInMs,
        secret: (_d = process.env.JWT_SECRET) !== null && _d !== void 0 ? _d : 'eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZ'
    },
    staticPaths: {
        images: {
            users: { profile: (_e = process.env.PROFILE_PICTURE_PATH) !== null && _e !== void 0 ? _e : '' }
        }
    }
};
exports["default"] = environmentConfig;
