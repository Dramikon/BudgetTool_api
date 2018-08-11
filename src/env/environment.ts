import { environment as envDev } from './environment.dev';
import { environment as envProd } from './environment.prod';

const isProduction = process.env.NODE_ENV === 'production';

export const environment = isProduction ? envProd : envDev;