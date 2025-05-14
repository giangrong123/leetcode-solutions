/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
  let output=[];
  for(let i=0;i<command.length;i++){
    if(command[i]==="G"){
      output.push("G")
    }
    else if(command[i]==="(" && command[i+1]===")") {
      output.push("o")
    }
    else if(command[i]==="(" && command[i+1]==="a" && command[i+2]==="l" && command[i+3]===")") {
      output.push("al")
    }
  }
  return output.join("")
};
