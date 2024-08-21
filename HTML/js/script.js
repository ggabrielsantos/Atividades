// Função de teste
function subtrair() {
    let vlr1 = parseInt(document.getElementById("nro1").value)
    let vlr2 = parseInt(document.getElementById("nro2").value)

    document.getElementById("camp_resp").value = vlr1 - vlr2;
}

function somar() {
    let vlr1 = parseInt(document.getElementById("nro1").value)
    let vlr2 = parseInt(document.getElementById("nro2").value)

    document.getElementById("camp_resp").value = vlr1 + vlr2;
}

function calcular(p1,p2,p3) {
   return eval(p1 + p2 + p3);
}
