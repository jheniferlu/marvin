function maiusculo(palavra) {
    const palavras = palavra;
    return palavra.substr(0,3).toUpperCase().concat(palavra.substring(3))
}
