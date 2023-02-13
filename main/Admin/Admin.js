function required(){
    const nome = document.querySelector("#nProduto")
    const descricao = document.querySelector("#dProduto")

    const button = document.querySelector("button")
    
    button.addEventListener("click", () => {
        
        console.log(nome, descricao);
})
}

required();