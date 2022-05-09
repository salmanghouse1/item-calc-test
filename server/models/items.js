import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:");
const Productitems = sequelize.define("Productitems", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  productName: DataTypes.STRING,
  quantity: DataTypes.INTEGER,
  price: DataTypes.DECIMAL(10, 2),
});
