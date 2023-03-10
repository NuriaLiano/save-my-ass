const fs = require('fs');

//docs direcotory
const path = 'data/docs';

let fileContent = '';
let paragraphs = [];

//checks all the time if the directory changes
fs.watch(path, (eventType, filename) => {
  if (filename) {
    console.log(`Se detectó un cambio en el archivo: ${filename}`);

    //read the file and counts the paragraphs
    fs.readFile(`${path}/${filename}`, 'utf8', (err, data) => {
      if (err) throw err;
      console.log(`Contenido del archivo: ${data}`);

      fileContent = data;
      paragraphs = fileContent.split('\r\n\r\n');
      console.log(`Párrafos encontrados: ${paragraphs.length}`);
      console.log(paragraphs);
    });
  }
});
