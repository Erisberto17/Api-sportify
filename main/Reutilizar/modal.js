import validar from "../Admin/opcoes/excluir/excluir.js"

export default async function modal(produto, element){
    const caixaModal = `
    <div id="confirmar">
        <p>Você esta tentando excluir o produto ( ${produto} ) tem certeza disso ?</p>
        <p class="sim">Sim</p>
        <p class="nao">Não</p>
        </div>
    `

    const main = document.querySelector("main");
    const div = document.createElement("p");

    div.classList.add = "divP"
    div.innerHTML = caixaModal
    main.innerHTML += div.innerHTML

    const escolha = document.querySelectorAll("#confirmar p"); 

        validar(escolha, element)
}


