const amigos = [];

function adicionar() {
    let campo = document.getElementById("nome-amigo");
    let nome = campo.value.trim();

    if (nome === "") {
        alert("Digite um nome.");
        return;
    }

    amigos.push(nome);

    document.getElementById("lista-amigos").textContent =
        amigos.join(", ");

    campo.value = "";
    campo.focus();
}

function sortear() {
    // Faremos esta função na próxima etapa.
}

function reiniciar(evento) {
    // Faremos esta função na próxima etapa.
}

