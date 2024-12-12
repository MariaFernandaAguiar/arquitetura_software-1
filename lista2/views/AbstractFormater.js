// AbstractFactory

class AbstractFormater {

    output (cities) {
      throw new Error('Should implement output method...');
    }
  
}

module.exports = AbstractFormater;