function scuberGreetingForFeet(ride = 900) {
  let result;
  if (ride <= 400) {
    return "This one is on me!";
  } else if (ride > 400 && ride < 2000) {
    return "That will be twenty bucks.";
  } else if (ride > 2000 && ride < 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (ride > 2500) {
    return "No can do.";
  }
  return result;
}

// ASSIGNMENT 2 (TERNARY )

function ternaryCheckCity(city) {
  // Write your code here!
  //let result;
  // city === "NYC" ? (result = "Ok, sounds good.") : (result = "No go.");
  // OR
  let result =
    city === "NYC" ? (result = "Ok, sounds good.") : (result = "No go.");

  return result;
}

//ASSIGNMENT 3

function switchOnCharmFromTip(tip) {
  let results;
  switch (tip) {
    case "generous":
      results = "Thank you so much.";
      break;
    case "not as generous":
      results = "Thank you.";
      break;
    default:
      results = "Bye.";
  }
  return results;
}
