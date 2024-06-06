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

// async function criaESalvaArquivo(listaPalavra, endereco) {
//   const arquivoNovo = `${endereco}/resultado.txt`;
//   const textoPalavras = JSON.stringify(listaPalavra);
//   try {
//     await fs.promises.writeFile(arquivoNovo, textoPalavras);
//     console.log("Arquivo Criado");
//   } catch (erro) {
//     throw erro;
//   }
// }

function criaESalvaArquivo(listaPalavra, endereco) {
  const arquivoNovo = `${endereco}/resultado.txt`;
  const textoPalavras = JSON.stringify(listaPalavra);
  fs.promises
    .writeFile(arquivoNovo, textoPalavras) //writefile não retorna nada
    .then(() => {
      //then é o responsável para dar a conclusão de uma promise, que pode ter como retorno qualquer tipo de dado
      console.log("Arquivo criado");
    })
    .catch((erro) => {
      throw erro;
    })
    .finally(() => {
      //Independentemente do resultado que acontece, se for sucesso ou falha, ele acontece. Muito útil para fechar conexões com banco de dados
      console.log("Operação finalizada");
    });
}

/*NOTAS

USOS MAIS COMUNS DE CÓDIGOS ASSÍNCRONOS
- Leitura/Manipulação de Arquivos em Disco
- Comunicação entre cliente e servidor
- Operação em bancos de dados
*/
