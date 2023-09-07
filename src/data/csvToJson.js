const csvtojson = require('csvtojson')
const fs = require('fs')

function csvToJson(src,dest){
    csvtojson()
        .fromFile(src)
        .then((json)=> {
            fs.writeFileSync(dest,JSON.stringify(json),'utf-8')
        }) 
}

module.exports = csvToJson