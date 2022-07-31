const isDivisible = (n = 0, x = 0, y = 0) => {
    const res = n % x === 0 && n % y === 0;
    return console.log(res);
}

isDivisible(12, 3, 4);
isDivisible(4, 3, 4);