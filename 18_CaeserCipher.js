// Caesars Cipher

// One of the simplest and most widely known ciphers is a 
// Caesar cipher, also known as a shift cipher. In a shift cipher 
// the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the 
// letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns 
// a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic 
// character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
    var refrence = 'NOPQRSTUVWXYZABCDEFGHIJKLM';
    var res = "";
    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        // console.log(element) ;
        if (str.charCodeAt(index) >= 65 && str.charCodeAt(index) <= 90) {
            var i = str.charCodeAt(index) - 65;
            // console.log(i) ;
            res = res.concat(refrence[i]);
        }
        else {
            res = res.concat(element);
        }
    }
    return res;
};
console.log(rot13('SERR CVMMN!'));
console.log(rot13('SERR YBIR?'));
console.log(rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.'));

// rot13("SERR CVMMN!") should decode to FREE PIZZA!

// rot13("SERR YBIR?") should decode to FREE LOVE?

// rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should
// decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.