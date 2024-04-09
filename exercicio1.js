//vetor A com seis numeros inteiros
const A=[1,0,5,-2,-5,7];
//soma dos valores das posiçoes A[0], A[1] e a A[5]
const soma= A[0] + A[1]+ A[5];
console.log("soma dos valores das posiçoes A[0], A[1], A[5]:",soma);
//modificando o valor na posiçao 4 (indice 3) para 100
A[3]= 100;
//mostrando cada valor no vetor A, um em cada linha 
console.log("\nValores no vetor A:");
A.forEach(valor => console.log (valor));