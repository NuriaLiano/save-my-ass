const fs = require('fs');
const genre = "boy"
//docs direcotory 
//¡IMPORTANT! check if genre vars is girl or boy and it's deppend it choose one of them directory
const path = 'data/docs/'+genre;


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
