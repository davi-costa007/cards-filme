const Filmes = [
    {nome:"Shrek", genero:"Ação", imagem:"src/img/baner1.jpeg"},
    {nome:"Divertidamente", genero:"desenho", imagem:"src/img/baner2.jpeg"}
]



const filtTurma = filmes.filter(item => item.genero === "comedia");

const listFilmes = filtGenero.map(item => {
    return `
        <div class="cards">
            <img src="${imagem}" alt="">
        <h1>${}</h1>
        <h1 class="avalia">5.0 ⭐</h1>
        </div>
    `
}).join("")

document.querySelector("body").innerHTML=listFilmes;
