export const imagens = []
export const links = []    
    

export function add(num, e) {
    e.preventDefault();
    const img = document.querySelector("#imgProduto");
    const link = document.querySelector("#caixalinks");

    const box = document.querySelectorAll(".shows");
    const boxImgs = box[0];
    const boxLinks = box[1];
    
    if(num == 1){
        if(img.value == ''){
            return alert("Coloque a imagem");
        }
        imagens.push(img.value);
        caixaImagem(boxImgs, img.value);
        
        img.value = '';
    }else{
        if(link.value == ''){
            return alert("Coloque o link")
        }
        links.push(link.value);
        caixaLink(boxLinks, link.value);

        link.value = '';
    }
}
function caixaLink(box, texto){
    const p = document.createElement("p");
    const ul = document.querySelector("#ulLink");
    const li = document.createElement("li");

    p.textContent = texto;
        
    li.appendChild(p)
    ul.appendChild(li);
    box.appendChild(ul);
}

function caixaImagem (box, img){
    const tagImg = document.createElement("img");

    const ul = document.querySelector("#ulImg")
    const li = document.createElement("li");

    tagImg.src = img;
        
    li.appendChild(tagImg);
    ul.appendChild(li);
    box.appendChild(ul);
    
}