var cardGame = function (playerOneCards, playerTwoCards) {
  var jug1atk = 0;
  var jug2atk = 0;
  var jug1def = 0;
  var jug2def = 0;
  var vida1 = 100;
  var vida2 = 100;

  //turno 1
  while (playerOneCards.length !== 0) {
    jug1atk = playerOneCards.pop();
    jug1def = jug1atk;
    jug2atk = playerTwoCards.pop();
    jug2def = jug2atk;

    if (jug1atk.attack > jug2def.defense) {
      vida2 = vida2 - (jug1atk.attack - jug2def.defense);
    }
    if (jug2atk.attack > jug1def.defense) {
      vida1 = vida1 - (jug2atk.attack - jug1def.defense);
    }
    if (vida1 <= 0 || vida2 <= 0) {
      if (vida1 > vida2) return "PLAYER ONE";
      if (vida2 > vida1) return "PLAYER TWO";
      if (vida1 === vida2) return "TIE";
    }
  }
  if (playerOneCards.length === 0) {
    if (vida1 > vida2) return "PLAYER ONE";
    if (vida2 > vida1) return "PLAYER TWO";
    if (vida1 === vida2) return "TIE";
  }
};

var playerOneCards = [
  { attack: 1, defense: 2 },

  { attack: 3, defense: 4 },

  { attack: 5, defense: 6 }
];

var playerTwoCards = [
  { attack: 1, defense: 2 },

  { attack: 3, defense: 4 },

  { attack: 5, defense: 6 }
];

cardGame(playerOneCards, playerTwoCards);
