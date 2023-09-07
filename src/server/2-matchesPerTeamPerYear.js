function matchesPerTeamPerYear(matches) {
    let result = {}
    matches.forEach((match) => {
          let year = match.season;
          if(!result[year]){
            result[year]  = {}
          }  
          let winner = match.winner
          if(winner === ''){
            winner = 'No result'
          }
          if(!result[year][winner]){
            result[year][winner] = 1
          }else{
            result[year][winner]++
          }
    })
    return result
    
}
module.exports = matchesPerTeamPerYear