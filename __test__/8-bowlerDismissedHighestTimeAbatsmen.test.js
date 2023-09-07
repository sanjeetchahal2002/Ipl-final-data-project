const findMaxDismissals = require("../src/server/8-bowlerDismissedHighestTimeAbatsmen");

const sampleDeliveries = [
  { player_dismissed: "GJ Maxwell", bowler: "Rashid Khan" },
  { player_dismissed: "GJ Maxwell", bowler: "BA Stokes" },
  { player_dismissed: "KA Pollard", bowler: "Rashid Khan" },
  { player_dismissed: "KA Pollard", bowler: "BA Stokes" },
  { player_dismissed: "KA Pollard", bowler: "Rashid Khan" },
  { player_dismissed: "CH Gayle", bowler: "BA Stokes" },
];

describe("find player with the most dismissals", () => {
  it("test case 1", () => {
    expect(findMaxDismissals( sampleDeliveries)).toStrictEqual({
      maxbowler: 'Rashid Khan', maxbatsman: 'KA Pollard', 'number of times': 2 
     });
  });
});