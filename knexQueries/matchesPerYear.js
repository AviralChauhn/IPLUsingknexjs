const knex = require("../knexSetup");

function matchesPerYear() {
  return knex("matches")
    .select("season")
    .count("* as matches_played")
    .groupBy("season");
}
module.exports = matchesPerYear;
