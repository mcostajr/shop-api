import { Model, DataTypes, Sequelize } from "sequelize";

class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;

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
        email: {
          type: new DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: new DataTypes.STRING,
          allowNull: false,
        },
      },
    {
      tableName: 'users',
      sequelize
    })
  }
}

export default User