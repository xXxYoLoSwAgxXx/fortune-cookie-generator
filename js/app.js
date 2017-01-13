var k = -1;
var generatedFortunes = 0;

function generateFortuneCookie() {
   
   if (k < 0) {
    Array = shuffle(Array);
  }
  k++;
  generatedFortunes++;
  if (k > list.length - 1) {
    k = 0;
    Array = shuffle(Array);
  }
// selecting fortune-cookie-text element 
document.getElementById("fortune-cookie-text").innerHTML = list[Array[k]];

var node = document.createElement("LI");
var divNode = document.createElement("DIV");
var textNode = document.createTextNode("list");
var ulist = document.getElementById("fortune-cookie-text");

if (k === 0) {
  divNode.appendChild(divNode);
  document.getElementById("fortune-cookie-text").appendChild(node);
   } else {
      divNode.appendChild(textNode);
      node.appendChild(divNode);
      ulist.insertBefore(node, ulist.childNode[0]);
    } 
}

var list = ["hi", "bye", "you will not see a previous fortune because i dont know how to make the previous fortune come up in the red box on my web site and this is a run on sentance because i dont feel like puting periods anywhere except here. my journal also better not be a missing assignment because i feel like its gonna be because my css does not match the font color so i will stop working on this and go to my journal css and fix that so i dont freak out ", "die now", "kill yourself", "you will live a long and happy life", "you will click the button for another fortune", "you will not click anymore fortunes"];

for (var Array = [], i = 0; i < list.length; i++) {
   Array[i] = i;
 }

function shuffle(Array) {
  var tmp, current, top = Array.length;
  if (top) {
    while (--top){
      current = Math.floor(Math.random() * (top + 1));
      tmp = Array[current];
      Array[current] = Array[top];
      Array[top] = tmp;
    }
    return Array;
  }
}