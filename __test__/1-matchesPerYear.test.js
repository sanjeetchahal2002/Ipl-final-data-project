const matchesPerYear = require('../src/server/1-matchesPerYear')
const matchesData = require('../src/data/matchesJson.json')

const sampleData =[
    {
        "season" : 2011
    },
    {
        "season" : 2010
    },
    {
        "season" : 2011
    },
    {
        "season" : 2012
    },
    {
        "season" : 2011
    },
    {
        "season" : 2007
    },
    {
        "season" : 2010
    }

]


describe('Number of matches played per year for all the years in IPL' , () =>{
    it('test case 1', () => {
        expect(matchesPerYear(matchesData)).toStrictEqual({
            '2008': 58,
            '2009': 57,
            '2010': 60,
            '2011': 73,
            '2012': 74,
            '2013': 76,
            '2014': 60,
            '2015': 59,
            '2016': 60,
            '2017': 59,
        })
    })
    it('test case 2',() => {
        expect(matchesPerYear(sampleData)).toStrictEqual({ 
            '2007': 1,
            '2010': 2,
            '2011': 3,
            '2012': 1
        })
    })
})

