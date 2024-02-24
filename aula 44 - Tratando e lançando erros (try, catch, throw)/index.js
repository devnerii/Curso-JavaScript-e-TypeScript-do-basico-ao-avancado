function soma(x, y) {
    if (typeof x != 'number' || typeof y != 'number') {
        throw new error('O x ou o y, precisam ser números.')
    }
    return x + y;
}

try {
    console.log(soma(14, 'quatro'))
} catch (error) {
    console.log('O x ou o y, precisam ser números.')
}



/* try {
    console.log(sadasdsad)
} catch (error) {
    console.log('Where are you doing?.')
} */
