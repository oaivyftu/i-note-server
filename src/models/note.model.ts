import {
  Model,
  DataTypes,
  Optional,
  ModelScopeOptions,
  ModelValidateOptions,
} from "sequelize";
import { User } from "./user.model";
import { sequelize } from ".";

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
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
};

interface NoteAttributes {
  id: number;
  text: string;
  content: string;
  userId: number;
}

export interface NoteInput extends Optional<NoteAttributes, "id"> {
  userId: number;
}

export type NoteOutput = Required<NoteAttributes>;

export class Note extends Model<NoteAttributes, NoteInput> implements NoteAttributes {
  public id: number;
  public text: string;
  public content: string;
  public userId: number;

  static readonly scopes: ModelScopeOptions = {};

  static readonly validations: ModelValidateOptions = {};
}

// Initialization
Note.init(NoteDefinition, {
  sequelize,
  tableName: "Notes",
  scopes: Note.scopes,
  validate: Note.validations,
  timestamps: true,
});

User.hasMany(Note, { foreignKey: "userId" });
Note.belongsTo(User, { foreignKey: "userId" });
