const AbstractFormater = require('./AbstractFormater.js')

class FormaterHTML2 extends AbstractFormater {

  output (cities) {
    let html = `
    <!DOCTYPE HTML>
    <html>
        <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <title>Relatório de Nomes de Cidades</title>
        </head>
        <body>
        <h1>Relatório de Nomes de Cidades</h1>
        <ul>
    ` ;

    for (let i = 0; i < cities.length; i++) {
      html += `     <li><span class = "cidade"> ${cities[i]['Nome']}</span></li>\n`;
    }

    html += `
      </ul>
    </body>
  </html>`;

    return html;
  }

}

module.exports = FormaterHTML2;
