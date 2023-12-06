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
  .then((results) => {
    console.log("Matches Played");
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    knex.destroy();
  });
matchesWonPerTeamPerYear()
  .then((results) => {
    console.log("Matches Won");
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    knex.destroy();
  });
extraRunsConceeded()
  .then((results) => {
    console.log("Extra Runs Conceeded Per team");
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    knex.destroy();
  });
topEcoBowlers()
  .then((results) => {
    console.log("top 10 economical bowlers are");
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    knex.destroy();
  });
tossWinsMatchWins()
  .then((results) => {
    console.log(
      "Number of times a team has won the toss and also won the match"
    );
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    knex.destroy();
  });
highestPOTM()
  .then((results) => {
    console.log(
      "Highest Number of times player has won Player of the match each season"
    );
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    knex.destroy();
  });
strikeRate()
  .then((results) => {
    console.log("strike rate of a player in each season is");
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    knex.destroy();
  });
playerDismissed()
  .then((results) => {
    console.log(
      "Highest Number of time a player has been dismissed by other player is"
    );
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    knex.destroy();
  });
bestSuperOverEco()
  .then((results) => {
    console.log(
      "Highest Number of time a player has been dismissed by other player is"
    );
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    knex.destroy();
  });
