const ecnomyBowler = require("../src/server/4-economicalBowler");

const matchData = [
  { id: 1, season: "2015" },
  { id: 2, season: "2015" },
  { id: 3, season: "2015" },
  { id: 4, season: "2015" },
  { id: 5, season: "2015" },
  { id: 6, season: "2015" },
  { id: 7, season: "2015" },
  { id: 8, season: "2015" },
];

const delyData = [
  { match_id: 1, bowler: "Dhoni", total_runs: "1" },
  { match_id: 1, bowler: "Raina", total_runs: "2" },
  { match_id: 2, bowler: "Kohli", total_runs: "3" },
  { match_id: 2, bowler: "Rohit", total_runs: "4" },
  { match_id: 3, bowler: "Smith", total_runs: "4" },
  { match_id: 3, bowler: "Warner", total_runs: "3" },
  { match_id: 4, bowler: "AB", total_runs: "4" },
  { match_id: 4, bowler: "Jadeja", total_runs: "4" },
  { match_id: 5, bowler: "Sharma", total_runs: "1" },
  { match_id: 5, bowler: "Pandya", total_runs: "2" },
  { match_id: 6, bowler: "Dhoni", total_runs: "4" },
  { match_id: 6, bowler: "Shami", total_runs: "4" },
  { match_id: 7, bowler: "Raina", total_runs: "3" },
  { match_id: 7, bowler: "Kohli", total_runs: "1" },
  { match_id: 7, bowler: "Raina", total_runs: "2" },
  { match_id: 8, bowler: "Dhoni", total_runs: "3" },
  { match_id: 8, bowler: "Shami", total_runs: "2" },
  { match_id: 8, bowler: "Raina", total_runs: "1" },
  { match_id: 8, bowler: "Kohli", total_runs: "1" },
];

describe("Bowler Ecnomy in a particluar year", () => {
  it("test case 1", () => {
    expect(ecnomyBowler(matchData, delyData)).toStrictEqual([
      ["Sharma", "6.00"],
      ["Kohli", "10.00"],
      ["Raina", "12.00"],
      ["Pandya", "12.00"],
      ["Dhoni", "16.00"],
      ["Warner", "18.00"],
      ["Shami", "18.00"],
      ["Rohit", "24.00"],
      ["Smith", "24.00"],
      ["AB", "24.00"],
    ]);
  });
});

