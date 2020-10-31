// Validar campo Obrigatório de preenchimento e verificar se não foi preenchido com espaços em branco


/**
 * FALTOU USAR {@link validarForm()} NO HTML
 */
function validarForm() {



document.getElementById("busca");
if(busca == null || busca.length == 0 || /^\s+$/.test(busca)){
    alert('ERRO: O Campo busca deve ser preenchido');

    return false;

}


}

// Contabilizar os caracteres digitados e avisar caso passe do limite

/**
 * FALTOU USAR
 */
function mostrarResultado(box,num_max,busca)
{
    var contagem_carac = box.length;
    if (contagem_carac != 0){
    document.getElementById(busca).innerHTML = contagem_carac + " caracteres digitados";
    if (contagem_carac == 1){
    document.getElementById(busca).innerHTML = contagem_carac + " caracter digitado";
    }
    if (contagem_carac >= num_max){
    document.getElementById(busca).innerHTML = "Limite de caracteres excedido!";
    }
    }else{
    document.getElementById(busca).innerHTML = "Ainda não temos nada digitado..";
    }

}

// Mostrar quantos caracteres ainda posso digitar, e quando ultrapassar este valor não deixar.

/**
 * FALTOU USAR
 */
function contarCaracteres(box,valor,busca){
 var conta = valor - box.length;
 document.getElementById(busca).innerHTML = "Você ainda pode digitar " + conta + " caracteres";
 if(box.length >= valor){
 document.getElementById(busca).innerHTML = "Opss.. você não pode mais digitar..";
 document.getElementById("busca").value = document.getElementById("busca").value.substr(0,valor);
 } 
}


// Eliminar caractere # caso seja digitado.

/**
 * FALTOU USAR
 */
function limpaCaractereEspecial(busca)
 {
busca = document.getElementById(busca);
document.getElementById(busca).value = document.getElementById(busca).value.replace("#");



}

 




