import {
  Model,
  DataTypes,
  Optional,
  ModelScopeOptions,
  ModelValidateOptions,
  BelongsToGetAssociationMixin,
} from 'sequelize'
import { sequelize } from '.'
import {Note} from "./note.model";

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

export interface UserCreationAttributes
extends Optional<UserAttributes, 'id'> {}

export class User
    extends Model<UserAttributes, UserCreationAttributes>
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
  tableName: 'notes',
  underscored: true,
  updatedAt: true,
  createdAt: true,
  scopes: User.scopes,
  validate: User.validations,
})

User.hasMany(Note, { as: 'notes' })
