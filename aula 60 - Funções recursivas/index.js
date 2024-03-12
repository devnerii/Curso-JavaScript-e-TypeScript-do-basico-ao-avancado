function recursive(max) {
    console.log(max);
    if (max >= 100) return;
    max++
    recursive(max);
}

recursive(0)