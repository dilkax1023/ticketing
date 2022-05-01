import HttpException from './HttpException';

export class DatabaseConnectException extends HttpException {
	statusCode = 500;
	message = 'Sorry, Failed to connect to Database';

	constructor() {
		super('Sorry, Failed to connect to Database');

		Object.setPrototypeOf(this, DatabaseConnectException.prototype);
	}

	serializeErrors() {
		return [{ message: this.message }];
	}
}
