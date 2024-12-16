'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('donations', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      value: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      payment_method: {
        type: Sequelize.ENUM('QRIS', 'TF'),
        allowNull: false,
      },
      bank: {
        type: Sequelize.ENUM('BNI', 'BRI', 'BCA', 'Mandiri', 'BSI'),
        allowNull: false,
      },
      id_crowdfund: {
        type: Sequelize.INTEGER,
        references: {
          model: 'crowdfunds', // Referencing the 'crowdfunds' table
          key: 'id',
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('donations');
  },
};
