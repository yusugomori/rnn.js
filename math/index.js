const operator = require('./operator');

module.exports = {
  array:     require('./array'),
  error:     require('./error'),
  fn:        require('./fn'),
  operator:  operator,
  random:    require('./random'),
};


for (let name of Object.getOwnPropertyNames(operator)) {
  module.exports[name] = operator[name];
}
