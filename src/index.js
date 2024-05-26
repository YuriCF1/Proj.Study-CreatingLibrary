// 1- Pegar um arquivo de texto
// 2- Processar o conteúdo
// 3- Pensar como as informações processadas serão disponibilizadas

// const caminhoArquivo = require("../arquivos/texto-web.txt"); //require não funciona pois ele só recebe arquivos módulos ou equivalentes como JSON

const fs = require("fs"); //File Sysyem

const caminhoArquivo = process.argv; //Argument Vector =  Pega os valores que vem do terminal e colocam no array. No caso, pega o caminho do texto
const linkArquivo = caminhoArquivo[2];
console.log(linkArquivo);

fs.readFile(linkArquivo, "utf-8", (error, texto) => {
  //utf-8 passando o encoder do tipo de texto, latino
  verificarPalavrasDuplicadas(texto);
});

//Criar um array com as palavras
//Contas as ocorrencias de cada palavra
//Como mostrar essa lista e quantidade de vezes?
//Montar um objeto com o resultado
/*
        {
            "web": 5,
            "computador": 4
        }
    */

function verificarPalavrasDuplicadas(texto) {
  const listaPalavras = texto.split(" ");
  const resultado = {};
  //   objeto[propriedade] = valor;
  listaPalavras;
  listaPalavras.forEach((palavra) => {
    resultado[palavra] = (resultado[palavra] || 0) + 1; //Verifica se a propriedade já existe: Se existir, incrementa o valor atual em 1. Se não existir, utiliza 0 como valor inicial e adiciona 1.
  });
  console.log(resultado);
}

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
