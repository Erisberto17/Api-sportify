async function getData(){
    const url = "http://localhost:8080/catalogo"

    const req = await fetch(url);
    const res = await req.json();

    createElements(res.products)
}

function createElements(produtos){

    console.log(produtos)

    produtos.forEach(element => {
        const seção = document.querySelector("#container");

        const caixaProduto = document.createElement("div");
        const caixaImagem = document.createElement("div");
        const imagem = document.createElement("img");
        const caixaTexto = document.createElement("div");
        const nomeProduto = document.createElement("p");
        const botao = document.createElement("button");
        const direcionar = document.createElement("a");

        imagem.src = element.img[0];
        nomeProduto.innerHTML = element.nome;
        botao.innerHTML = "Infos"

        seção.appendChild(direcionar);
        direcionar.appendChild(caixaProduto);
        caixaProduto.appendChild(caixaImagem);
        caixaImagem.appendChild(imagem);
        caixaProduto.appendChild(caixaTexto);
        caixaTexto.appendChild(nomeProduto);
        caixaProduto.appendChild(botao);

        caixaProduto.classList.add("boxContainer");
        caixaImagem.classList.add("img");
        caixaTexto.classList.add("text");

        direcionar.addEventListener("click", (e) => {
            e.preventDefault()
            const produto = element;

            mostrarProduto(produto)
        })
    });
}

function mostrarProduto(produto){

    console.log(produto)

}
getData();

