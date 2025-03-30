import winston from 'winston';

const { format, createLogger, transports } = winston;

const logFormat = format.combine(
  format.timestamp(),
  format.colorize(),
  format.printf((info) => {
    return `${info.timestamp} [${info.level}]: ${info.message}`;
  })
);

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: logFormat,
  transports: [
    new transports.Console(),
    new transports.File({
      filename: 'logs/error.log',
      level: 'error'
    }),
    new transports.File({
      filename: 'logs/combined.log'
    })
  ]
});

export default logger;
