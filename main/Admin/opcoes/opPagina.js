import { cadastrarProduto } from "./registrar/registrar.js";
import {add} from "./registrar/addCaixa.js";
import {mostrarProduto} from './excluir/excluir_editar.js';

export function regPage(){
    
    const pagina = `
        <h4>Adicione um novo Produto ao catálogo</h4>

        <input type="text" placeholder="Digite o nome do Produto" class="caixa" id="nomeProduto">
        <input type="text" placeholder="Digite uma descrição para o Produto" class="caixa" id="descricaoProduto">
        <input type="text" placeholder="Adicione as Imagens do Produto" class="caixa" id="imgProduto">
        <button class="btn 1">ADD</button>
        <div class="shows" id="imgs">
            <ul id="ulImg"></ul>
        </div>
        <input type="text" placeholder="Adicione os Links do produto" class="caixa" id="caixalinks">
        <button class="btn 2">ADD</button>
        <div class="shows" id="links">
            <ul id="ulLink"></ul>
        </div>
        <button id="enviar">Enviar</button>

    `
    const form = document.querySelector("form");

    form.innerHTML = pagina;

    const enviar = document.querySelector("#enviar");
    const addC = document.querySelectorAll('.btn');
    
    addC.forEach((btn) => {  
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const num = e.currentTarget.classList[1];
            if(num == 1){
                add(1, e);
            }else{
                add(2, e);
            }
        })
    })

    enviar.addEventListener("click", (e)=>{
        e.preventDefault();
        cadastrarProduto();

    } )
    
    form.style.flexDirection = "column"
    form.style.alignItems = "center"



}
export function delPage(){
        
        const pagina = `
            <h4>Qual produto deseja remover ?</h4>
            <main>
                <table >
                    <tbody>
                    </tbody>
                </table>
            </main>
        `;

        const form = document.querySelector("form");
        form.style.flexDirection = "row";
        form.style.alignItems = "start"

        
        form.innerHTML = pagina;
        
        const tbody = document.querySelector("tbody");

        mostrarProduto(tbody);
    
    }
    