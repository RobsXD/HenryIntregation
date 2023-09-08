const { Datatypes } = require("sequelize");

module.exports = (Sequelize) => {
  Sequelize.define("Favorite", {
    id: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    name: {
      type: Datatypes.STRING,
    },
    image: {
      type: Datatypes.STRING,
    },
    status: {
      type: Datatypes.STRING,
    },
    gender: {
      type: Datatypes.STRING,
      validate: {
        isIn: [["Male", "Female", "Genderless", "unknown"]],
      },
    },
    location: {
      type: Datatypes.STRING,
    },
  });
};
