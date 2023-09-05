const valores = [1, 3, 4, 5, 234];

console.log(valores[3], valores[4]);

console.log(valores.length);

valores.push({id: 3}, "Teste", 123, 222, " ");

console.log(valores);

valores.pop();

console.log(valores);

delete valores[1];

console.log(valores);