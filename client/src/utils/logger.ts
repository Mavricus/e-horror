type LogLevel = 'info' | 'warn' | 'error';

interface Logger {
  info(message: string, ...args: unknown[]): void;
  warn (message: string, ...args: unknown[]): void;
  error (message: string, ...args: unknown[]): void;
  log (level: LogLevel, message: string, ...args: unknown[]) : void;
};

const logger: Logger = {
  info(message: string, ...args: unknown[]): void  {
    logger.log('info', message, ...args);
  },
  warn (message: string, ...args: unknown[]): void {
    logger.log('warn', message, ...args);
  },
  error(message: string, ...args: unknown[]): void {
    logger.log('error', message, ...args);
  },
  log(level: LogLevel, message: string, ...args: unknown[]): void {
    console.error(`[${level.toUpperCase()}] ${message}`, ...args);
  }
};

export default logger;
