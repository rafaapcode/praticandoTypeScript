"use strict";
function soma(n1, n2) {
    if (typeof n1 === "string" || typeof n2 === "string") {
        return n1.toLocaleString() + n2.toLocaleString();
    }
    else {
        return n1 + n2;
    }
}
