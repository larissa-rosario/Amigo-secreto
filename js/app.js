const amigos = [];

function adicionar() {
    let campo = document.getElementById("nome");
    let nome = campo.value.trim();

    if (nome === "") {
        alert("Digite um nome.");
        return;
    }

    nomes.push(nome);

    document.getElementById("listaNomes").textContent = nomes.join(", ");

    campo.value = "";
    campo.focus();
}

function sortear() {
  // TODO validar escolher e exibir
}

function reiniciar(evento) {
  // TODO impedir a navegação e restaurar o estado
}
