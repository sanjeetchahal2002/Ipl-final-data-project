const matchdata = [
    {
      "season": "2015",
      "id": "518"
    },
    {
      "season": "2015",
      "id": "519"
    },
    {
      "season": "2015",
      "id": "520"
    },
    {
      "season": "2015",
      "id": "521"
    },
    {
      "season": "2015",
      "id": "522"
    },
    {
      "season": "2015",
      "id": "523"
    },
    {
      "season": "2015",
      "id": "524"
    },
    {
      "season": "2015",
      "id": "525"
    },
    {
      "season": "2015",
      "id": "526"
    },
    {
      "season": "2015",
      "id": "527"
    },
    {
      "season": "2015",
      "id": "528"
    }
  ]
const delevryData = [
    {
      "extra_runs": "1",
      "match_id": "518",
      "bowling_team": "Royal Challengers Bangalore"
    },
    {
      "extra_runs": "2",
      "match_id": "527",
      "bowling_team": "Royal Challengers Bangalore"
    },
    {
      "extra_runs": "3",
      "match_id": "552",
      "bowling_team": "Royal Challengers Bangalore"
    },
    {
      "extra_runs": "0",
      "match_id": "1",
      "bowling_team": "Royal Challengers Bangalore"
    },
    {
      "extra_runs": "2",
      "match_id": "1",
      "bowling_team": "Royal Challengers Bangalore"
    },
    {
      "extra_runs": "0",
      "match_id": "1",
      "bowling_team": "Royal Challengers Bangalore"
    },
    {
      "extra_runs": "1",
      "match_id": "520",
      "bowling_team": "Mumbai Indians"
    },
    {
      "extra_runs": "4",
      "match_id": "526",
      "bowling_team": "Sunrisers Hyderabad"
    },
    {
      "extra_runs": "0",
      "match_id": "1",
      "bowling_team": "Royal Challengers Bangalore"
    },
    {
      "extra_runs": "1",
      "match_id": "1",
      "bowling_team": "Royal Challengers Bangalore"
    }
]    
const extraRun = require('../src/server/3-extraRuns2016')

describe('Extra Runs By All team in A particular Season',() => {
    it('Test Case 1', () => {
      expect(extraRun(matchdata,delevryData, '2015')).toStrictEqual({
         'Royal Challengers Bangalore': 3, 
         'Mumbai Indians' : 1,
         'Sunrisers Hyderabad' :4
      })
    })
})

