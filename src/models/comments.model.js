import { sequelize } from "../utils/database";
import { Sequelize, DataTypes } from 'sequelize';
import bcrypt from 'bcrypt'

const CommentsModel = sequelize.define('Comments', {
    // Model attributes are defined here
    id: {

        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
     },
    user_id: {
        type: DataTypes.UUID,
        allowNull:false

    },
    photo_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    comment_text: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}
);
CommentsModel.sync()
export default CommentsModel