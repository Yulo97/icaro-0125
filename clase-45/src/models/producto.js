const { DataTypes } = require("sequelize");
const sequelize = require("../db/config/db");

const Producto = sequelize.define(
  "producto",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
    },
  },
  { timestamps: false }
);

// const Producto = (sequelize) => {
//   class Producto extends Model {}
//   Producto.init(
//     {
//       id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         unique: true,
//       },
//       nombre: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       precio: {
//         type: DataTypes.DECIMAL(10, 2),
//         defaultValue: 0,
//       },
//     },
//     {
//       sequelize,
//       tableName: "productos",
//       modelName: "Producto",
//     }
//   );
// };

module.exports = Producto;
