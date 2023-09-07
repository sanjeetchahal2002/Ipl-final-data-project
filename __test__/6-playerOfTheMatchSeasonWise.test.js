const playerOftheMatch = require('../src/server/6-playerOfTheMatchSeasonWise');

const sampleMatches = [
  { season: "2010", player_of_match: "John" },
  { season: "2010", player_of_match: "Mike" },
  { season: "2010", player_of_match: "David" },
  { season: "2010", player_of_match: "David" },
  { season: "2011", player_of_match: "Mike" },
  { season: "2011", player_of_match: "Steve" },
  { season: "2011", player_of_match: "Steve" },
  { season: "2011", player_of_match: "Steve" },
  { season: "2011", player_of_match: "David" },
  { season: "2012", player_of_match: "David" },
  { season: "2012", player_of_match: "John" },
  { season: "2012", player_of_match: "Steve" },
  { season: "2012", player_of_match: "John" },
  { season: "2012", player_of_match: "Steve" },
  { season: "2013", player_of_match: "David" },
  { season: "2013", player_of_match: "Mike" },
  { season: "2013", player_of_match: "David" },
  { season: "2013", player_of_match: "Steve" },
  { season: "2013", player_of_match: "Mike" },
];

describe("highest player of the match for each season", () => {
  it("test case 1", () => {
    expect(playerOftheMatch(sampleMatches)).toStrictEqual({
      '2010': { maxPlayerWithAwards: [ 'David' ], maxAwards: 2 },
      '2011': { maxPlayerWithAwards: [ 'Steve' ], maxAwards: 3 },
      '2012': [
        { player: 'John', maxAwards: 2 },
        { player: 'Steve', maxAwards: 2 }
      ],
      '2013': [
        { player: 'David', maxAwards: 2 },
        { player: 'Mike', maxAwards: 2 }
      ]
    });
  });
});

