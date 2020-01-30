function minusculo(palavra) {
    const palavras = palavra;
    return palavra.substr(0,1).concat(palavra.substring(1).toUpperCase())
}
