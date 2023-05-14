"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
const sequelize_1 = require("sequelize");
const _1 = require(".");
const user_model_1 = require("./user.model");
const NoteDefinition = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    content: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    text: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    }
};
class Note extends sequelize_1.Model {
}
exports.Note = Note;
Note.scopes = {};
Note.validations = {};
// Initialization
Note.init(NoteDefinition, {
    sequelize: _1.sequelize,
    tableName: 'notes',
    underscored: true,
    updatedAt: true,
    createdAt: true,
    scopes: Note.scopes,
    validate: Note.validations,
});
Note.belongsTo(user_model_1.User, { as: 'user', foreignKey: 'userId' });
//# sourceMappingURL=note.model.js.map