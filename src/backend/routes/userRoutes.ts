import Express  from 'express';
import jwt from 'jsonwebtoken';
import {User} from '../types/User.js';
import { newUser, getAllUsers, getUser, deleteUser, updateUser } from '../controllers/userControllers.js';
import { validateNumericParams } from '../middlewares/validateNumericParams.js';

const userRouter = Express.Router();

// Ruta para registrar un nuevo usuario
userRouter.post("/", async (req: Express.Request, res: Express.Response) => {
    const user: User =  { name: req.body.name, surname: req.body.surname, email: req.body.email, password: req.body.password};
    const result = await newUser (user);
    res.send(result);
});

userRouter.get("/", async (req: Express.Request, res: Express.Response) => {
    const result = await getAllUsers();
    res.json(result);
  });
  
userRouter.get("/:id", validateNumericParams, async (req: Express.Request, res: Express.Response) => {
    const result = await getUser(req.params.id);
    res.send(result);
  });

  userRouter.put("/:id", validateNumericParams, async (req: Express.Request, res: Express.Response) => {
    const user: Partial<User> = {name: req.body.name, surname: req.body.surname, email: req.body.email, password: req.body.password};
    const result = await updateUser(req.params.id, user);
    res.send(result);
  });
  
  
  userRouter.delete("/:id", validateNumericParams, async (req: Express.Request, res: Express.Response) => {  
    const result = await deleteUser(req.params.id);
   let statusCode = 200;
  res.send(result);
  });
  
  export default userRouter;