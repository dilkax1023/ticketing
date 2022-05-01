import { NextFunction, Request, Response, Router } from 'express';
import { body, validationResult } from 'express-validator';
import { ValidationException, DatabaseConnectException } from '../exceptions';

const router = Router();
const path = '/api/users';

router.post(
	`${path}/signup`,
	[
		body('email').isEmail().withMessage('Email must be valid'),
		body('password')
			.trim()
			.isLength({ min: 4, max: 20 })
			.withMessage('Password must be between 4 and 20 characters'),
	],
	(req: Request, res: Response, next: NextFunction) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			throw new ValidationException(errors.array());
		}

		console.log('Creating a new user...');

		throw new DatabaseConnectException();

		res.send({});
	}
);

router.post(`${path}/signin`, (req, res) => {
	console.log('signin');
	res.send('signin');
});

router.post(`${path}/signout`, (req, res) => {
	console.log('signout');
	res.send('signout');
});

export { router as authRouter };
