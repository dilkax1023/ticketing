import { Router, NextFunction, Response, Request } from 'express';
import Controller from '../interfaces/controller.interface';
import validationMiddleware from '../middlewares/validation.middleware';
import AuthService from './auth.service';
import LogInDto from './login.dto';

class AuthController implements Controller {
	public path = '/api/users';
	public router = Router();
	public authService = new AuthService();

	constructor() {
		this.initializeRoutes();
	}

	private initializeRoutes() {
		this.router.post(`${this.path}/signup`, (req, res) => {
			res.send('sign up!');
		});

		this.router.post(`${this.path}/signin`, validationMiddleware(LogInDto), this.login);

		this.router.post(`${this.path}/signout`, (req, res) => {
			res.send('sign out');
		});
		this.router.post(`${this.path}/currentuser`, (req, res) => {
			res.send('Current user');
		});
	}

	private login = async (req: Request, res: Response, next: NextFunction) => {
		return this.authService.login(req, res, next);
	};
}

export default AuthController;
