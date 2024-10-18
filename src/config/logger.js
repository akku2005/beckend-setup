const { createLogger, transports, format } = require("winston");

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.printf(
      (info) =>
        `${info.timestamp} [${info.level.toUpperCase()}]: ${info.message}`,
    ),
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "logs/logs.txt" }),
  ],
});

module.exports = logger;
