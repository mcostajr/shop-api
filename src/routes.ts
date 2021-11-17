import { Router } from "express";
import auth from "./middlewares/auth";

import UserController from "./controllers/UserController";
import ProductController from "./controllers/ProductController";

const routes = Router();


routes.post('/product', ProductController.store)
routes.get('/product', ProductController.findAll)
routes.get('/product/:id', ProductController.findById)
routes.delete('/product/:id', ProductController.deleter)
routes.put('/product/:id', ProductController.upgrade)

routes.post('/user', UserController.store)
routes.get('/user', auth, UserController.findAll)
routes.get('/user/:id', auth, UserController.findById)
routes.delete('/user/:id', auth, UserController.deleter)
routes.put('/user/:id', auth, UserController.upgrade)

export default routes