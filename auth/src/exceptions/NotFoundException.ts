import HttpException from './HttpException';

export class NotFoundException extends HttpException {
	statusCode = 404;

	constructor() {
		super('Not Found');

		Object.setPrototypeOf(this, NotFoundException.prototype);
	}

	serializeErrors() {
		return [{ message: 'Sorry, Resources Not Found!!' }];
	}
}
