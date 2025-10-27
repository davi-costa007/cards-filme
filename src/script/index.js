const filmes = [
  //comedia
  { nome: "Shrek", genero: "comedia", avaliacao: "4.5", imagem: "src/img/baner1.webp" },
  { nome: "Divertidamente", genero: "comedia", avaliacao: "4.8", imagem: "src/img/baner2.webp" },
  { nome: "Barbie", genero: "comedia", avaliacao: "5.0", imagem: "src/img/baner3.webp" },
  { nome: "A Sorte nos Separe", genero: "comedia", avaliacao: "4.2", imagem: "src/img/baner4.webp" },
  { nome: "Esposa de Mentirinha", genero: "comedia", avaliacao: "4.9", imagem: "src/img/baner5.webp" },
  { nome: "Se Beber, Não Case!", genero: "comedia", avaliacao: "4.5", imagem: "src/img/baner6.webp" },
  { nome: "Virgem aos 40 Anos", genero: "comedia", avaliacao: "4.8", imagem: "src/img/baner7.webp" },
  { nome: "Miss Simpatia", genero: "comedia", avaliacao: "5.0", imagem: "src/img/baner8.webp" },
  { nome: "Ted", genero: "comedia", avaliacao: "4.2", imagem: "src/img/baner9.webp" },
  { nome: "A Escolha Perfeita", genero: "comedia", avaliacao: "4.9", imagem: "src/img/baner10.webp" },

  //romance
  { nome: "Titanic", genero: "romance", avaliacao: "5.0", imagem: "src/img3/baner-romance1.webp" },
  { nome: "Diário de uma Paixão", genero: "romance", avaliacao: "4.9", imagem: "src/img3/baner-romance2.webp" },
  { nome: "Como Era Antes de Você", genero: "romance", avaliacao: "4.8", imagem: "src/img3/baner-romance3.webp" },
  { nome: "A Culpa é das Estrelas", genero: "romance", avaliacao: "4.7", imagem: "src/img3/baner-romance4.webp" },
  { nome: "Querido John", genero: "romance", avaliacao: "4.6", imagem: "src/img3/baner-romance5.webp" },
  { nome: "P.S. Eu Te Amo", genero: "romance", avaliacao: "4.7", imagem: "src/img3/baner-romance6.webp" },
  { nome: "Um Lugar Chamado Notting Hill", genero: "romance", avaliacao: "4.8", imagem: "src/img3/baner-romance7.webp" },
  { nome: "Orgulho e Preconceito", genero: "romance", avaliacao: "4.9", imagem: "src/img3/baner-romance8.webp" },
  { nome: "Para Sempre", genero: "romance", avaliacao: "4.6", imagem: "src/img3/baner-romance9.webp" },
  { nome: "Simplesmente Amor", genero: "romance", avaliacao: "4.5", imagem: "src/img3/baner-romance10.webp" },

  //ação
  { nome: "Deadpool", genero: "acao", avaliacao: "4.5", imagem: "src/img2/baner-ação1.jpg" },
  { nome: "Batman", genero: "acao", avaliacao: "4.8", imagem: "src/img2/baner-ação2.jpg" },
  { nome: "Triplo X", genero: "acao", avaliacao: "5.0", imagem: "src/img2/baner-ação3.webp" },
  { nome: "A Princesa Perdida", genero: "acao", avaliacao: "4.9", imagem: "src/img2/baner-ação5.webp" },
  { nome: "Vingadores", genero: "acao", avaliacao: "4.5", imagem: "src/img2/baner-ação6.webp" },
  { nome: "Caçadores do Fim do Mundo", genero: "acao", avaliacao: "4.2", imagem: "src/img2/baner-açao4.webp" },
  { nome: "Homem de Ferro", genero: "acao", avaliacao: "4.8", imagem: "src/img2/baner-ação7.webp" },
  { nome: "Pantera Negra", genero: "acao", avaliacao: "5.0", imagem: "src/img2/baner-ação8.webp" },
  { nome: "Thor: Ragnarok", genero: "acao", avaliacao: "4.2", imagem: "src/img2/baner-ação9.webp" },
  { nome: "Doutor Estranho", genero: "acao", avaliacao: "4.9", imagem: "src/img2/baner-ação10.webp" },

  //terror
  { nome: "Invocação do Mal", genero: "terror", avaliacao: "4.9", imagem: "src/img4/baner-terror1.webp" },
  { nome: "Annabelle", genero: "terror", avaliacao: "4.7", imagem: "src/img4/baner-terror2.webp" },
  { nome: "It: A Coisa", genero: "terror", avaliacao: "4.8", imagem: "src/img4/baner-terror3.webp" },
  { nome: "Atividade Paranormal", genero: "terror", avaliacao: "4.6", imagem: "src/img4/baner-terror4.webp" },
  { nome: "O Exorcista", genero: "terror", avaliacao: "5.0", imagem: "src/img4/baner-terror5.webp" },
  { nome: "A Freira", genero: "terror", avaliacao: "4.5", imagem: "src/img4/baner-terror6.webp" },
  { nome: "Hereditário", genero: "terror", avaliacao: "4.8", imagem: "src/img4/baner-terror7.webp" },
  { nome: "Corra!", genero: "terror", avaliacao: "4.9", imagem: "src/img4/baner-terror8.webp" },
  { nome: "Midsommar", genero: "terror", avaliacao: "4.7", imagem: "src/img4/baner-terror9.webp" },
  { nome: "A Morte do Demônio", genero: "terror", avaliacao: "4.6", imagem: "src/img4/baner-terror10.webp" }
];

const section = document.querySelector("section"); 
const main = document.querySelector("main");
const continueH1 = document.querySelector(".continue");
const voltar = document.getElementById("voltar");

voltar.style.display = "none";

const mostrarFilmes = genero => {
  section.style.display = "none";
  continueH1.style.display = "none";   

  const filtrados = filmes.filter(filme => filme.genero === genero);

  const lista = filtrados.map(filme => `
    <div class="cards">
      <img src="${filme.imagem}" alt="${filme.nome}">
      <h1>${filme.nome}</h1>
      <h1 class="avalia">${filme.avaliacao} ⭐</h1>
      <button class="assistir-btn">ASSISTIR</button>
    </div>
  `).join("");

  main.innerHTML = lista;
  voltar.style.display = "block";
};

const comedia = () => mostrarFilmes("comedia");
const romance = () => mostrarFilmes("romance");
const acao = () => mostrarFilmes("acao");
const terror = () => mostrarFilmes("terror");

voltar.addEventListener("click", () => {
  main.innerHTML = "";
  section.style.display = "grid";
  continueH1.style.display = "block";
  voltar.style.display = "none";
});
