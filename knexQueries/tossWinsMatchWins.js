const knex = require("../knexSetup");

function tossWinsMatchWins() {
  const query5 = knex("matches")
    .select("winner AS team")
    .whereRaw("toss_winner=winner");
  return knex
    .select("team", knex.raw("COUNT(*) AS toss_and_match_wins"))
    .from(query5.as("toss_and_match"))
    .groupBy("team");
}
module.exports = tossWinsMatchWins;
