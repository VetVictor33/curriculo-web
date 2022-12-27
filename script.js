const descricao = document.getElementById("descricao");
const formacao = document.getElementById("formacao");
const habilidades = document.getElementById("habilidades");
const complementares = document.getElementById("complementares")

function mostraArtigo(artigo) {

    const articles = document.querySelectorAll("article");

    for (let i = 0; i < articles.length; i++) {
        articles[i].classList.add("hidden");
    }

    artigo.classList.remove("hidden")
}