
const MORSE_TABLE = new Map([
    ['**********', ' '],
    ['.-', 'a'],
    ['-...', 'b'],
    ['.--', 'w'],
    ['--.', 'g'],
    ['-..', 'd'],
    ['.', 'e'],
    ['...-', 'v'],
    ['--..', 'z'],
    ['..', 'i'],
    ['.---', 'j'],
    ['-.-', 'k'],
    ['.-..', 'l'],
    ['--', 'm'],
    ['-.', 'n'],
    ['---', 'o'],
    ['.--.', 'p'],
    ['.-.', 'r'],
    ['...', 's'],
    ['-', 't'],
    ['..-', 'u'],
    ['..-.', 'f'],
    ['....', 'h'],
    ['-.-.', 'c'],
    ['--.-', 'q'],
    ['-.--', 'y'],
    ['-..-', 'x'],
    ['.----', '1'],
    ['..---', '2'],
    ['...--', '3'],
    ['....-', '4'],
    ['.....', '5'],
    ['-....', '6'],
    ['--...', '7'],
    ['---..', '8'],
    ['----.', '9'],
    ['-----', '0'],
]);


function decode(expr) {
    // write your solution here
    let decodedStr = '';
    let NumberOfCharCode = expr.length / 10;

    for (let i = 0; i < NumberOfCharCode; i++) {
        decodedStr += MORSE_TABLE.get(charCodeToMorze(expr.slice(i * 10, i * 10 + 10)));
    }

    function charCodeToMorze(str) {
        let result = '';
        if (str === '**********') return '**********';
        for (let p = 0; p < 5; p++) {
            switch (str.slice(p * 2, p * 2 + 2)) {
                case '10':
                    result += '.';
                    break;
                case '11':
                    result += '-';
                    break;
            }
        }
        return result;
    }

    return decodedStr;
}

module.exports = {
    decode
}