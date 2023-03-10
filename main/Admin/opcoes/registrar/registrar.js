import{imagens, links} from "./addCaixa.js"

function clear(){

    const ul = document.querySelectorAll("ul");


    if(ul[0].hasChildNodes){
        ul[0].innerHTML = ''
        imagens.lenght = 0
    }if(ul[1].hasChildNodes){
        ul[1].innerHTML = ''
        links.lenght = 0
    }
    document.querySelector("#nomeProduto").value = '';
    document.querySelector("#descricaoProduto").value = '';
    
    
}

export function cadastrarProduto (){
    
    const nome = document.querySelector("#nomeProduto").value;
    const descricao = document.querySelector("#descricaoProduto").value;
    
    if(verificar(nome, descricao)){
        register(nome, descricao)
    }else{
        alert("preencha os campos corretamene")
    }   
}
function verificar(nome, descricao){
    if(nome =!"" && descricao != ""){
        return true
    }else{
        return false
    }
}

async function register(nome, descricao){
    const update = {
        nome: nome,
        descricao: descricao,
        img: imagens,
        links: links
    };
    
    const bearer = window.localStorage.getItem('token');
    const auth = JSON.parse(bearer)

    const options = {
        credentials: "include",
        method: 'POST',
        headers: {
            Accept: 'application/json',
             'Content-Type': 'application/json',
            Authorization: `Bearer ${auth}`,
            
        },
        body:JSON.stringify(update)
        
    };
    fetch("http://localhost:8080/catalogo/registrar", options)
    .then(data =>{
        if (!data.ok){
            throw Error(data.status);
        }
        return data.json();
    }).then(update => {
        console.log(update);

        console.log('REGISTRADO')


    })


}