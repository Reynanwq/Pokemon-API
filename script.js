var formulario = document.querySelector('form')

formulario.addEventListener('submit', function(e) {

    e.preventDefault()

    //url da pesquisa
    let urlForm = "https://pokeapi.co/api/v2/pokemon/";

    //valor do input name
    let nome = document.getElementById("name")

    //conectando a url com o input name
    urlForm = urlForm + this.name.value

    //transforma os valores em minúsculas
    urlForm = urlForm.toLocaleLowerCase()

    //ID content
    let resposta = document.getElementById('content')

    //ID ImgPokemon
    let imagem = document.getElementById('imgPokemon')

    //resposta em html
    let html = ''

    fetch(urlForm)
        .then(resposta => resposta.json())
        .then(function(data) {
            console.log
            html = 'Nome: ' + maiuscula(data.name) + '<br>'
            html = html + 'Type: ' + maiuscula(data.types[0].type.name)
            resposta.innerHTML = html

            imagem.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.back_default + "'>"
        })
        .catch(function(err) {
            if (err == 'Unexpect token N in JSON at position 0') {
                html = "Pokemon não encontrado! .-."
            } else {
                html = 'Erro:' + err
            }
            resposta.innerHTML = html
        })
});

//Função para deixar primeira letra maiuscula
function maiuscula(val) {
    return val[0].toUpperCase() + val.substr(1)
}