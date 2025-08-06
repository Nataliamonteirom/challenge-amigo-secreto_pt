let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value;

    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(nome);
    input.value = '';
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for  (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li')
        li.textContent = amigos[i];

        lista.appendChild(li);
    }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('A lista de amigos está vazia. Adicione nomes para sortear.');
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceSorteado];


  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li>O amigo secreto é: <strong>${amigoSorteado}</strong></li>`;


  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  amigos.length = 0;
}

