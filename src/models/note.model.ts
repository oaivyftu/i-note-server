import {
  Model,
  DataTypes,
  Optional,
  ModelScopeOptions,
  ModelValidateOptions,
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

export interface NoteInput
  extends Optional<NoteAttributes, 'id'> {
  userId: number;
}

export interface NoteOutput extends Required<NoteAttributes> {}

export class Note
    extends Model<NoteAttributes, NoteInput>
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
  tableName: 'Notes',
  scopes: Note.scopes,
  validate: Note.validations,
  timestamps: true
})

User.hasMany(Note, { foreignKey: 'userId' })
Note.belongsTo(User, { foreignKey: 'userId' })
