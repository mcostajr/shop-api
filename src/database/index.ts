import { Sequelize } from 'sequelize';
const dbConfig = require('../config/config')

import Product from '../models/Product';
import User from '../models/User';

const connection = new Sequelize(dbConfig);

User.prepareInit(connection)
Product.prepareInit(connection)

export default connection;