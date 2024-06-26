//__________________THINK BEFORE CODE__________________
// 1- Pegar um arquivo de texto
// 2- Processar o conteúdo
// 3- Pensar como as informações processadas serão disponibilizadas

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

export function contaPalavras(textoCompleto) {
  const pagrafosExtraidos = extraiParagrafos(textoCompleto);
  const contagem = pagrafosExtraidos.flatMap((paragrafo) => {
    //[1,2,3] | [1,2,3, [4,5]] => [1,2,3,4,5]
    //RESOLVE ISSO COM REDUCE = NOTAS ABAIXO
    if (!paragrafo) return [];
    return verificarPalavrasDuplicadas(paragrafo); //Usando o flatMap, o resultado é o mesmo do que se fazer o que está abaixo. Mas performático, não preciso percorrer o array 2 vezes
  });
  // .filter((paragraf) => paragraf) //Tirando os espaços vazios resultante das quebras de linha. Já String vazia é 'false'
  // .map((paragrafo) => {
  // return verificarPalavrasDuplicadas(paragrafo);
  // });
  return contagem;
}

function extraiParagrafos(texto) {
  return texto.toLowerCase().split("\n"); //Separando usando as quebras de linha
}

function limpaPalavra(palavra) {
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""); //Tirando todos os caracteres especiais
}

function verificarPalavrasDuplicadas(textoParagrafo) {
  const listaPalavras = textoParagrafo.split(" ");
  const resultado = {};
  //   objeto[propriedade] = valor;
  listaPalavras.forEach((palavra) => {
    if (palavra.length >= 3) {
      const palavraLimpa = limpaPalavra(palavra);
      resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1; //Verifica se a propriedade já existe: Se existir, incrementa o valor atual em 1. Se não existir, utiliza 0 como valor inicial e adiciona 1.
    }
  });
  return resultado;
}

//____________________________NOTAS____________________________
/*
Na notação de ponto, propriedade se refere ao nome exato de uma propriedade já existente no objeto (ou será criada uma nova). 
Já na notação de colchete, propriedade se refere a uma variável ou espera receber o resultado de alguma expressão, 
por isso é normalmente utilizado em iterações (loops) ou quando se espera receber chaves de propriedades diversas. 
Para utilizar a notação de colchetes de forma similar à de ponto, o nome da propriedade deve ser passado como string, por exemplo, objeto[“propriedade”].*/
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

/*
TIRANDO OS PARÁGRAFOS COM REDUCE
const paragrafos = ["código", "js", "", "web", "", "array"];

const result = paragrafos.reduce((acum, paragrafo) => {
 if (paragrafo) {
   return [...acum, paragrafo];
 }
 return acum;
}, []);

console.log(result);

*/
