import {
  Model,
  DataTypes,
  Optional,
  ModelScopeOptions,
  ModelValidateOptions,
  BelongsToGetAssociationMixin,
} from 'sequelize'
import { sequelize } from '.'
import {User} from "./user.model";

const NoteDefinition = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  content: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  text: {
    allowNull: false,
    type: DataTypes.STRING,
  }
}

interface NoteAttributes {
  id: number;
  text: string;
  content: string;
}

export interface NoteCreationAttributes
    extends Optional<NoteAttributes, 'id'> {}

export class Note
    extends Model<NoteAttributes, NoteCreationAttributes>
    implements NoteAttributes
{
  public id: number
  public text: string;
  public content: string;

  static readonly scopes: ModelScopeOptions = {}

  static readonly validations: ModelValidateOptions = {}
}

// Initialization
Note.init(NoteDefinition, {
  sequelize,
  tableName: 'notes',
  underscored: true,
  updatedAt: true,
  createdAt: true,
  scopes: Note.scopes,
  validate: Note.validations,
})

Note.belongsTo(User, { as: 'user', foreignKey: 'userId' })