import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:");
const CustomerInfo = sequelize.define("CustomerInfo", {
    id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: DataTypes.STRING,
});
