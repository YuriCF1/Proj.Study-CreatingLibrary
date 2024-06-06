// erros/funcoesErros.js
export default function trataErros(err) {
  if (err && err.code === "ENOENT") {
    throw new Error("Arquivo não encontrado");
  } else {
    throw new Error("Erro na aplicação");
  }
}
