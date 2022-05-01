import { ValidationError } from 'express-validator';
import HttpException from './HttpException';

export class ValidationException extends HttpException {
	statusCode = 422;

	constructor(public errors: ValidationError[]) {
		super('Invalid request parameters');

		// Only because we are extending a built in class
		Object.setPrototypeOf(this, ValidationException.prototype);
	}

	serializeErrors(): { message: string; field: string }[] {
		return this.errors.map((err: ValidationError) => {
			return {
				message: err.msg,
				field: err.param,
			};
		});
	}
}
