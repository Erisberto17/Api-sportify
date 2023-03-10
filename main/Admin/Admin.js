import {carregando} from '../Reutilizar/carregando.js'
import { regPage, editPage, delPage } from "./opcoes/opPagina.js";

const click = document.querySelectorAll('.op');
click.forEach((opc) => {
    opc.addEventListener("click", () => {
        opcao(opc.innerHTML)
    })
})
function opcao(opc){
    if(opc == "registrar"){
        carregando();
        setTimeout(() => regPage(),2500 )
    }else if(opc == 'editar'){
        carregando();
        setTimeout(() => editPage(),2500 )
    }else if(opc == 'excluir'){
        carregando();
        setTimeout(() => delPage(),2500 )
    }
}

