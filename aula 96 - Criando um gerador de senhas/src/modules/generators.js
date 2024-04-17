const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const generateUpperCase = () => String.fromCharCode(rand(65, 91));
const generateLowerCase = () => String.fromCharCode(rand(97, 123));

const generateNumbers = () => String.fromCharCode(rand(48, 58));
const generateSymbols = () => String.fromCharCode(rand(33, 48));

export default function generatePassword (qtf, uppercase, lowercase, numbers, symbols) {
    const passwordArray = [];
    qtf = Number(qtf);
    for(let i = 0; i < qtf; i++){
        uppercase && passwordArray.push(generateUpperCase());
        lowercase && passwordArray.push(generateLowerCase());
        numbers && passwordArray.push(generateNumbers());
        symbols && passwordArray.push(generateSymbols());
    }
    return passwordArray.join('').slice(0, qtf);
}