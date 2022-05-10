const areaTexto = document.querySelector(".areadetexto1")
const mensaje = document.querySelector(".areadetexto2")

function btnencriptar(){
    const textoEncriptado = encriptar(areaTexto.value);
    mensaje.value = textoEncriptado;
}

function encriptar(TextoParaEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    TextoParaEncriptar=TextoParaEncriptar.toLowerCase();
    for (let i=0; i< matrizCodigo.length; i++){
        if(TextoParaEncriptar.includes(matrizCodigo[i][0])){
            TextoParaEncriptar=TextoParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return TextoParaEncriptar;
}
function btndesencriptar(){
    const textoDesencriptado = desencriptar(areaTexto.value);
    mensaje.value = textoDesencriptado;

}

function desencriptar(TextoParaDesencriptar){
    let matrizCodigo =[["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    TextoParaDesencriptar=TextoParaDesencriptar.toLowerCase();
    for (let i=0; i<matrizCodigo.length; i++){
        if(TextoParaDesencriptar.includes(matrizCodigo[i][0])){
            TextoParaDesencriptar=TextoParaDesencriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return TextoParaDesencriptar;
}


function btncopiar(){
    var content = document.getElementById('textoCopiar');
    content.select();
    document.execCommand('copy');

    alert("Copiado!");
}       
   
{}
