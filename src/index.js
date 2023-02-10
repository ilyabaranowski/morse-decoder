const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let decodeMsg = '';
    let startIndex = 0;
    let endIndex = 9;
    let decodeIndex = '';
    while (endIndex <= expr.length - 1) {
        let encodedSymb = expr.slice(startIndex, endIndex + 1);
        let i;
        for (i = 0; i < encodedSymb.length; i++) {
            if (encodedSymb[i] !== '*') {
                break;
            }
        }
        if (i === encodedSymb.length) {
            decodeMsg = decodeMsg + ' ';
        } else  {
            for (let j = 0; j < encodedSymb.length; j += 2) {
                if (encodedSymb.slice(j, j + 2) === '10') {
                    decodeIndex = decodeIndex + '.';
                } else if (encodedSymb.slice(j, j + 2) === '11') {
                    decodeIndex = decodeIndex +'-';
                }
            }
            decodeMsg = decodeMsg + MORSE_TABLE[decodeIndex];
        }
        startIndex += 10;
        endIndex += 10;
        decodeIndex = '';
    }
    return decodeMsg;
}

module.exports = {
    decode
}
