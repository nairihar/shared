const calculators = require('./calculators');
const convertors = require('./convertors');
const parsers = require('./parsers');

module.exports = {
  ...calculators,
  ...convertors,
  ...parsers,
};
