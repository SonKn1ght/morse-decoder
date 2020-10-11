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

let morseTableOnCoded = Object.entries(MORSE_TABLE).map((item) => {
    item[0] = item[0].replace(/\./g, '10').replace(/-/g, '11');
    while (item[0].length < 10) {
        item[0] = `0${item[0]}`;
    }
    return item;
});
let morseTableForDecoding = Object.fromEntries(morseTableOnCoded);
morseTableForDecoding['**********'] = ' ';


function decode(expr) {
    let exprArray = expr.match(/.{1,10}/g);
    return exprArray.reduce((acc, current) => {
        return acc + morseTableForDecoding[current]
    }, ``);
}

module.exports = {
    decode
}