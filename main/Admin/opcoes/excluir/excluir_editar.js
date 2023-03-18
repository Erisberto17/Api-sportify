import {modal, deletar, edit} from '/main/Reutilizar/modal.js'

const form = document.querySelector('form');
const url = "http://localhost:8080/catalogo/";


function carregando () {
    const pagina = `
    <div id="carregando"> 
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    </div>
    `;

    form.textContent += pagina

}

export async function mostrarProduto(tbody){
    
    const req = await fetch(url);
    const res = await req.json()
    
    const produtos = res.products;
    
    produtos.forEach(element => createProduct(element, tbody))
    
}
function limpar () {
    const tbody = document.querySelector("tbody");

    tbody.innerHTML = '';
    
    mostrarProduto(tbody)
}
function excluirProduto(produto){

    const id = produto._id
        
    const bearer = window.localStorage.getItem('token');
    const auth = JSON.parse(bearer)

    fetch(url + id,{
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${auth}`
        }
    })
    .then(() => {

        carregando()
        limpar(produto.nome);

    })
        
    
}
export function validarExcluir(escolha, produto){

    const tbody = document.querySelector("tbody")
    const form = document.querySelector("form")
    escolha.forEach((element) => {
        element.addEventListener("click", async () => {
            tbody.innerHTML = ""
            const con = document.querySelector("#confirmar");
            form.removeChild(con)
           const clas = element.className;
           const classe = clas.toString()
           console.log(classe)

           if(classe == "sim"){
                excluirProduto(produto)

            }else if(classe == "nao") {
                
               console.log("operação cancelada")
               limpar();                  
           }
       })
   })
}
export function validarEditar(escolha, produto){

    const tbody = document.querySelector("tbody")
    const form = document.querySelector("form")
    escolha.forEach((element) => {
        element.addEventListener("click", async () => {
            tbody.innerHTML = ""
            const con = document.querySelector("#confirmar");
            form.removeChild(con)
           const clas = element.className;
           const classe = clas.toString()
           console.log(classe)

           if(classe == "sim"){
                editarProduto(produto)

            }else if(classe == "nao") {
                
               console.log("operação cancelada")
               limpar();                  
           }
       })
   })
}
async function editarProduto(produto){
    const caixaModal = `
        <div id="confirmar">
            <div id="imped"></div>
            <input type="text" placeholder="nome">
            <input type="text" placeholder="descrição">
            <input type="text" placeholder="imagens">
            <input type="text" placeholder="links">
            <p class="sim">atualizar</p>
        </div>
    `
    modal(caixaModal);
}
    
async function createProduct(element, tbody) {

        const tr = document.createElement("tr");
        const tdImg = document.createElement("td");
        const tdNome = document.createElement("td");
        const img = document.createElement("img");
        const p = document.createElement("p");
        const tdAcao= document.createElement("td");
        const excluir = document.createElement("p");
        const editar = document.createElement("p");

        img.src = element.img;
        p.innerText = element.nome;
        excluir.innerHTML = "excluir";
        editar.innerHTML = "editar";

        tdAcao.appendChild(editar);
        tdAcao.appendChild(excluir);
        tdImg.appendChild(img);
        tdNome.appendChild(p);
        tr.appendChild(tdImg);
        tr.appendChild(tdNome);
        tr.appendChild(tdAcao);
        tbody.appendChild(tr);

        excluir.addEventListener("click", async () => {
            const caixaModal = `
                <div id="confirmar">
                <div id="imped"></div>
                <p>Você esta tentando excluir o produto ( ${element.nome} ) tem certeza disso ?</p>
                <p class="sim">Sim</p>
                <p class="nao">Não</p>
                </div>
            `

            modal(caixaModal)        
            deletar(element)
    })
        editar.addEventListener("click", () => {
            const caixaModal = `
            <div id="confirmar">
                <div id="imped"></div>
                <p>Você esta tentando editar o produto ( ${element.nome} ) tem certeza disso ?</p>
                <p class="sim">Sim</p>
                <p class="nao">Não</p>
                </div>
            `
            modal(caixaModal)
            edit(element)
        })
}
   
