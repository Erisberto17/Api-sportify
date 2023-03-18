import {carregando} from '../Reutilizar/carregando.js'
import { regPage, delPage } from "./opcoes/opPagina.js";

const click = document.querySelectorAll('#opcoes .op');
click.forEach((opc) => {
    opc.addEventListener("click", () => {
        opcao(opc.innerText)
    })
})
function opcao(opc){
    if(opc == "Registrar"){
        carregando();
        setTimeout(() => regPage(),2500 )
    }else if(opc == 'Ações'){
        carregando();
        setTimeout(() => delPage(),2500 )
    }
}

