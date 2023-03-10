import modal from '/main/Reutilizar/modal.js'

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
export default function validar(escolha, produto){

    const tbody = document.querySelector("tbody")
    const main = document.querySelector("main")
    escolha.forEach((element) => {
        element.addEventListener("click", async () => {
            tbody.innerHTML = ""
            const con = document.querySelector("#confirmar");
            main.removeChild(con)
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

async function createProduct(element, tbody) {

        const tr = document.createElement("tr");
        const tdImg = document.createElement("td");
        const tdNome = document.createElement("td");
        const img = document.createElement("img");
        const p = document.createElement("p");
        const tdAcao= document.createElement("td");

        img.src = element.img;
        p.innerText = element.nome;
        tdAcao.innerHTML = "excluir";

        tdImg.appendChild(img);
        tdNome.appendChild(p);
        tr.appendChild(tdImg);
        tr.appendChild(tdNome);
        tr.appendChild(tdAcao);
        tbody.appendChild(tr);

        tdAcao.addEventListener("click", async () => {
            modal(element.nome, element)        
    })
}
   
