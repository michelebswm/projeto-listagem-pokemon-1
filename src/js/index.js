//console.log(document.getElementById("botao-alterar-tema"));
const botaoAlterarTema = document.getElementById("botao-alterar-tema");
// querySelector é para consultar um seletor, pode ser uma classe ou tag
const tagBody = document.querySelector("body");
// Imagem botao troca de tema
const imagemBotaoTrocaTema = document.querySelector(".imagem-botao");

// addEventListener = fica inspesionando o elemento
// Tem que passar o evento e a ação que vai ser disparada
botaoAlterarTema.addEventListener("click", () => {
	//Verifica se o body possui a classe modo-escuro, retorna true ou false
	const modoEscuro = tagBody.classList.contains("modo-escuro");

	tagBody.classList.toggle("modo-escuro"); //toggle alterna entre 2 estados

	if (modoEscuro) {
		//Se o body tiver a classe modo-escuro, então tira a classe modo-escuro
		//tagBody.classList.remove("modo-escuro");
		//Troca a imagem do botão troca de tema
		imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/sun.png");
	} else {
		// altera o tema do body modo-escuro
		// console.log("clicou no botao");
		//tagBody.classList.add("modo-escuro");
		// console.log(tagBody.classList);
		// Trocar a imagem do botão para Lua quando for modo-escuro
		// setAttribute passar o atributo e o caminho
		imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/moon.png");
	}
});
