enum CardinalDirections {
    North = 5,
    East,
    South,
    West
  };
  // logs 5
  console.log(CardinalDirections.North);  
   
  // logs 8
  console.log(CardinalDirections.West);

  //if we want property of Enums by Object then we can make object and then Object.freeze() needs to be used.
  