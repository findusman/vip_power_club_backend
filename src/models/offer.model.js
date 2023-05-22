import { sequelize } from "../utils/database";
import { Sequelize, DataTypes } from 'sequelize';
import bcrypt from 'bcrypt'


const OfferModel = sequelize.define('Offer', {
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
    productId: {
        type: DataTypes.UUID,
        allowNull:false

    },
    amazonASIN: {
        type: DataTypes.STRING,

    },
    offerType: {
        type: DataTypes.STRING,

    },
    couponCode: {
        type: DataTypes.TEXT,
        
    },
    couponOffPercentage: {
        type: DataTypes.INTEGER,
        
    },
    createdAt: {
        type: DataTypes.STRING,
        
    },
    updatedAt: {
        type: DataTypes.STRING,
        
    },
    couponOfferType: {
        type: DataTypes.STRING,
        
    },
    isCouponClaimed: {
        type: DataTypes.STRING,
        
    }
}
);
OfferModel.sync()
export default OfferModel