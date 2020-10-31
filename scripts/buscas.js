let buscas = document.getElementById("buscas");
let paginacao = document.getElementById("paginacao");
let left = document.getElementById("left");
let right = document.getElementById("right");
let arrayPostagens = [];
let arrayPostagensPaginadas = [];
let paginaAtual = 0;
let corte = 10;
let contador = 1;

let stylePointer = "cursor: pointer;";

for(let i = 0; i < 30; i++){
    let html =
    `<div class="tbody-tr">
    <div class="tbody-name">#hashtagname${i}</div>
    <div class="tbody-dateline">25/02</div>
    <div class="tbody-hourline">09:30</div>
    </div>`;

    arrayPostagens.push(html);
}

for (let i = 0; i < arrayPostagens.length; i = i + corte) {
    arrayPostagensPaginadas.push(arrayPostagens.slice(i, i + corte));
}

function proximaPagina(){
    if(arrayPostagensPaginadas[paginaAtual + 1] === undefined){
        let strArr = arrayPostagensPaginadas[paginaAtual];
        let size = strArr.length - 1;
        strArr[size] = 
        `<div class="tbody-tr borderless">
            <div class="tbody-name">#hashtagname${(size * contador) + (contador - 1)}</div>
            <div class="tbody-dateline">25/02</div>
            <div class="tbody-hourline">09:30</div>
        </div>`
        strArr = strArr.toString().replaceAll(",", "")
        buscas.innerHTML = strArr;
    }else{
        contador++;
        let strArr = arrayPostagensPaginadas[paginaAtual + 1];
        let size = strArr.length - 1;
        strArr[size] = 
        `<div class="tbody-tr borderless">
            <div class="tbody-name">#hashtagname${(size * contador) + (contador - 1)}</div>
            <div class="tbody-dateline">25/02</div>
            <div class="tbody-hourline">09:30</div>
        </div>`
        strArr = strArr.toString().replaceAll(",", "")
        buscas.innerHTML = strArr;
        paginaAtual++;
    }
}

function paginaAnterior(){
    if(arrayPostagensPaginadas[paginaAtual - 1] === undefined){
        let strArr = arrayPostagensPaginadas[paginaAtual];
        let size = strArr.length - 1;
        strArr[size] = 
        `<div class="tbody-tr borderless">
            <div class="tbody-name">#hashtagname${(size * contador) + (contador - 1)}</div>
            <div class="tbody-dateline">25/02</div>
            <div class="tbody-hourline">09:30</div>
        </div>`
        strArr = strArr.toString().replaceAll(",", "");
        buscas.innerHTML = strArr;
    }else{
        contador--;
        let strArr = arrayPostagensPaginadas[paginaAtual - 1];
        let size = strArr.length - 1;
        strArr[size] = 
        `<div class="tbody-tr borderless">
            <div class="tbody-name">#hashtagname${(size * contador) + (contador - 1)}</div>
            <div class="tbody-dateline">25/02</div>
            <div class="tbody-hourline">09:30</div>
        </div>`
        strArr = strArr.toString().replaceAll(",", "");
        buscas.innerHTML = strArr;
        paginaAtual--;
    }
}

let strArr = arrayPostagensPaginadas[0];
let size = strArr.length - 1;
        strArr[size] = 
        `<div class="tbody-tr borderless">
            <div class="tbody-name">#hashtagname${size}</div>
            <div class="tbody-dateline">25/02</div>
            <div class="tbody-hourline">09:30</div>
        </div>`
strArr = strArr.toString().replaceAll(",", "");
buscas.innerHTML += strArr;

paginacao.style = "display:flex; width: 100%; place-content: space-evenly;";

left.style = stylePointer;
right.style = stylePointer;