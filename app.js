"use strict";
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let btn = document.getElementById("btn");
function adicionarNumeros(n1, n2) {
    return n1 + n2;
}
btn.addEventListener("click", () => {
    console.log(adicionarNumeros(Number(input1.value), Number(input2.value)));
});
