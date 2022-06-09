type input = number | string;

function soma(n1: input, n2: input) {
    if (typeof n1 === "string" || typeof n2 === "string") {
        return n1.toLocaleString() + n2.toLocaleString();
    } else {
        return n1 + n2;
    }
}