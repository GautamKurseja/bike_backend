const DbService = require("moleculer-db");
const SequelizeAdapter = require("moleculer-db-adapter-sequelize");
const Sequelize = require("sequelize");

module.exports = {
  name: "bikes",
  mixins: [DbService],

  adapter: new SequelizeAdapter(process.env.DATABASE_URL),

  model: {
    name: "bike",
    define: {
      name: Sequelize.STRING,
      brand: Sequelize.STRING,
      price: Sequelize.FLOAT,
      description: Sequelize.TEXT,
      imageUrl: Sequelize.STRING,
    },
    options: {}
  },

  async started() {
    // Seed database if empty
    const count = await this.adapter.count();
    if (count === 0) {
      this.logger.info("Seeding bikes database...");
      const sampleBikes = [
        {
          name: "Mountain Explorer Pro",
          brand: "TrailBlazer",
          price: 1200.00,
          description: "A high-performance mountain bike designed for rugged terrain.",
          imageUrl: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=1000&auto=format&fit=crop",
        },
        {
          name: "City Commuter V2",
          brand: "UrbanRide",
          price: 450.00,
          description: "Lightweight and efficient, perfect for daily city commutes.",
          imageUrl: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=1000&auto=format&fit=crop",
        },
        {
          name: "Aero Road Master",
          brand: "Speedster",
          price: 2500.00,
          description: "Aerodynamic carbon frame road bike for competitive racing.",
          imageUrl: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?q=80&w=1000&auto=format&fit=crop",
        },
      ];

      for (let bike of sampleBikes) {
        await this.adapter.insert(bike);
      }
      this.logger.info("Seeding complete!");
    }
  }
};
