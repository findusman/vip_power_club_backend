import { sequelize } from "../utils/database";
import { Sequelize, DataTypes } from 'sequelize';
import bcrypt from 'bcrypt'


const OrderModel = sequelize.define('Order', {
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
    VIPOrderNumber: {
        type: DataTypes.INTEGER,
    },
    amazonOrderNumber: {
        type: DataTypes.INTEGER,
    },
    marketPlaceFee: {
        type: DataTypes.DOUBLE,
    },
    profit: {
        type: DataTypes.DOUBLE,
    },
    profitMargin: {
        type: DataTypes.DOUBLE,
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
OrderModel.sync()
export default OrderModel