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
  while (facts.length > 0) {
    console.log(++facts)
    array.push(`${facts[i]}!!!`);
    }
  return array
  
}

