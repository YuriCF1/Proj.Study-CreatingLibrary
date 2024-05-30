function trataErros(err) {
  if (err.code === "ENOENT") {
    throw new Error("Arquivo não encontrado"); //Pegando o objeto de erro completo 
    // return ("Arquivo não encontrado")
} else {
    return "Erro na aplicação";
  }
}

module.exports = trataErros;
