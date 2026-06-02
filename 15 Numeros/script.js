let numeros = [];

for (let i = 0; i < 15; i++) {
     let numero = Number(prompt(`Digite o numero da ${i + 1}ª numero:`));
    numeros.push(numero);
}
console.log("numeros cadastradas:", numeros);

for (let i = 0; i < 15; i++) {
    if (numeros[i] % 10 === 0) {
    console.log("Múltiplo de 10 encontrado na posição:", i);
}
   
}