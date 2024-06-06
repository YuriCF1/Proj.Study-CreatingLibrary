// cli.js
import trataErros from "./erros/funcoesErros.js";
import fs from "fs";
import { contaPalavras } from "./index.js";

const caminhoArquivo = process.argv;
const linkArquivo = caminhoArquivo[2];
const endereco = caminhoArquivo[3];

fs.readFile(linkArquivo, "utf-8", (erro, texto) => {
  try {
    if (erro) throw erro;
    const resultado = contaPalavras(texto);
    criaESalvaArquivo(resultado, endereco);
  } catch (erro) {
    trataErros(erro);
  }
});

async function criaESalvaArquivo(listaPalavra, endereco) {
  const arquivoNovo = `${endereco}/resultado.txt`;
  const textoPalavras = JSON.stringify(listaPalavra);
  try {
    await fs.promises.writeFile(arquivoNovo, textoPalavras);
    console.log("Arquivo Criado");
  } catch (erro) {
    throw erro;
  }
}
