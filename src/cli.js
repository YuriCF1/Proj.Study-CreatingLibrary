// cli.js
import trataErros from "./erros/funcoesErros.js";
import fs from "fs";
import { contaPalavras } from "./index.js";

const caminhoArquivo = process.argv;
const linkArquivo = caminhoArquivo[2];

fs.readFile(linkArquivo, 'utf-8', (erro, texto) => {
  try {
    if (erro) throw erro
    contaPalavras(texto);
  } catch(erro) {
    trataErros(erro);
  }
})