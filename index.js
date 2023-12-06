const matchesPerYear = require("./knexQueries/matchesPerYear");
const knex = require("./knexSetup");
const matchesWonPerTeamPerYear = require("./knexQueries/matchesWonPerTeamPerYear");
const extraRunsConceeded = require("./knexQueries/extraRunsConceeded");
const topEcoBowlers = require("./knexQueries/top10EcoBowlers");
const tossWinsMatchWins = require("./knexQueries/tossWinsMatchWins");
const highestPOTM = require("./knexQueries/highestPlayerOfTheMatch");
const strikeRate = require("./knexQueries/strikeRate");
const playerDismissed = require("./knexQueries/PlayerDismissedByAnotherPlayer");
const bestSuperOverEco = require("./knexQueries/bowlerWithBestSuperOverEconomy");
matchesPerYear()
  .then((matchesPlayedResults) => {
    console.log("Matches Played");
    console.log(matchesPlayedResults);

    return matchesWonPerTeamPerYear();
  })
  .then((matchesWonResults) => {
    console.log("Matches Won");
    console.log(matchesWonResults);

    return extraRunsConceeded();
  })
  .then((extraRunsResults) => {
    console.log("Extra Runs Conceded Per team");
    console.log(extraRunsResults);

    return topEcoBowlers();
  })
  .then((topEcoBowlersResults) => {
    console.log("Top 10 economical bowlers are");
    console.log(topEcoBowlersResults);

    return tossWinsMatchWins();
  })
  .then((tossWinsMatchWinsResults) => {
    console.log(
      "Number of times a team has won the toss and also won the match"
    );
    console.log(tossWinsMatchWinsResults);

    return highestPOTM();
  })
  .then((highestPOTMResults) => {
    console.log(
      "Highest Number of times player has won Player of the match each season"
    );
    console.log(highestPOTMResults);

    return strikeRate();
  })
  .then((strikeRateResults) => {
    console.log("Strike rate of a player in each season is");
    console.log(strikeRateResults);

    return playerDismissed();
  })
  .then((playerDismissedResults) => {
    console.log(
      "Highest Number of times a player has been dismissed by another player is"
    );
    console.log(playerDismissedResults);

    return bestSuperOverEco();
  })
  .then((bestSuperOverEcoResults) => {
    console.log("Best Super Over Economy");
    console.log(bestSuperOverEcoResults);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    knex.destroy();
  });
