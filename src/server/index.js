// Helper
const matchData = require('../data/matchesJson.json')
const deliveryData = require('../data/delyJson.json') 
const outputToJson = require('../public/outputToJson')

// All Functions
const matchesPerYear = require('../server/1-matchesPerYear')
const matchesPerTeamPerYear = require('../server/2-matchesPerTeamPerYear')
const extraRuns = require('../server/3-extraRuns2016')
const ecnomicalBowler = require('../server/4-economicalBowler')
const teamWinTossAndMatch = require('../server/5-teamWinTossAndMatch')
const playerWithMaxAwards = require('../server/6-playerOfTheMatchSeasonWise')
const strickRateEachSeason = require('../server/7-StrickRateEachSeason')
const bowlerDissmissd = require('../server/8-bowlerDismissedHighestTimeAbatsmen')
const economicalBowlerInSuperOver = require('../server/9-BowlerWithBestEconomySuperOver')

const result1 = matchesPerYear(matchData)
const result2 = matchesPerTeamPerYear(matchData)
const result3 = extraRuns(matchData,deliveryData,'2016')
const result4 = ecnomicalBowler(matchData,deliveryData)
const result5 = teamWinTossAndMatch(matchData)
const result6 = playerWithMaxAwards(matchData)
const result7 = strickRateEachSeason(matchData,deliveryData)
const result8 = bowlerDissmissd(deliveryData)
const result9 = economicalBowlerInSuperOver(deliveryData)

outputToJson(result1,'../public/matchesPerYear.json')
outputToJson(result2,'../public/matchesPerTeamPerYear.json')
outputToJson(result3,'../public/extraRun.json')
outputToJson(result4,'../public/economicalBowler.json')
outputToJson(result5,'../public/winsTossAndMatchBoth.json')
outputToJson(result6,'../public/playerWithMaxAwardsinaSeason.json')
outputToJson(result7,'../public/strickRateEachSeason.json')
outputToJson(result8,'../public/bowlerDissmisedHighest.json')
outputToJson(result9,'../public/playerWithBestEconomyInSuperOver.json')




