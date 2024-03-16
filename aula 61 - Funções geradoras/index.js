function* generator1() {
    // Any Code
    yield 'Value 1';
    // Any Code
    yield 'Value 2';
    // Any Code
    yield 'Value 3';
}

function* generator2 () {
    let i = 0;

    while (true) {
        yield i;
        i++;
    }
}

function* generator3 () {
    yield 0;
    yield 1;
    yield 2;
}

function* generator4() {
    yield* generator3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = generator4();

function* generator5() {
    yield function() {
        console.log('I came from the y1');
    };

    // ...

    yield function() {
        console.log('I came from the y2')
    };
  };

 const g5 = generator5();
 const func1 = g5.next().value;
 const func2 = g5.next().value;
 func1();
 func2();