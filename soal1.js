const text = "The quick brown fox jumps over the lazy dog";
const print = [];
const a = text.length;

for (let i = 0; i < a; i++) {
    if(text[i].match(/[aeiou]/gi)){
        print[i] = "*";
    } else {
        print[i] = text[i];
    }
} 

console.log(print.join(""));
