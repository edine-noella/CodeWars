function arrayPacking (a) {
    let binary = a.map((el) => {
        return el.toString(2).padStart(8, '0');
    });
    binary = binary.reverse().join('');
    return parseInt(binary, 2);
}