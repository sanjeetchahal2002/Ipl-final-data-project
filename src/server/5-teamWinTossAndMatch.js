const matchData = require('../data/matchesJson.json')

function winTossAndMatch(matchData){
    let result = {}
    matchData.forEach(match => {
           let team = match.winner
           let tossWinner = match.toss_winner
           if(!result[team] && team != ''){
                result[team] = 0 
            }
            if(team === tossWinner){
                result[team]++
            }
    });
    return result
}
module.exports = winTossAndMatch
