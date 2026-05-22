require("dotenv").config();
const { ServiceBroker } = require("moleculer");
const config = require("./moleculer.config");

const broker = new ServiceBroker(config);

// Load services
broker.loadServices("./services");

// Start the broker
broker.start()
  .then(() => {
    broker.logger.info("Backend started successfully! API Gateway is running on port 3000.");
  })
  .catch((err) => {
    broker.logger.error("Error occurred while starting broker!", err);
  });
