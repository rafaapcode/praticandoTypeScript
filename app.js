var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var btn = document.getElementById("btn");
function adicionarNumeros(n1, n2) {
    return n1 + n2;
}
btn.addEventListener("click", function () {
    console.log(adicionarNumeros(Number(input1.value), Number(input2.value)));
});
