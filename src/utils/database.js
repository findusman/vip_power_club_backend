import { Sequelize, DataTypes } from 'sequelize';


export const sequelize = new Sequelize('postgres://postgres:123@localhost:5432/REST_API_Standard_Structure', { logging: false })