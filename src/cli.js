// cli.js
import trataErros from "./erros/funcoesErros.js";
import fs from "fs";
import { contaPalavras } from "./index.js";
import { montaSaidaArquivo } from "./helpers.js";
import path from "path";

import { Command } from "commander";

const program = new Command();

program
  .version("0.0.1")
  .option("-t, --texto <string>", "caminho do texto a ser processado")
  .option(
    "-d, --destino <string>",
    "caminho da pasta para salvar arquivo de resultados"
  )
  .action((options) => {
    const { texto, destino } = options;
    if (!texto || !destino) {
      console.error("Error, favor inserir caminho de origem e destino.");
      program.help();
      return;
    }

    const caminhoTexto = path.resolve(texto);
    const caminhoDestino = path.resolve(destino);

    try {
      processaArquivo(caminhoTexto, caminhoDestino);
      console.log("Texto processado com sucesso");
    } catch (error) {
      console.error("Ocorreu um erro no processamento");
    }
  });

program.parse();

/*
APÓS A IMPLEMENTAÇÃO DA BIBLIOTECA Command NO CÓDIGO ACIMA, A LININHA DE COMANDO AGORA É ASSIM E ERA ASSIM
node src/cli.js -t arquivos/texto-web.txt -d ./resultados
node src/cli.jg arquivos/text-web.txt ./resultados
*/


// const caminhoArquivo = process.argv;
// const linkArquivo = caminhoArquivo[2];
// const endereco = caminhoArquivo[3];

function processaArquivo(texto, destino) {
  fs.readFile(texto, "utf-8", (erro, texto) => {
    try {
      if (erro) throw erro;
      const resultado = contaPalavras(texto);
      criaESalvaArquivo(resultado, destino);
    } catch (erro) {
      trataErros(erro);
    }
  });
}
// async function criaESalvaArquivo(listaPalavra, endereco) {
//   const arquivoNovo = `${endereco}/resultado.txt`;
//   const textoPalavras = JSON.stringify(listaPalavra);
//   try {
//     await fs.promises.writeFile(arquivoNovo, textoPalavras);
//     ("Arquivo Criado");
//   } catch (erro) {
//     throw erro;
//   }
// }

function criaESalvaArquivo(listaPalavra, destino) {
  const arquivoNovo = `${destino}/resultado.txt`;
  // const textoPalavras = JSON.stringify(listaPalavra);
  const textoPalavras = montaSaidaArquivo(listaPalavra);
  fs.promises
    .writeFile(arquivoNovo, textoPalavras) //writefile não retorna nada
    .then(() => {
      //then é o responsável para dar a conclusão de uma promise, que pode ter como retorno qualquer tipo de dado
      ("Arquivo criado");
    })
    .catch((erro) => {
      throw erro;
    })
    .finally(() => {
      //Independentemente do resultado que acontece, se for sucesso ou falha, ele acontece. Muito útil para fechar conexões com banco de dados
      ("Operação finalizada");
    });
}

/*NOTAS

USOS MAIS COMUNS DE CÓDIGOS ASSÍNCRONOS
- Leitura/Manipulação de Arquivos em Disco
- Comunicação entre cliente e servidor
- Operação em bancos de dados
*/
