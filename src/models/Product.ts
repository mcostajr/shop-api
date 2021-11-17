import { Model, DataTypes, Sequelize } from "sequelize";

class Product extends Model {
  public id!: number;
  public name!: string;
  public type!: string;

  static prepareInit(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: new DataTypes.STRING,
          allowNull: false,
        },
        type: {
          type: new DataTypes.STRING,
          allowNull: false,
        },
      },
    {
      tableName: 'product',
      sequelize
    })
  }
}

export default Product