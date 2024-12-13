const Abstract = require( './Abstract');

class FormaterJson extends Abstract {

  output (cities) {
    return JSON.stringify(cities);
  }

}

module.exports = FormaterJson;

