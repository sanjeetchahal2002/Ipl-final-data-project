function matchesPerYear(matches){
    let output = {}
    matches.forEach((match) => {
        let year = match.season
        if(!output[year]){
            output[year] = 1
        }else{
            output[year]++;
        }
    })
    return output
}

module.exports = matchesPerYear