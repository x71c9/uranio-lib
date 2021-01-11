/**
 * Module for URANIO Exception
 *
 * @packageDocumentation
 */
import { ExceptionType } from './types';
declare class URNException extends Error {
    module_code: string;
    module_name: string;
    error_code: string;
    msg: string;
    nested?: Error | undefined;
    date: Date;
    name: string;
    type: ExceptionType;
    constructor(module_code: string, module_name: string, error_code: string, msg: string, nested?: Error | undefined);
}
declare class URNNotFoundException extends URNException {
    name: string;
    type: ExceptionType;
}
declare class URNInvalidException extends URNException {
    object?: any;
    keys?: any[] | undefined;
    name: string;
    type: ExceptionType;
    constructor(module_code: string, module_name: string, error_code: string, msg: string, object?: any, keys?: any[] | undefined, nested?: Error);
}
declare class URNUnauthorizedException extends URNException {
    name: string;
    type: ExceptionType;
}
export declare type ExceptionInstance = InstanceType<typeof URNException>;
export declare type NotFoundExceptionInstance = InstanceType<typeof URNNotFoundException>;
export declare type InvalidExceptionInstance = InstanceType<typeof URNInvalidException>;
export declare type UnauthorizedExceptionInstance = InstanceType<typeof URNUnauthorizedException>;
interface CreateException {
    create(err_code: string, msg: string, nested?: Error): ExceptionInstance;
    create_not_found(err_code: string, msg: string, nested?: Error): NotFoundExceptionInstance;
    create_invalid(err_code: string, msg: string, object?: any, keys?: any[], nested?: Error): InvalidExceptionInstance;
    create_unauthorized(err_code: string, msg: string, nested?: Error): UnauthorizedExceptionInstance;
}
export declare function init(module_code: string, module_name: string): CreateException;
export {};
