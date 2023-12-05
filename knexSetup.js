const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    port: 3306,
    user: "root",
    database: "IPL",
  },
});
knex("matches")
  .select("season")
  .count("* as matches_played")
  .groupBy("season")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    knex.destroy();
  });

knex("deliveries as d")
  .select(
    "d.bowling_team",
    knex.raw("sum(d.extra_runs) as extra_runs_conceeded")
  )
  .join("matches as m", "d.match_id", "m.id")
  .where("m.season", "=", "2016")
  .groupBy("d.bowling_team")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    knex.destroy();
  });

knex("matches")
  .select("season", "winner as team")
  .count("* as matches_won")
  .groupBy("season", "winner")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    knex.destroy();
  });

knex("deliveries")
  .select(
    "bowler",
    knex.raw("ROUND(SUM(total_runs)/(COUNT(*)/6),2) AS economy")
  )
  .join("matches", "deliveries.match_id", "=", " matches.id")
  .where("matches.season", "=", "2015")
  .groupBy("bowler")
  .orderBy("economy")
  .limit("10")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    knex.destroy();
  });

const query5 = knex("matches")
  .select("winner AS team")
  .whereRaw("toss_winner=winner");
knex
  .select("team", knex.raw("COUNT(*) AS toss_and_match_wins"))
  .from(query5.as("toss_and_match"))
  .groupBy("team")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    knex.destroy();
  });

knex
  .select("season", "player_of_match")
  .count("* as num_awards")
  .from("matches")
  .groupBy("season", "player_of_match")
  .having(knex.raw("COUNT(*)"), "=", function () {
    this.select(knex.raw("COUNT(*)"))
      .from("matches as m2")
      .whereRaw("m2.season = matches.season")
      .groupBy("player_of_match")
      .orderBy(knex.raw("COUNT(*)"), "DESC")
      .limit(1);
  })
  .orderBy("num_awards", "DESC")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    knex.destroy();
  });

knex("deliveries as d")
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
  .orderBy("m.season")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    knex.destroy();
  });

knex("deliveries")
  .select("player_dismissed", "bowler", knex.raw("COUNT(*) AS dismissal_count"))
  .whereRaw("player_dismissed != ''")
  .groupBy("player_dismissed")
  .groupBy("bowler")
  .orderBy("dismissal_count", "DESC")
  .limit(1)
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    knex.destroy();
  });

knex("deliveries")
  .select(
    "bowler",
    knex.raw("ROUND(SUM(total_runs)/(COUNT(*)/6),2) AS economy")
  )
  .where("is_super_over", "=", "1")
  .groupBy("bowler")
  .orderBy("economy")
  .limit(1)
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    knex.destroy();
  });
