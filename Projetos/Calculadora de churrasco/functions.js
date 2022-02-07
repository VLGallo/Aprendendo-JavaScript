

function calcular() {
    var check = document.querySelectorAll(".opcaoCarnes input");
    var convidados = document.querySelector(".convidados");
    var resultado = document.querySelector(".listaCompras");

    var resultado = document.querySelector(".resultado");
    resultado.innerHTML = "Você precisa comprar:"


    for (var i = 0; i < 7; i++) {
        if (check[i].value == "carneBovina") {
            var quantidade = parseInt(convidados.value) * 0.5;
            if (check[i].checked == true) {
                resultado.innerHTML = resultado.innerHTML + "<li>" + (quantidade).toFixed(3) + " g de carne bovina; </li>";
            }
        } else if (check[i].value == "linguica") {
            var quantidade = parseInt(convidados.value) * 0.2;
            if (check[i].checked == true) {
                resultado.innerHTML = resultado.innerHTML + "<li>" + (quantidade).toFixed(3) + " g de linguiça; </li>";
            }
        } else if (check[i].value == "coracao") {
            var quantidade = parseInt(convidados.value) * 0.1;
            if (check[i].checked == true) {
                resultado.innerHTML = resultado.innerHTML + "<li>" + (quantidade).toFixed(3) + " g de coração; </li>";
            }
        } else if (check[i].value == "panceta") {
            var quantidade = parseInt(convidados.value) * 0.3;
            if (check[i].checked == true) {
                resultado.innerHTML = resultado.innerHTML + "<li>" + (quantidade).toFixed(3) + " g de panceta; </li>";
            }
        } else if (check[i].value == "frango") {
            var quantidade = parseInt(convidados.value) * 0.2;
            if (check[i].checked == true) {
                resultado.innerHTML = resultado.innerHTML + "<li>" + (quantidade).toFixed(3) + " g de frango; </li>";
            }
        } else if (check[i].value == "paoDeAlho") {
            var quantidade = parseInt(convidados.value) * 0.1;
            if (check[i].checked == true) {
                resultado.innerHTML = resultado.innerHTML + "<li>" + (quantidade).toFixed(3) + " g de pão de alho; </li>";
            }
        } else if (check[i].value == "queijoCoalho") {
            var quantidade = parseInt(convidados.value) * 0.1;
            if (check[i].checked == true) {
                resultado.innerHTML = resultado.innerHTML + "<li>" + (quantidade).toFixed(3) + " g de queijo coalho. </li>";
            }
        }
    }
}
