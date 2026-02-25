'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('Articles', [
        {
          name: 'Introduction to Ashtanga',
          slug: 'introduction-to-ashtanga',
          image: 'ashtanga.jpg',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          published: '2020-01-08 15:02:30',
          author_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          name: 'Morning Vinyasa Flow routine',
          slug: 'morning-vinyasa-flow-routine',
          image: 'morning.jpg',
          body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          published: '2020-02-15 10:00:00',
          author_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Secrets of a yoga teacher',
          slug: 'secrets-of-a-yoga-teacher',
          image: 'yoga-teacher.jpg',
          body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          published: '2020-03-20 18:30:00',
          author_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ])

      ])
    },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Articles', null, {});
  }
};
