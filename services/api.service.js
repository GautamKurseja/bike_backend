const ApiGateway = require("moleculer-web");

module.exports = {
  name: "api",
  mixins: [ApiGateway],

  settings: {
    port: process.env.PORT || 3000,
    ip: "0.0.0.0",

    cors: {
      origin: "*",
      methods: ["GET", "OPTIONS", "POST", "PUT", "DELETE"],
    },

    routes: [
      {
        path: "/api",
        aliases: {
          "GET /bikes": "bikes.list",
          "GET /bikes/:id": "bikes.get",
          "POST /orders": "orders.create",
          "GET /orders": "orders.list"
        },
        autoAliases: true,
      },
    ],
  },
};
