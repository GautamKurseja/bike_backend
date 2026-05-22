module.exports = {
  nodeID: "bike-ecommerce-node",
  logger: true,
  logLevel: "info",
  cacher: "Memory",
  serializer: "JSON",
  requestTimeout: 10 * 1000,
  retryPolicy: {
    enabled: false
  },
  maxCallLevel: 100,
  heartbeatInterval: 10,
  heartbeatTimeout: 30,
  contextParamsCloning: false,
  tracking: {
    enabled: false
  },
  disableBalancer: false,
  registry: {
    strategy: "RoundRobin",
    preferLocal: true
  },
  circuitBreaker: {
    enabled: false
  },
  bulkhead: {
    enabled: false
  },
  validator: true,
  errorHandler: null,
  middlewares: []
};
