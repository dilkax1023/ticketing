import { NextFunction, Request, Response } from 'express';
import HttpException from '../exceptions/HttpException';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
	if (err instanceof HttpException) {
		res.status(err.statusCode).send({
			errors: err.serializeErrors(),
		});
	}

	res.status(400).send({
		errors: [{ message: 'something went wrong' }],
	});
};
