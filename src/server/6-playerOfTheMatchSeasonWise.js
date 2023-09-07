const matchData = require('../data/matchesJson.json')

function playerOftheMatch(matchData){
    let yearOutput =  {}
    matchData.forEach(match => {
            let year = match.season
            if(!yearOutput[year]){
                yearOutput[year] = []
            }
            let playerOfMatch = match.player_of_match
            if(!yearOutput[year][playerOfMatch]){
                yearOutput[year][playerOfMatch] = 1
            }else{
                yearOutput[year][playerOfMatch]++;
            }
    });
    const result = {}

    for(let years in yearOutput){
        let seasonData = yearOutput[years]
        let maxAwards = 0
        let maxPlayerWithAwards = []
        for(let player in seasonData){
            if(seasonData[player] > maxAwards){
                maxAwards = seasonData[player]
            }
        }
        for(let player in seasonData){
            if(seasonData[player] === maxAwards){
                maxPlayerWithAwards.push(player)
            }
        }
        if(maxPlayerWithAwards.length > 1){
            result[years] = []
            maxPlayerWithAwards.forEach( (player) => {
                result[years].push({player,maxAwards})
            })
        }
        else{
            result[years] = {maxPlayerWithAwards,maxAwards}
        }
    }
    return result

}
module.exports = playerOftheMatch