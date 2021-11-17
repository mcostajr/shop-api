import { Request, Response } from "express";
import User from "../models/User";

class UserController {
  async store(req: Request, res: Response) {

    const { name, email, password } = req.body;

    let user = await User.findOne({ where: { email } });

    if (user) {
      return res.status(400).json({ message: 'User already registered.' });
    }

    user = await User.create(
      { 
        name, 
        email, 
        password,
      }
    );

    return res.json({ name, email });
  }

  async findAll(req: Request, res: Response) {

    const users = await User.findAll({ attributes: { exclude: ['password'] } });

    return res.json({users: users})
  }

  async findById(req: Request, res: Response) {

    const { id } = req.params

    const user = await User.findOne({where: {id}})

    return res.json(user)
  }

  async deleter(req: Request, res: Response) {
    const { id } = req.params

    const destroyed = await User.destroy({where: {id}})

    if(destroyed) {
      return res.json({message: 'Deleted'})
    } else {
      return res.status(400).json({message: 'Error while removing'})
    }
  }
  
  async upgrade(req: Request, res: Response) {
    
  }
}

export default new UserController