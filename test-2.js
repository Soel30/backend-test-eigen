const sentence = "Saya sangat senang mengerjakan soal algoritma"
const words = sentence.split(" ");
let longestWord = "";

for (let i = 0; i < words.length; i++) {
  if (words[i].length > longestWord.length) {
    longestWord = words[i];
  }
}

console.log(longestWord);
