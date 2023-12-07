'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PersonalInformations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.STRING
      },
      blood_group: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.STRING
      },
      height: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.STRING
      },
      allergies: {
        type: Sequelize.STRING
      },
      diet_type: {
        type: Sequelize.STRING
      },
      medical_conditions: {
        type: Sequelize.STRING
      },
      active_state: {
        type: Sequelize.STRING
      },
      goal: {
        type: Sequelize.STRING
      },
      cuisine_type: {
        type: Sequelize.STRING
      },
      address: {
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PersonalInformations');
  }
};