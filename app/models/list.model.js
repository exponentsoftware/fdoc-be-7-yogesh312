module.exports = (sequelize, Sequelize) => {
    const List = sequelize.define("list", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.INTEGER
      },
    });
  
    return List;
  };