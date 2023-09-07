const strickRate = require("../src/server/7-StrickRateEachSeason");

const matchData = [
    { id: 1, season: "2015" },
    { id: 2, season: "2015" },
    { id: 3, season: "2015" },
    { id: 4, season: "2016" },
    { id: 5, season: "2016" },
    { id: 6, season: "2016" },
    { id: 7, season: "2016" },
    { id: 8, season: "2016" },
  ];

const delyData = [
    { match_id: 1, batsman: "Dhoni", total_runs: "1", extra_runs: "0" },
    { match_id: 1, batsman: "Raina", total_runs: "2", extra_runs: "0" },
    { match_id: 2, batsman: "Kohli", total_runs: "3", extra_runs: "0" },
    { match_id: 2, batsman: "Rohit", total_runs: "4", extra_runs: "0" },
    { match_id: 3, batsman: "Smith", total_runs: "4", extra_runs: "0" },
    { match_id: 3, batsman: "Warner", total_runs: "3", extra_runs: "0" },
    { match_id: 4, batsman: "AB de Villiers", total_runs: "4", extra_runs: "0" },
    { match_id: 4, batsman: "Jadeja", total_runs: "4", extra_runs: "0" },
    { match_id: 5, batsman: "Sharma", total_runs: "1", extra_runs: "0" },
    { match_id: 5, batsman: "Pandya", total_runs: "2", extra_runs: "0" },
    { match_id: 6, batsman: "Dhoni", total_runs: "4", extra_runs: "0" },
    { match_id: 6, batsman: "Shami", total_runs: "4", extra_runs: "0" },
    { match_id: 7, batsman: "Raina", total_runs: "3", extra_runs: "0" },
    { match_id: 7, batsman: "Kohli", total_runs: "1", extra_runs: "0" },
    { match_id: 7, batsman: "Raina", total_runs: "2", extra_runs: "0" },
    { match_id: 8, batsman: "Dhoni", total_runs: "3", extra_runs: "0" },
    { match_id: 8, batsman: "Shami", total_runs: "2", extra_runs: "0" },
    { match_id: 8, batsman: "Raina", total_runs: "1", extra_runs: "0" },
    { match_id: 8, batsman: "Kohli", total_runs: "1", extra_runs: "0" },
  ]
  ;

describe("Batsmen strickrate  in a particular year", () => {
  it("test case 1", () => {
    expect(strickRate(matchData, delyData)).toStrictEqual({
        '2015': {
          Dhoni: '100.00',
          Raina: '200.00',
          Kohli: '300.00',
          Rohit: '400.00',
          Sharma: '100.00',
          Pandya: '200.00'
        },
        '2016': {
          Dhoni: '250.00',
          Raina: '200.00',
          Kohli: '300.00',
          Rohit: '400.00',
          Shami: '400.00'
        }
      });
  });
});
