//By Kylr and Sori.
const wordSearch = (letters, word) => {



const horizontalJoin = letters.map(ls => ls.join(''))

for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
}

const verticalToHorizontal = [];

for (let j = 0; j < letters[0].length; j++) {
    let val = [];
    for (let a = 0; a < letters.length; a++) {
        val.push(letters[a][j]);
    }
    verticalToHorizontal.push(val);
}

const horizontalJoinTwo = verticalToHorizontal.map(ls => ls.join(''))
for (let l of horizontalJoinTwo) {
    if (l.includes(word)) return true;
}






const reverseEach = letters.map(r => r.reverse());
const reverseJoin = reverseEach.map(ls => ls.join(''))

for (let l of reverseJoin) {

    if (l.includes(word)) return true;
}

const reverseEach2 = verticalToHorizontal.map(r => r.reverse());
const reverseJoin2 = reverseEach2.map(ls => ls.join(''))


for (let l of reverseJoin2) {

    if (l.includes(word)) return true;
}




return false;
}




module.exports = wordSearch