function tempos(programas, nome) {
  const conjuntos = [];

  let somatorio = 0;

  programas.forEach((programa, index) => {
    somatorio += programa[0];
    conjuntos[index] = [...programa, somatorio * programa[1]];
  });

  let sum = 0;

  conjuntos.forEach(item => {
    sum += item[2];
  });

  nome && console.log(nome);
  console.log(conjuntos, sum);
}
// 7,5 , 10, 
const programas3 = [[50, 3], [15, 2], [10000, 2], [10, 1], [5000, 1]];
const programas5 = [[10, 1], [15, 2], [50, 3], [5000, 1], [10000, 2]];
const programas7 = [[15, 2], [10, 1], [50, 3], [5000, 1], [10000, 2]];

tempos(programas3, "ordem decrescente de peso");
tempos(programas5, "ordem crescente de tempo");
tempos(programas7, "ordem crescente de tempo/peso");
