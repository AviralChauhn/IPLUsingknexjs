const knex = require("../knexSetup");

function matchesWonPerTeamPerYear() {
  return knex("matches")
    .select("season", "winner as team")
    .count("* as matches_won")
    .groupBy("season", "winner");
}
module.exports = matchesWonPerTeamPerYear;
