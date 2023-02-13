 const produtos = {
    "produto":[
        {
        "nome":"Balança de Precisao",
        "imagem":"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WgwLxxDCAwtw-QgF96OSsgHaGy%26pid%3DApi&f=1&ipt=6a705b1667a83d85b11ee1e07ac96acea9f04e08c9ef909dc712dcafab6f5e0a&ipo=images",
        "legenda":"Balança digital, Otima para quem esta entrando no Mundo fitness, onde terá que pesar sua alimentação",
        "links":[{
            "mercado Livre":"#1",
            "amazon":"#2",
            "shoppe":"#3",
            "americanas":"#4"
        }]
        },
        {
            "nome":"Caixa de som",
            "imagem":"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.mAmTrlRcK2dzClrJMZUDKwHaHa%26pid%3DApi&f=1&ipt=80641b7ebeec15f72eca9baa4e185c99e139bb1c718789f6be23169eaf7db5a1&ipo=images",
            "legenda":"Caixnha de som, Portavél, ótimo som e facil de se usar",
            "links":[{
                "mercado Livre":"#1",
                "amazon":"#2",
                "shoppe":"#3",
                "americanas":"#4"
            }]
        },
        {
            "nome":"Fone de Ouvido",
            "imagem":"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Ok9l1gqj7cuc6KAL4Sfl0QHaHa%26pid%3DApi&f=1&ipt=10b2a8f9fa68ce02c257836ed3e3e2871f80357e9b7e7a2be89c632df0a83006&ipo=images",
            "legenda":"Fone de ouvido bluetooth, facil portabilidade e discreto",
            "links":[{
                "mercado Livre":"#1",
                "amazon":"#2",
                "shoppe":"#3",
                "americanas":"#4"
            }]
        },
        {
            "nome":"Mouse Gamer",
            "imagem":"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.rXcAYgLQVaudqPUkgogP0gHaHa%26pid%3DApi%26h%3D160&f=1&ipt=028074f248a5bc6867184b986829639c0ecce7a7c8266d38db439e41225039c3&ipo=images",
            "legenda":"Excelente mouse para jogos",
            "links":[{
                "mercado Livre":"#1",
                "amazon":"#2",
                "shoppe":"#3",
                "americanas":"#4"
            }]
        }
    ]
}

function createElements(){

    produtos.produto.forEach(element => {
        const seção = document.querySelector("#container")

        const caixaProduto = document.createElement("div");
        const caixaImagem = document.createElement("div");
        const imagem = document.createElement("img");
        const caixaTexto = document.createElement("div");
        const nomeProduto = document.createElement("p");
        const botao = document.createElement("button");

        imagem.src = element.imagem;
        nomeProduto.innerHTML = element.nome;
        botao.innerHTML = "Infos"

        seção.appendChild(caixaProduto)
        caixaProduto.appendChild(caixaImagem);
        caixaImagem.appendChild(imagem);
        caixaProduto.appendChild(caixaTexto);
        caixaTexto.appendChild(nomeProduto);
        caixaProduto.appendChild(botao);

        caixaProduto.classList.add("boxContainer");
        caixaImagem.classList.add("img");
        caixaTexto.classList.add("text");
    });

    
}
createElements();

