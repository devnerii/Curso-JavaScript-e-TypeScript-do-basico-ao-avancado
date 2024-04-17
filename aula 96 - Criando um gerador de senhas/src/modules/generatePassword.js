import toGenerate from "./generators";

const generatedPassword = document.querySelector('.password-generated')
const qtfCharacters = document.querySelector('.qtf-characters');
const chkUpperCase = document.querySelector('.chk-uppercase');
const chkLowerCase = document.querySelector('.chk-lowercase');
const numbers = document.querySelector('.chk-numbers');
const symbols = document.querySelector('.chk-symbols');
const generatePassword = document.querySelector('.generate-password');

export default () => {
    generatePassword = addEventListener('click', () => {
        generatedPassword.innerHTML = generate();
    })
}

function generate() {
    const password = toGenerate(qtfCharacters.value, chkUpperCase.checked, chkLowerCase.checked, numbers.checked, symbols.checked);
    return password || 'Nothing Select';
}