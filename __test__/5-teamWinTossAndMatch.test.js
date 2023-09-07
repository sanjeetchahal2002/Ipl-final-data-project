const winTossAndMatch = require("../src/server/5-teamWinTossAndMatch");
const sample = [
  { winner: "Kolkata Knight Riders", toss_winner: "Sunrisers Hyderabad" },
  { winner: "Kings XI Punjab", toss_winner: "Kings XI Punjab" },
  { winner: "Kolkata Knight Riders", toss_winner: "Kolkata Knight Riders" },
  { winner: "Sunrisers Hyderabad", toss_winner: "Sunrisers Hyderabad" },
  { winner: "Kings XI Punjab", toss_winner: "Kings XI Punjab" },
  { winner: "Kolkata Knight Riders", toss_winner: "Sunrisers Hyderabad" },
  { winner: "Kolkata Knight Riders", toss_winner: "Kings XI Punjab" },
  { winner: "Kolkata Knight Riders", toss_winner: "Sunrisers Hyderabad" },
  { winner: "Kings XI Punjab", toss_winner: "Sunrisers Hyderabad" },
];

describe("number of times each team won the toss and won the match", () => {
  it("test case 1", () => {
    expect(winTossAndMatch(sample)).toStrictEqual({
      'Kolkata Knight Riders': 1,
      'Sunrisers Hyderabad': 1,
      'Kings XI Punjab': 2,
    });
  });
});
