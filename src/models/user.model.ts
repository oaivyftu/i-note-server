import {
  Model,
  DataTypes,
  Optional,
  ModelScopeOptions,
  ModelValidateOptions,
} from 'sequelize'
import { sequelize } from '.'

const UserDefinition = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  username: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  }
}

interface UserAttributes {
  id: number;
  username: string;
  password: string;
}

export interface UserInput extends Optional<UserAttributes, "id"> {}
export interface UserOutput extends Required<UserAttributes> {}

export class User
    extends Model<UserAttributes, UserInput>
    implements UserAttributes
{
  public id: number
  public username: string;
  public password: string;

  static readonly scopes: ModelScopeOptions = {}

  static readonly validations: ModelValidateOptions = {}
}

// Initialization
User.init(UserDefinition, {
  sequelize,
  tableName: 'Users',
  updatedAt: true,
  createdAt: true,
  scopes: User.scopes,
  validate: User.validations,
})
