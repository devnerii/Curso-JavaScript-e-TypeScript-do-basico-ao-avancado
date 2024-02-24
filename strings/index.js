// Documentação Completa sobre Strings em JavaScript

// Introdução:
// Strings são uma parte fundamental da linguagem JavaScript e são usadas para representar texto. Elas podem conter letras, números, símbolos e espaços.

// I. Tipos de Strings em JavaScript:
// Existem dois tipos de strings em JavaScript: strings primitivas e objetos String.

// 1. Strings Primitivas:
const stringPrimitiva = "Isso é uma string primitiva";

// 2. Objetos String:
const stringObjeto = new String("Isso é um objeto String");

// JavaScript converte automaticamente strings primitivas em objetos String quando necessário.

// II. Acessando Caracteres em uma String:
// Cada caractere em uma string possui um índice, começando em 0.

const umaString = "Exemplo";
console.log(umaString[0]); // Retorna "E"
console.log(umaString.charAt(1)); // Retorna "x"

// III. Métodos de Manipulação de Strings:

// 1. Concatenação:
const texto1 = "Olá";
const texto2 = "Mundo";
const resultadoConcatenado = texto1 + ", " + texto2; // "Olá, Mundo"

// 2. length: Retorna o tamanho da string.
const tamanhoString = umaString.length; // Retorna 7

// 3. indexOf e lastIndexOf: Encontrar a posição de uma substring.
const posicao1 = umaString.indexOf("emp"); // Retorna 1
const posicao2 = umaString.lastIndexOf("e"); // Retorna 5

// 4. Substring: Extrai uma parte da string com base em índices.
const substring = umaString.substring(0, 4); // Retorna "Exem"

// 5. slice: Similar a substring, mas permite índices negativos.
const sliced = umaString.slice(-4); // Retorna "emplo"

// 6. replace: Substitui substrings por outras substrings.
const substituida = umaString.replace("emplo", "emplificado"); // Retorna "Exemplificado"

// IV. Expressões Regulares:
// Expressões regulares são sequências de caracteres que definem padrões de pesquisa flexíveis.

// 1. match: Encontra correspondências em uma string com base em uma expressão regular.
const texto = "Exemplo de texto com números: 123 e 456.";
const padrao = /[0-9]+/g;
const correspondencias = texto.match(padrao); // Retorna ["123", "456"]

// 2. search: Encontra a posição da primeira correspondência em uma string.
const posicao = texto.search(padrao); // Retorna 24

// 3. replace com expressão regular: Substitui todas as correspondências em uma string.
const substituidaRegex = texto.replace(padrao, "X"); // Retorna "Exemplo de texto com números: X e X."

// V. Distinção entre Strings Primitivas e Objetos String:
// JavaScript diferencia entre strings primitivas e objetos String. A maioria dos métodos de string pode ser usada em ambos os tipos.

// VI. Métodos Genéricos de Strings:
// Alguns métodos úteis que funcionam tanto em strings primitivas quanto em objetos String.

// 1. toUpperCase e toLowerCase: Converte para maiúsculas e minúsculas.
const maiuscula = umaString.toUpperCase(); // Retorna "EXEMPLO"
const minuscula = umaString.toLowerCase(); // Retorna "exemplo"

// 2. trim: Remove espaços em branco no início e no final.
const comEspacos = "   Espaços   ";
const semEspacos = comEspacos.trim(); // Retorna "Espaços"

// VII. Interpolação de Strings (Template Literals):
// Template literals permitem criar strings interpoladas.

const nome = "Alice";
const idade = 30;
const mensagem = `Meu nome é ${nome} e eu tenho ${idade} anos.`;

// VIII. Conclusão:
// Esta documentação abrange os conceitos básicos de strings em JavaScript, incluindo tipos, manipulação, expressões regulares e métodos úteis. Strings desempenham um papel fundamental na programação JavaScript e são amplamente utilizadas na web e no processamento de texto.

// Para informações mais detalhadas e exemplos específicos, consulte a documentação oficial do JavaScript.
