var coin = ["head" , "tail"];
var res: string;

function flip() {
    res = coin[Math.floor(Math.random() * coin.length)];
    return res;
}
console.log(flip());