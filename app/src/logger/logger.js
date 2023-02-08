import log from "loglevel";

import { CLIENT_LOG_LEVEL } from "constants/constants-logger";

export const logger = log.setLevel(CLIENT_LOG_LEVEL);

/**
 * Generates a module logger for the given module name and sets the needed log level.
 * 
 * @param {string} moduleName name of module.
 * @param {string} [loggingLevel] logging level.
 * @returns {import("loglevel").Logger} logging instance.
 */
export const moduleLogger = (moduleName, loggingLevel) =>
  loggingLevel
    ? logger.getLogger(moduleName)
    : logger.getLogger(moduleName).setLevel(loggingLevel);

export default logger;