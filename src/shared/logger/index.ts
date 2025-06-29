import pino, {Logger, LoggerOptions} from 'pino';
import {Env} from '@/shared/utils';

function createLogger(options: LoggerOptions = {}): Logger {
  return pino({
    level: Env.LOG_LEVEL ?? 'info',
    ...options,
  });
}

export const logger = createLogger();
