const arrDiff = (a = [], b = []) => {
    const res = a.filter(item => !b.includes(item));
    return console.log(res);
}

arrDiff([1, 2, 8], []);
arrDiff([1, 2, 3], [1, 2]);