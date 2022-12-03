// We need to specify a game config to know each value of the options
const gameConfig: Record<string, number | any> = {
  win: 6,
  loss: 0,
  draw: 3,
  X: { value: 1, wins: "C", draws: "A" },
  Y: { value: 2, wins: "A", draws: "B" },
  Z: { value: 3, wins: "B", draws: "C" },
};

export const getTotalScoreForStrategy = (input: string): number => {
  // We need to clean the string and divide it by game
  const games = input.split("\n");

  // We calculate the outcome of each game and get the total sum
  const total = games.reduce((acc, curr) => {
    // We get each of the players options
    const game: string[] = curr.split(" ");
    const moveValue: string[] = gameConfig[game[1]].value;

    // If the user move wins over the other move, we win
    if (gameConfig[game[1]].wins === game[0]) {
      return acc + (moveValue + gameConfig["win"]);
    }

    // If the user plays the same move as the other, we draw
    if (gameConfig[game[1]].draws === game[0]) {
      return acc + (moveValue + gameConfig["draw"]);
    }

    // If none of those conditions meet, we know we lost
    return acc + (moveValue + gameConfig["loss"]);
  }, 0);

  return total;
};

const gameConfigCorrected: Record<string, number | any> = {
  win: 6,
  loss: 0,
  draw: 3,
  A: { value: 1, wins: "C", loses: "B", draws: "A" },
  B: { value: 2, wins: "A", loses: "C", draws: "B" },
  C: { value: 3, wins: "B", loses: "A", draws: "C" },
};

export const getTotalScoreForStrategyCorrected = (input: string): number => {
  // We need to clean the string and divide it by game
  const games = input.split("\n");

  // We calculate the outcome of each game and get the total sum
  const total = games.reduce((acc, curr) => {
    // We get each of the players options
    const game: string[] = curr.split(" ");
    const opponentMove = gameConfigCorrected[game[0]];

    // If our move is to loose, we select the loosing option
    if (game[1] === "X") {
      return (
        acc +
        (gameConfigCorrected["loss"] +
          gameConfigCorrected[opponentMove.wins].value)
      );
    }

    // If our move is to draw, we select the option to draw
    if (game[1] === "Y") {
      return (
        acc +
        (gameConfigCorrected["draw"] +
          gameConfigCorrected[opponentMove.draws].value)
      );
    }

    // If none of those conditions meet, we know we need to win
    return (
      acc +
      (gameConfigCorrected["win"] +
        gameConfigCorrected[opponentMove.loses].value)
    );
  }, 0);

  return total;
};
