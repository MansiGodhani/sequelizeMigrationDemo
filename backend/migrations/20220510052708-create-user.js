'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let t = await queryInterface.sequelize.transaction();
    try{
      await queryInterface.createTable('Users', {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            },
            firstName: {
              type: Sequelize.STRING
            },
            lastName: {
              type: Sequelize.STRING
            },
            email: {
              type: Sequelize.STRING
            },
            createdAt: {
              allowNull: false,
              type: Sequelize.DATE
            },
            updatedAt: {
              allowNull: false,
              type: Sequelize.DATE
            }
          },
          {transaction: t}
      );
      await t.rollback();
    } catch (e) {
      console.log('=========error===',e);
      await t.rollback();
      throw e;
    }
  },
  down: async (queryInterface, Sequelize) => {
    const t = await queryInterface.sequelize.transaction();
    try{
      await queryInterface.dropTable('Users');
      await t.commit();
    } catch (e) {
      await t.rollback();
      throw e;
    }
  }
};