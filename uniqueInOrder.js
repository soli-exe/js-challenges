const uniqueInOrder = iter => {
    const res = [... new Set(iter)];
    return console.log(res);
}

uniqueInOrder([1, 2, 2, 3]);
uniqueInOrder("ABBCcAD");