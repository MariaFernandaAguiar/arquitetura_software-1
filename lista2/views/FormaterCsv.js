const Abstract = require( './Abstract');

class FormaterCsv extends Abstract {

  output (cities) {
    let csv = 'Nome\n';
    for (let i = 0; i < cities.length; i++) {
      csv += `${cities[i]['Nome']}\n`;
    }
    return csv;
  }

}

module.exports = FormaterCsv;
s