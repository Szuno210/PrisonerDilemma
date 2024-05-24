let algorithm = {};

algorithm.ALLC = (PlayerHistory, OponentHistory) => {
  return "M";
};

algorithm.ALLD = (PlayerHistory, OponentHistory) => {
  return "D";
};

algorithm.ALT = (PlayerHistory, OponentHistory) => {
    return PlayerHistory.length % 2 === 0 ? "M" : "D";
}

algorithm.RAND = (PlayerHistory, OponentHistory) => {
  return Math.random() > 0.5 ? "M" : "D";
};

algorithm.TFT = (PlayerHistory, OponentHistory) => {
    
    if (PlayerHistory.length === 0) {
        return "M";
    }
    return (
      OponentHistory.length === 0 || OponentHistory[OponentHistory.length - 1]
    );

}

algorithm.APP = (PlayerHistory, OponentHistory) => {
  if (PlayerHistory.length === 0) {
    return "M"; 
  }

  const lastPlayerMove = PlayerHistory[PlayerHistory.length - 1];
  const lastOponentMove = OponentHistory[OponentHistory.length - 1];

  if (lastOponentMove === "M") {
    return lastPlayerMove; 
  } else {
    return lastPlayerMove === "M" ? "D" : "M";
  }
};

algorithm.TFTT = (PlayerHistory, OponentHistory) => {
  if (OponentHistory.length < 2) {
    return "M"; 
  }
  const lastTwoMoves = OponentHistory.slice(-2);
  if (lastTwoMoves[0] === "D" && lastTwoMoves[1] === "D") {
    return "D"; 
  }
  return "M"; 
};

algorithm.PAV = (PlayerHistory, OponentHistory) => {
  if (PlayerHistory.length === 0) {
    return "M";
  }

  const lastPlayerMove = PlayerHistory[PlayerHistory.length - 1];
  const lastOponentMove = OponentHistory[OponentHistory.length - 1];


  const positiveOutcome =
    (lastPlayerMove === "M" && lastOponentMove === "M") ||
    (lastPlayerMove === "D" && lastOponentMove === "D");

  if (positiveOutcome) {
    return lastPlayerMove; 
  } else {
    return lastPlayerMove === "M" ? "D" : "M"; 
  }
};


module.exports = algorithm;