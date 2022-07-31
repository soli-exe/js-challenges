const scramble = (str1, str2) => {

    return [...str2].reduce((acc, crr) => {

        if (acc) {
            let str1Length = str1.length;
            str1 = str1.replace(crr, '');
            return str1.length != str1Length;
        }

        return false;

    }, []);

}

console.log(scramble('scriptjava', 'javascript'));
console.log(scramble('scriptingjava', 'javascript'));
console.log(scramble('scriptsjava', 'javascripts'));
console.log(scramble('jscript', 'javascript'));
console.log(scramble('llhowroedl', 'helloworld'));