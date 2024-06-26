function scuberGreetingForFeet(ride){
  // Write your code here!
  let result;
  if (ride <= 400){
    result='This one is on me!'
  }else if(ride>400 && ride<2000){
     result='That will be twenty bucks.'
  }else if(ride>2000 && ride<2500){
    result='I will gladly take your thirty bucks.'
  }else if(ride>2500) {
    result='No can do.'
  }
  return result
}

function ternaryCheckCity(city){
  // Write your code here!
let resultA
city==='NYC'?(resultA="Ok, sounds good."):(resultA= "No go.")

    return resultA  
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let resultB;

  switch (tip){
    case 'generous':
    resultB="Thank you so much.";
    break;
    case 'not as generous':
    resultB="Thank you.";
    break;
    default:
      resultB="Bye.";
  }
  return resultB
}