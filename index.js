function theBeatlesPlay(musicians,  instruments){
var myEmptyArray = [] 
for (var i = 0; i < musicians.length; i++){
 var string = `${musicians[i]} plays ${instruments[i]}`;
  myEmptyArray.push(string);
}
return myEmptyArray
}

function johnLennonFacts(facts){
  var array = []
  var i = 0;
  while (i < facts.length) {
  array.push(`${facts[i]}!!!`);
  i = i + 1
    }
  return array
}

function iLoveTheBeatles(number){
 var array [] 
 do {
   array.push("I love the Beatles!");
   
}
