function extraRun(matchesdata,deliveries,year){
    let result = {}

    const matchesRequired = matchesdata
    .filter(match => match.season === year)
    .map(match => match.id);
     
    

    deliveries.forEach((ball) => {
        if(matchesRequired.includes(ball.match_id)){
            let bowlingTeam = ball.bowling_team
            let extraRun = Number(ball.extra_runs)
            if(!result[bowlingTeam]){
                result[bowlingTeam] = 0
            }
            result[bowlingTeam] += extraRun     
        }
    })
    return result  
}
module.exports = extraRun