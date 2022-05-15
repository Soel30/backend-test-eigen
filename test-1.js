function reverseWrds(str) {
  var arr = str.split(" ");
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].match(/\d/)) {
      newArray.push(arr[i]);
    } else {
      newArray.push(arr[i].split("").reverse().join(""));
    }
  }
  return newArray.join(" ");
}

console.log(reverseWrds("NEGIE1"));
