"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const _1 = require(".");
const note_model_1 = require("./note.model");
const UserDefinition = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    username: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    password: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    }
};
class User extends sequelize_1.Model {
}
exports.User = User;
User.scopes = {};
User.validations = {};
// Initialization
User.init(UserDefinition, {
    sequelize: _1.sequelize,
    tableName: 'notes',
    underscored: true,
    updatedAt: true,
    createdAt: true,
    scopes: UserModel.scopes,
    validate: UserModel.validations,
});
User.hasMany(note_model_1.Note, { as: 'notes' });
//# sourceMappingURL=user.model.js.map