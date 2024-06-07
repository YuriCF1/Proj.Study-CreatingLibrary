function filtraOcorrencias(paragrafo) {
  //Pega um objecto e retorna um array com todos as chaves desse object. Neste caso, um array de palavras
  return Object.keys(paragrafo).filter((chave) => paragrafo[chave] > 1);
}

function montaSaidaArquivo(listaPalavras) {
  let textoFinal = "";
  listaPalavras.forEach((paragrafo, indice) => {
    const palavrasDuplicadas = filtraOcorrencias(paragrafo).join(", ");
    console.log(palavrasDuplicadas);
    if (palavrasDuplicadas) {
      textoFinal += `Palavras duplicadas no parágrafo ${
        indice + 1
      }: ${palavrasDuplicadas} \n`;
    }
  });
  return textoFinal;
}

export { montaSaidaArquivo };
