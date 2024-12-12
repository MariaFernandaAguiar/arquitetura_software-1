const fs = require('fs');
const FormaterHTML = require ('../views/FormaterHTML.js');
const FormaterTXT = require ('../views/FormaterTXT.js');
const FormaterHTML2 = require ('../views/FormaterHTML2.js');
const CitiesReporter = require ('../models/CitiesReporter.js');

exports.postFormat = async (req,res) => {

  const {format} = req.params; // format = 'html' or 'txt'

  let formatter; 
 
  if (format === 'html') {
    formatter = new FormaterHTML();
  }
  else if (format === 'txt') {
    formatter = new FormaterHTML2();
  }
  else if(format === 'html2'){
    formatter = new FormaterHTML2();
  }

  const CitiesReporterInstance = new CitiesReporter({ formaterStrategy: formatter });
  const fileCities = './data/cidades-2.json';
  res.send(CitiesReporterInstance.report(fileCities));
};


