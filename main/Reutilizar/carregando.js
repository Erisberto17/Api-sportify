const form = document.querySelector("form");
form.innerHTML = '';


export function carregando ( ) {
    const pagina = `
    <div id="carregando"> 
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    </div>
    `;

form.innerHTML = pagina;
}