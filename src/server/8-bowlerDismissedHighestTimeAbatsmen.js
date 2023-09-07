function HighestDismissle(deliveries){
    let bowlerData = {}
    deliveries.forEach((bowls) => {
            let bowler = bowls.bowler

            let dismissles = bowls.player_dismissed
            
            if(dismissles !== ""){
                if(!bowlerData[bowler] ){
                    bowlerData[bowler] = {}
                }
                if(!bowlerData[bowler][dismissles]){
                    bowlerData[bowler][dismissles] = 1
                }else{
                     bowlerData[bowler][dismissles] += 1
                }
            }
            
        });
    let output = {
        
    }

    let maxbowler =""
    let maxbatsman=""
    let timesof =0;

    for(let key in bowlerData){
        for(let element in bowlerData[key]){
            if(bowlerData[key][element]>timesof){
                timesof = bowlerData[key][element];
                maxbatsman = element
                maxbowler = key
            }
        }
    }
    const answer = {
        "maxbowler":maxbowler,
        "maxbatsman":maxbatsman,
        "number of times":timesof
    }
    return answer
}

module.exports = HighestDismissle