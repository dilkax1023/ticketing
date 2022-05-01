import express from 'express';
import { json } from 'body-parser';
import { authRouter } from './routes';
import { errorHandler } from './middlewares/errorHandler.middleware';
import { NotFoundException } from './exceptions';

const app = express();
app.use(json());
app.use(authRouter);

app.all('*', (req, res, next) => {
	throw new NotFoundException();
});

app.use(errorHandler);

app.listen(3000, () => {
	console.log('Server started on port 3000');
});
