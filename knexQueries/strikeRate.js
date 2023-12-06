const knex = require("../knexSetup");

function strikeRate() {
  return knex("deliveries as d")
    .select(
      "m.season",
      "d.batsman",
      knex.raw(
        "ROUND(SUM(d.batsman_runs)* 100.0 / COUNT(d.ball),2) AS strike_rate"
      )
    )
    .join(knex.raw("matches as m ON d.match_id=m.id"))
    .where("d.batsman", "=", "V Kohli")
    .groupBy("m.season")
    .groupBy("d.batsman")
    .orderBy("m.season");
}
module.exports = strikeRate;
