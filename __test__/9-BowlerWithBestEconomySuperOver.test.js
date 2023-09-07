const findMostEconomicalSuperoversBowler = require("../src/server/9-BowlerWithBestEconomySuperOver"); 

const sampleDeliveries = [
  { is_super_over: "1", bowler: "BowlerA", total_runs: "6" },
  { is_super_over: "1", bowler: "BowlerB", total_runs: "8" },
  { is_super_over: "0", bowler: "BowlerA", total_runs: "4" },
  { is_super_over: "1", bowler: "BowlerB", total_runs: "5" },
  { is_super_over: "1", bowler: "BowlerC", total_runs: "7" },
  { is_super_over: "0", bowler: "BowlerC", total_runs: "3" },
  { is_super_over: "1", bowler: "BowlerA", total_runs: "9" },
];


describe("find most economical superovers bowler", () => {
  it("test case 1", () => {
    expect(findMostEconomicalSuperoversBowler(sampleDeliveries)).toStrictEqual([
      [ 'BowlerB', '39.00' ],
      [ 'BowlerC', '42.00' ],
      [ 'BowlerA', '45.00' ]
    ]);
  });
});


