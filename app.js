//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    const inputNome = document.getElementById("amigo");

        const nome = inputNome.value.trim();

        if(nome === ""){
            alert("Insira um nome! :");
            return;
        }
    
    amigos.push(nome);
    inputNome.value = "";
    atualizarLista();
}
function atualizarLista(){
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++){
        const item = document.createElement("li");
        item.textContent = amigos [i];
        lista.appendChild(item);
    }
}
function sortearAmigo(){
    if (amigos.length === 0){
        alert("Adicione pelo menos um nome para sortear!");
        return;
    }
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const nomeSorteado = amigos[indiceSorteado];

    document.getElementById("resultado").innerHTML = `Amigo Sorteado é ${nomeSorteado}`
}
