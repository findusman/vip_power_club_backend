import { sequelize } from "../utils/database";
import { Sequelize, DataTypes } from 'sequelize';
import bcrypt from 'bcrypt'



const UserModel = sequelize.define('User', {
    // Model attributes are defined here
    id: {

        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull:false

    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false

    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true

    },
    email: {
        type: DataTypes.STRING,
        unique:true
    
    },
    phoneNumber: {
        type: DataTypes.INTEGER,
        
    
    },
    password: {
        type: DataTypes.STRING
    
    },
    confirmPassword: {
        type: DataTypes.STRING,
    
    },
    isEmailConfirmed: {
        type: DataTypes.BOOLEAN,
        
    },
    profilePicUrl: {
        type: DataTypes.STRING,
        defaultValue: 'https://vippowerbucket.s3.eu-north-1.amazonaws.com/default-user-pic.png'

    },
    userType: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    referral: {
        type: DataTypes.STRING,
        
    },
    createdAt: {
        type: DataTypes.STRING,
    
    },
    updatedAt: {
        type: DataTypes.STRING,
    }

}, {
    hooks: {
        beforeCreate: async (user) => {
            if (user.password) {
                const salt = await bcrypt.genSaltSync(10, 'a');
                user.password = bcrypt.hashSync(user.password, salt);
            }
        },
        beforeUpdate: async (user) => {
            if (user.password) {
                const salt = await bcrypt.genSaltSync(10, 'a');
                user.password = bcrypt.hashSync(user.password, salt);
            }
        }
    }
});

UserModel.sync()
export default UserModel