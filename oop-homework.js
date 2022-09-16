//Implement everything from the PROTOTYPES homework using ES6 Classes

class Game {
  constructor(name, description, type) {
    this.name = name;
    this.description = description;
    this.type = type;
  }

  getInfo() {
    return `
      Name: ${this.name}
      Description: ${this.description}
      Type: ${this.type}
    `;
  }
}

class BoardGame extends Game {
  constructor(name, description, players) {
    super(name, description, "Board");
    this.players = players;
  }
}

const monopoly = new BoardGame(
  "Monopoly",
  "Multi-player economics-themed board game",
  4
);

console.log(monopoly.getInfo());

class PCGame extends Game {
  constructor(name, description, genre) {
    super(name, description, "PC game");
    this.genre = genre;
  }
}

const warcraft = new PCGame(
  "World of Warcraft",
  "One of the most famous and adored MMOs around",
  "MMO"
);

console.log(warcraft.getInfo());
