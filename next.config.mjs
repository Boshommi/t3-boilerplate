/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import './src/env.mjs';
import i18nConfig from './next-i18next.config.js';
import nextRoutes from 'nextjs-routes/config';
const withRoutes = nextRoutes();

const config = {
    i18n: i18nConfig.i18n,
};

export default withRoutes(config);
