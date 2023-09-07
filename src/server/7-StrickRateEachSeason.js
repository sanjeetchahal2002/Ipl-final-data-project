function strickRate(matchData,deliveries){
    let matchRequired = {}
    let batsmanData = {}
    matchData.forEach( (match) => {
        let year = match.season
        let matchId = match.id
        if(!matchRequired[year]){
            batsmanData[year] = {}
            matchRequired[year] = []
        }
        matchRequired[year].push(matchId)
    })
    deliveries.forEach( (balls) => {  
        let matchId = balls.match_id
        let batsMen = balls.batsman
        let runsScored = Number(balls.total_runs - balls.extra_runs)
        
        for(let years in matchRequired){
                if(years.includes(matchId)){
                    if(!batsmanData[years][batsMen]){
                        batsmanData[years][batsMen] = {
                            'bowls':0,
                            'runs':0,
                        }
                    }
                    batsmanData[years][batsMen]['runs'] +=runsScored
                    batsmanData[years][batsMen]['bowls'] +=1
                }
        }
    })
    let result = {}
    for(let season in batsmanData){
        result[season] = {}
        for(let player in batsmanData[season]){
            result[season][player] =( (batsmanData[season][player].runs/batsmanData[season][player].bowls)*100).toFixed(2) 
        }
    }
    return result
}
module.exports = strickRate
