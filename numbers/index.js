// ----------------------------------------------------------------------
// Documentação Completa sobre Números e o Objeto Number em JavaScript
// ----------------------------------------------------------------------

// Introdução:
// JavaScript é uma linguagem de programação de tipagem dinâmica que suporta vários tipos de dados numéricos.
// O objeto Number é usado para realizar operações matemáticas e manipular números.

// I. Tipos de Números em JavaScript:
// JavaScript oferece diversos tipos de números:

// 1. Números Inteiros:
const numeroInteiro = 42;

// 2. Números de Ponto Flutuante:
const numeroDecimal = 3.14;

// 3. Not-a-Number (NaN):
const naoENumero = NaN;

// 4. Infinito (Infinity e -Infinity):
const infinitoPositivo = Infinity;
const infinitoNegativo = -Infinity;

// II. Propriedades do Objeto Number:
// O objeto Number possui algumas propriedades úteis.

// 1. Number.MAX_VALUE: Maior número representável em JavaScript.
const maiorNumero = Number.MAX_VALUE;

// 2. Number.MIN_VALUE: Menor número positivo representável.
const menorNumero = Number.MIN_VALUE;

// 3. Number.POSITIVE_INFINITY: Representa o infinito positivo.
const infinitoPos = Number.POSITIVE_INFINITY;

// 4. Number.NEGATIVE_INFINITY: Representa o infinito negativo.
const infinitoNeg = Number.NEGATIVE_INFINITY;

// III. Funções do Objeto Number:

// 1. Number.isNaN(): Verifica se um valor é NaN.
const ehNaN = Number.isNaN(naoENumero); // Retorna true

// 2. Number.isFinite(): Verifica se um valor é um número finito.
const ehFinito = Number.isFinite(numeroDecimal); // Retorna true

// 3. Number.parseInt(): Converte uma string em um número inteiro.
const strNumero = "42";
const numeroConvertido = Number.parseInt(strNumero);

// 4. Number.parseFloat(): Converte uma string em um número de ponto flutuante.
const strNumeroDecimal = "3.14";
const numeroConvertidoDecimal = Number.parseFloat(strNumeroDecimal);

// 5. Number.toFixed(): Formata um número com um número específico de casas decimais.
const numeroFormatado = numeroDecimal.toFixed(2); // "3.14"

// 6. Number.toPrecision(): Formata um número com um número específico de dígitos significativos.
const numeroPrecisao = numeroDecimal.toPrecision(3); // "3.14"

// 7. Number.toString(): Converte um número em uma string com uma base específica (2 a 36).
const numeroBase2 = numeroInteiro.toString(2); // "101010"

// 8. Number.toExponential(): Formata um número em notação exponencial.
const numeroExponencial = numeroDecimal.toExponential(); // "3.14e+0"

// 9. Number.isInteger(): Verifica se um número é um número inteiro.
const ehInteiro = Number.isInteger(numeroInteiro); // Retorna true

// 10. Number.isSafeInteger(): Verifica se um número é um inteiro seguro (dentro dos limites seguros).
const ehInteiroSeguro = Number.isSafeInteger(42); // Retorna true

// 11. Number.EPSILON: A diferença entre 1 e o menor número maior que 1 representável.
const epsilon = Number.EPSILON;

// 12. Number.MAX_SAFE_INTEGER: O maior número inteiro seguro representável.
const maxInteiroSeguro = Number.MAX_SAFE_INTEGER;

// 13. Number.MIN_SAFE_INTEGER: O menor número inteiro seguro representável.
const minInteiroSeguro = Number.MIN_SAFE_INTEGER;

// IV. Operações Matemáticas Básicas:
// JavaScript suporta operações matemáticas padrão, como adição, subtração, multiplicação e divisão.

const adicao = 10 + 5; // 15
const subtracao = 10 - 5; // 5
const multiplicacao = 10 * 5; // 50
const divisao = 10 / 5; // 2

// V. Função Math.floor():
// Math.floor(): Arredonda um número para o maior número inteiro menor ou igual a ele.

const numeroDecimal3 = 3.99;
const numeroArredondado = Math.floor(numeroDecimal3); // Retorna 3

// O Math.floor() arredondou 3.99 para o maior número inteiro menor ou igual, que é 3.

// Outro exemplo:

const numeroDecimal2 = 7.2;
const numeroArredondado2 = Math.floor(numeroDecimal2); // Retorna 7

// O Math.floor() arredondou 7.2 para o maior número inteiro menor ou igual, que é 7.

// VI. Conclusão:
// Esta documentação abrange os conceitos básicos de números em JavaScript, bem como o uso do objeto Number e suas funções relacionadas. Além disso, inclui a função Math.floor() para arredondar números para baixo.
// Lembre-se de que números são fundamentais em JavaScript e são usados em uma variedade de situações, desde cálculos matemáticos simples até manipulação de dados complexa.

// Para obter informações detalhadas, consulte a documentação oficial do JavaScript.
