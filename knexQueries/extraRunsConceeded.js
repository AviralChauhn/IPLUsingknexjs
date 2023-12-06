const knex = require("../knexSetup");

function extraRunsConceeded() {
  return knex("deliveries as d")
    .select(
      "d.bowling_team",
      knex.raw("sum(d.extra_runs) as extra_runs_conceeded")
    )
    .join("matches as m", "d.match_id", "m.id")
    .where("m.season", "=", "2016")
    .groupBy("d.bowling_team");
}
module.exports = extraRunsConceeded;
