import { NextFunction, Request, Response } from 'express';
import LogInDto from './login.dto';

class AuthService {
	login(req: Request, res: Response, next: NextFunction) {
		const logInData: LogInDto = req.body;
		const { email, password } = logInData;
		console.log(email, password);
		res.send({});
	}
}

export default AuthService;
