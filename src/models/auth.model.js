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
    name: {
        type: DataTypes.STRING,
        allowNull: false
        


    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
        
        

    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    password: {
        type: DataTypes.STRING
        

    },
    photo_url: {
        type: DataTypes.STRING,
        defaultValue: 'https://vippowerbucket.s3.eu-north-1.amazonaws.com/default-user-pic.png'
        

    },
    user_type: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    photograper_type: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    photo_desire_ratio: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },
    genres_list: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    camera_brand: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    is_email_verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,

    },
    is_provided_detailed_info: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue:false

    },
    is_registered: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        
        defaultValue:false

    },
    facebook_link: {
        type: DataTypes.STRING,
        
        defaultValue:''

    },
    twitter_link: {
        type: DataTypes.STRING,
        
        defaultValue:''

    },
    instagram_link: {
        type: DataTypes.STRING,
       
        defaultValue:''

    },
    website: {
        type: DataTypes.STRING,
       
        defaultValue:''

    },
    state: {
        type: DataTypes.STRING,
       
        defaultValue:''

    },
    country: {
        type: DataTypes.STRING,
       
        defaultValue:''

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