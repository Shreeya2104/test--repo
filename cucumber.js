module.exports = {
  default: {
    require: ['ts-node/register', 'steps/*.ts'],
    format: ['progress'],
    timeout: 60000,
  },
};