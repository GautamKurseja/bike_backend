const DbService = require("moleculer-db");
const SequelizeAdapter = require("moleculer-db-adapter-sequelize");
const Sequelize = require("sequelize");

module.exports = {
  name: "orders",
  mixins: [DbService],

  adapter: new SequelizeAdapter(process.env.DATABASE_URL),

  model: {
    name: "order",
    define: {
      bikeId: Sequelize.INTEGER,
      bikeName: Sequelize.STRING,
      totalPrice: Sequelize.FLOAT,
      status: {
        type: Sequelize.STRING,
        defaultValue: "completed"
      }
    },
    options: {
      tableName: "bike_orders"
    }
  },

  actions: {
    // We can define custom actions here if needed, 
    // but Moleculer-DB gives us `orders.create` out of the box!
  }
};
