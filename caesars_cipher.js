function rot13(str) { // LBH QVQ VG!
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return str
        .split("")
        .map(char => {
            var pos = alphabet.indexOf(char);
            return pos >= 0 ? alphabet[(pos + 13) % 26] : char;
        })
        .join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
