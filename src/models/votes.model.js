import { sequelize } from "../utils/database";
import { Sequelize, DataTypes } from 'sequelize';
import bcrypt from 'bcrypt'


const VoteModel = sequelize.define('Votes', {
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
        allowNull:false
    }
}
);
VoteModel.sync()
export default VoteModel