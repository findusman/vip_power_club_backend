import { sequelize } from "../utils/database";
import { Sequelize, DataTypes } from 'sequelize';
import bcrypt from 'bcrypt'


const EmailModel = sequelize.define('Email', {
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
    emailFrom: {
        type: DataTypes.STRING,
    },
    emailTo: {
        type: DataTypes.STRING,
    },
    emailSubject: {
        type: DataTypes.STRING,
    },
    emailBody: {
        type: DataTypes.STRING,
    },
    createdAt: {
        type: DataTypes.STRING,
    },
    updatedAt: {
        type: DataTypes.STRING,
    },
    emailType: {
        type: DataTypes.STRING,
    },
    sentWhen: {
        type: DataTypes.STRING,
    },
    totalSent: {
        type: DataTypes.INTEGER,
    },
    opened: {
        type: DataTypes.INTEGER,
    },
    clicked: {
        type: DataTypes.INTEGER,
    },
    openRate: {
        type: DataTypes.INTEGER,
    },
    clickRate: {
        type: DataTypes.INTEGER,
    }
}
);
EmailModel.sync()
export default EmailModel