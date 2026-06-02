let idades = [];
let soma = 0;

for (let i = 0; i < 8; i++) {
    let idade = Number(prompt(`Digite a idade da ${i + 1}ª pessoa:`));
    idades.push(idade);
    soma += idade;
}

let media = soma / 8;

console.log("Idades cadastradas:", idades);
console.log("Média das idades:", media);