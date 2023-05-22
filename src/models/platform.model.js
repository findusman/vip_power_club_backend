import { sequelize } from "../utils/database";
import { Sequelize, DataTypes } from 'sequelize';
import bcrypt from 'bcrypt'


const PlatfromModel = sequelize.define('Order', {
    // Model attributes are defined here
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    userId: {
        type: DataTypes.UUID,
        allowNull:false
    },
    PlatformType: {
        type: DataTypes.STRING,
    },
    platformRegion: {
        type: DataTypes.STRING,
    },
    isTOSAccpeted: {
        type: DataTypes.BOOLEAN,
    },
    createdAt: {
        type: DataTypes.STRING,
        allowNull:false
    },
    updatedAt: {
        type: DataTypes.STRING,
        allowNull:false
    }
}
);
PlatfromModel.sync()
export default PlatfromModel