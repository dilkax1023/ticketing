import { Router } from 'express';
import Controller from '../interfaces/controller.interface';

class AuthController implements Controller {
	public path = '/auth';
	public router = Router();

	constructor() {
		this.initializeRoutes();
	}

	private initializeRoutes() {
		this.router.post(`${this.path}/signup`, (req, res) => {
			res.send('sign up!');
		});

		this.router.post(`${this.path}/signin`, (req, res) => {
			res.send('sign in');
		});

		this.router.post(`${this.path}/signout`, (req, res) => {
			res.send('sign out');
		});
	}
}

export default AuthController;
