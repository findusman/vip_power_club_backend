import { sequelize } from "../utils/database";
import { Sequelize, DataTypes } from 'sequelize';
import bcrypt from 'bcrypt'

const productModel = sequelize.define('Product', {
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
    sortBy: {
        type: DataTypes.TEXT,
        
    },
    imageUrl: {
        type: DataTypes.TEXT,

    },
    productTitle: {
        type: DataTypes.TEXT,

    },
    ecommercePlatform: {
        type: DataTypes.TEXT,

    },
    regularPrice: {
        type: DataTypes.INTEGER,

    },
    discountedPrice: {
        type: DataTypes.DOUBLE,

    },
    claimat: {
        type: DataTypes.STRING,
    },
    VIPPrice: {
        type: DataTypes.DOUBLE,
    },
    ASIN: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.STRING,
    },
    createdAt: {
        type: DataTypes.STRING,
    },
    updatedAt: {
        type: DataTypes.STRING,
    },
    offset: {
        type: DataTypes.INTEGER,
    },
    productScop: {
        type: DataTypes.STRING,
    }
}
);
productModel.sync()
export default productModel