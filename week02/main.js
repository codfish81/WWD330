function hashTag(){
for (let i = "#"; i.length < 8; i += "#")
  console.log(i);
}

function fizzBizz(){
for(let i = 0; i <= 100; i++){
    let output = ""
    if(i%3) output += "Fizz"
	if(i%5) output += "Bizz"
	console.log(i || output)
    }
}    

function chess(){
    let board = "";
    for(let i = 0; i < 8; i++){
      for(let j = 0; j < 8; j++){
        if((i+j)%2==0){
          board += " ";
        }else{
          board += "#";
        }
      }
      board += "\n";
    }
    console.log(board);
}   