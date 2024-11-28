import Express from 'express';
import userRouter from './userRoutes.js'

const apiRouter = Express.Router();

apiRouter.use('/users', userRouter);


export default apiRouter;