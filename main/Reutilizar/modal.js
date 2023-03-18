import {validarExcluir, validarEditar} from "../Admin/opcoes/excluir/excluir_editar.js"

export async function modal(caixaModal){

    const form = document.querySelector("form");
    const p = document.createElement("p");

    p.classList.add = "divP"
    p.innerHTML = caixaModal
    form.innerHTML += p.innerHTML

}
export function deletar(element){
    const escolha = document.querySelectorAll("#confirmar p");
    validarExcluir(escolha, element)

}
export function edit(element){
    const escolha = document.querySelectorAll("#confirmar p");
    validarEditar(escolha, element)
}


