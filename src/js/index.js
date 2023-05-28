function pulaLinha() {
    document.write("<br> <br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

function sorteia(n) {
    return Math.round(Math.random() * n);
}

var sorteiaAteEsseNumero = parseInt(prompt("Quer sortear até qual número?"));
console.log(sorteiaAteEsseNumero);

var numeroSorteado = sorteia(sorteiaAteEsseNumero);
console.log(numeroSorteado);

var chute = parseInt(prompt("Chute um número de 0 até " + sorteiaAteEsseNumero));

while (chute != numeroSorteado) {

    if (chute > numeroSorteado) {
        chute = parseInt(prompt("Chutou alto. Tente um número menor: "));

    } else {
        chute = parseInt(prompt("Chutou baixo. Tente um número maior: "));
    }
}

mostra("Parabéns, você acertou!!! O número sorteado era " + numeroSorteado + " :)");
