const csvToJson = require('../data/csvToJson.js')

const matchesSrc = '../data/matches.csv'
const matchesDest = '../data/matchesJson.json'

const deliverySrc = '../data/deliveries.csv'
const deliveryDest = '../data/delyJson.json'

csvToJson(matchesSrc,matchesDest)
csvToJson(deliverySrc,deliveryDest)