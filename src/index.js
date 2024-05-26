const fs = require("fs"); //File Sysyem

const caminhoArquivo = process.argv; //Argument Vector =  Pega os valores que vem do terminal e colocam no array. No caso, pega o caminho do texto
const linkArquivo = caminhoArquivo[2];
console.log(linkArquivo);

fs.readFile(linkArquivo, "utf-8", (error, texto) => {
  //utf-8 passando o encoder do tipo de texto, latino
  verificarPalavrasDuplicadas(texto);
});


/*
//CAMINHO RELATIVO
const path = require('path');

// Caminho absoluto para text-web.tsxt
const caminhoAbsoluto = path.join(__dirname, '../arquivo/text-web.tsxt');

// Caminho relativo de index.js para text-web.tsxt
const caminhoRelativo = path.relative(__dirname, caminhoAbsoluto);

// Exibe o caminho relativo
console.log(caminhoRelativo);
*/
