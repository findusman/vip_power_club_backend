import { Sequelize, DataTypes } from 'sequelize';


export const sequelize = new Sequelize('postgres://postgres:123@localhost:5432/VIP_Power_Club', { logging: false })