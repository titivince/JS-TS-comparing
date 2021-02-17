var char = "abcdefghijklmNOPQRSTUVWXYZ0123456789-_ABCEDFGHIJKLMnopqrstuvwxyz";
var password = '';
var nbr;
function generateRandomPassword(nbr) {
    for (var i = 0; i < nbr; i++) {
        password += char[Math.floor(Math.random() * char.length)];
    }
    return password;
}
console.log(generateRandomPassword(12));
