"use strict";
/**
 * Export types module for logging
 *
 * @packageDocumentation
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogContext = exports.LogLevel = void 0;
/**
 * LogLevel enum type
 * ...
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["NONE"] = 0] = "NONE";
    LogLevel[LogLevel["ERROR"] = 1] = "ERROR";
    LogLevel[LogLevel["WARNING"] = 2] = "WARNING";
    LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
    LogLevel[LogLevel["FUNCTION_DEBUG"] = 4] = "FUNCTION_DEBUG";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
/**
 * LogContext enum type
 *
 */
var LogContext;
(function (LogContext) {
    LogContext["TERMINAL"] = "TERMINAL";
    LogContext["BROWSER"] = "BROWSER";
})(LogContext = exports.LogContext || (exports.LogContext = {}));
//# sourceMappingURL=types.js.map