const matchesPerTeamPerYear = require('../src/server/2-matchesPerTeamPerYear')

const sampleData = [
    {
      "season": "2017",
      "winner": "Rising Pune Supergiant"
    },
    {
      "season": "2015",
      "winner": "Chennai Super Kings"
    },
    {
      "season": "2013",
      "winner": "Rajasthan Royals"
    },
    {
      "season": "2015",
      "winner": "Sunrisers Hyderabad"
    },
    {
      "season": "2019",
      "winner": "Mumbai Indians"
    },
    {
      "season": "2015",
      "winner": "Chennai Super Kings"
    },
    {
      "season": "2008",
      "winner": "Chennai Super Kings"
    },
    {
      "season": "2010",
      "winner": "Delhi Daredevils"
    },
    {
      "season": "2018",
      "winner": "Chennai Super Kings"
    },
    {
      "season": "2012",
      "winner": "Delhi Daredevils"
    }
  ]
  

describe( 'Total Number of Matches per year pre team' ,() => {
    it('test case 1', () => {
        expect(matchesPerTeamPerYear(sampleData)).toStrictEqual(
            {
                '2008': { 'Chennai Super Kings': 1 },
                '2010': { 'Delhi Daredevils': 1 },
                '2012': { 'Delhi Daredevils': 1 },
                '2013': { 'Rajasthan Royals': 1 },
                '2015': { 'Chennai Super Kings': 2, 'Sunrisers Hyderabad': 1 },
                '2017': { 'Rising Pune Supergiant': 1 },
                '2018': { 'Chennai Super Kings': 1 },
                '2019': { 'Mumbai Indians': 1 }
            }
        )
    })
})
