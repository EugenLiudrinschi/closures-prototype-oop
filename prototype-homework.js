//Implement a prototypal inheritance using topic of your choose

const Game = function (name, description, type) {
  this.name = name;
  this.description = description;
  this.type = type;
};

Game.prototype.getInfo = function () {
  return `
    Name: ${this.name}
    Description: ${this.description}
    Type: ${this.type}
  `;
};

const football = new Game(
  "Football",
  "A team sport played by a team of 11 players against another team of 11 players on a field",
  "Sport"
);

console.log(football.getInfo());

const BoardGame = function (name, description, players) {
  Game.call(this, name, description, "Board");
  this.players = players;
};

Object.setPrototypeOf(BoardGame.prototype, Game.prototype);

const monopoly = new BoardGame(
  "Monopoly",
  "Multi-player economics-themed board game",
  4
);

console.log(monopoly.getInfo());

const PCGame = function (name, description, genre) {
  Game.call(this, name, description, "PC game");
  this.genre = genre;
};

Object.setPrototypeOf(PCGame.prototype, Game.prototype);

const warcraft = new PCGame(
  "World of Warcraft",
  "One of the most famous and adored MMOs around",
  "MMO"
);

console.log(warcraft.getInfo());
