function economicalBowlerInSuperOver(deliveries){
    let bowlerData = {}
    deliveries.forEach( (bowls) => {  
        let bowler = bowls.bowler
        let runsGiven = Number(bowls.total_runs)
        let isSuperOver = bowls.is_super_over
        if( isSuperOver == 1){
            if(!bowlerData[bowler]){
                bowlerData[bowler] = {
                    'bowls':0,
                    'runs':0,
                }
            }
            bowlerData[bowler]['runs'] +=runsGiven
            bowlerData[bowler]['bowls'] +=1
        }
    })
    let result = {}
    for(let bowler in bowlerData){
        result[bowler] =( (bowlerData[bowler].runs/bowlerData[bowler].bowls)*6).toFixed(2)  
    }
    result = Object.entries(result).sort( (a,b) => {
        return a[1]-b[1]
    })
    return result


}
module.exports = economicalBowlerInSuperOver