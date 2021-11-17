import { Request, Response } from "express";
import Product from "../models/Product";

class ProductController {
  async store(req: Request, res: Response) {

    const { name, type } = req.body;

    let product = await Product.findOne({ where: { name } })

    if(product)
      return res.status(400).json({ message: 'Product already registered.' })
    
    product = await Product.create({
      name,
      type
    })
    
    return res.json(product)
  }

  async findAll(req: Request, res: Response) {
    const product = await Product.findAll()

    return res.json({product: product})
  }

  async findById(req: Request, res: Response) {

    const { name } = req.params

    const product = await Product.findOne({where: {name}})

    return res.json(product)
  }
  
  async deleter(req: Request, res: Response) {
    
  }
  async upgrade(req: Request, res: Response) {
    
  }
}

export default new ProductController