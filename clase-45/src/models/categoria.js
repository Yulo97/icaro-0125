const sequelize = require("../db/config/db");
const { DataTypes } = require("sequelize");
const Producto = require("./producto");

const Categoria = sequelize.define(
  "categoria",
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
  },
  { timestamps: false }
);

Categoria.hasMany(Producto, { foreignKey: "categoriaId" });
Producto.belongsTo(Categoria, { foreignKey: "categoriaId" });

module.exports = Categoria;
