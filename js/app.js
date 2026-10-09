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
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let escolhido = amigos[indice];

    document.getElementById("lista-sorteio").textContent = escolhido;
}


function reiniciar(evento) {
    evento.preventDefault();

    amigos.length = 0;

    document.getElementById("nome-amigo").value = "";
    document.getElementById("lista-amigos").textContent = "";
    document.getElementById("lista-sorteio").textContent = "";

    document.getElementById("nome-amigo").focus();
}


