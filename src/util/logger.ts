import winston, { Logger } from 'winston';
import { environment } from '../env/environment';

const logger = new (Logger)({
    transports: [
        new (winston.transports.Console)({ level: environment.production ? 'error' : 'debug' }),
        new (winston.transports.File)({ filename: 'debug.log', level: 'debug'})
    ]
});

if (!environment.production) {
    logger.debug('Logging initialized at debug level');
}

export default logger;

