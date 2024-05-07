const formContato = document.getElementById('form-contato');
const tabelaContatos = document.getElementById('tabela-contatos');

formContato.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaContato();
});

function adicionaContato() {
    const inputNomeContato = document.getElementById('nome-contato').value;
    const inputTelefoneContato = document.getElementById('telefone-contato').value;

    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <td>${inputNomeContato}</td>
        <td>${inputTelefoneContato}</td>
    `;

    tabelaContatos.appendChild(novaLinha);

    document.getElementById('nome-contato').value = '';
    document.getElementById('telefone-contato').value = '';
}
