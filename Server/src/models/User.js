const { DataTypes } = require("sequelize");

module.exports = (Sequelize) => {
  Sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false, //este campo hace que no tenga vacios
    },
    email: {
      Type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
  });
};
