const count = (str = "") => {
    let res = {};

    [...str].map((i) => {
        res[i] = res[i] ? ++res[i] : 1
    });

    return res;
}

console.log(count(""));
console.log(count("aba"));