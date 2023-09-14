async function fetchAndPlotMatchesPerYear() {
    const response = await fetch('output/matchesPerYear.json');
    const data = await response.json();
    console.log(data);
    const years = Object.keys(data);
    Highcharts.chart('chart-1', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Number of matches per year'
        },
        subtitle: {
            text: 'Source: IPL Project'
        },
        xAxis: {
            categories: years,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Matches'
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Matches',
            data: Object.values(data)
        }
        ]
    });
}



async function ExtraRunsPerTeam() {
    const response = await fetch('output/extraRunsPerTeam.json');
    const data = await response.json();
    const years = Object.keys(data);
    Highcharts.chart('chart-1', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Extra Runs Per Team'
        },
        subtitle: {
            text: 'Source: IPL Project'
        },
        xAxis: {
            categories: years,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Runs'
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Extra Runs',
            data: Object.values(data)
        }
        ]
    });
}



async function bestEconomyInSuperOver() {
    const response = await fetch('output/bestEconomySuperOver.json');
    const data = await response.json();
    console.log(data);
    const years = Object.keys(data);
    Highcharts.chart('chart-1', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Economy In Super Over'
        },
        subtitle: {
            text: 'Source: IPL Project'
        },
        xAxis: {
            categories: years,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Economy'
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Bowler',
            data: Object.values(data)
        }
        ]
    });
}


async function playerDismissedAnotherPlayer() {
    const response = await fetch('output/playerDismissedAnotherPlayer.json');
    const data = await response.json();
    console.log(data);
    const years = Object.keys(data);
    Highcharts.chart('chart-1', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Number of Dismisles '
        },
        subtitle: {
            text: 'Source: IPL Project'
        },
        xAxis: {
            categories: years,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Matches'
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Matches',
            data: Object.values(data)
        }
        ]
    });
}


async function topTenEconomicalBowler() {
    const response = await fetch('output/topTenEconomicalBowler.json');
    const data = await response.json();
    console.log(data)
    const datavalues = Object.values(data);
    const bowlerData = []
    const economy = []
    for(let key in datavalues){
        bowlerData.push(datavalues[key].bowler)
    }
    for(let key in datavalues){
        economy.push(datavalues[key].economy)
    }
    Highcharts.chart('chart-1', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Top 10 Economical Bowler of the year 2016'
        },
        subtitle: {
            text: 'Source: IPL Project'
        },
        xAxis: {
            categories: bowlerData,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Economy'
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Economy',
            data: economy
        }
        ]
    });
}



async function wonTossWonMatch() {
    const response = await fetch('output/wonTossWonMatch.json');
    const data = await response.json();
    console.log(data);
    const years = Object.keys(data);
    Highcharts.chart('chart-1', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Number of Toss And Win Match per team'
        },
        subtitle: {
            text: 'Source: IPL Project'
        },
        xAxis: {
            categories: years,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'No. Of Times'
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Matches',
            data: Object.values(data)
        }
        ]
    });
}


async function  matchesWonPerTeamPerYear(year) {
    const response = await fetch('output/matchesWonPerTeamPerYear.json');
    const data = await response.json();
    // console.log(data);
        const teams = Object.keys(data[year])
        Highcharts.chart('chart-1', {
            chart: {
                type: 'column'
            },
            title: {
                text: `Number of matches per ${year}`
            },
            subtitle: {
                text: 'Source: IPL Project'
            },
            xAxis: {
                categories: teams,
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Matches'
                }
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Matches',
                data: Object.values(data[year])
            }
            ]
        });
}

let selectElementForty = document.getElementById("hello");
selectElementForty.addEventListener("change", function() {
    console.log(selectElementForty.value)
    matchesWonPerTeamPerYear(selectElementForty.value)
});



async function  playeroftheMatchawardsforeachseason(year) {
    const response = await fetch('output/highestPomPerSeason.json');
    const data = await response.json();
        const teams = Object.keys(data[year])
        console.log(teams)
        Highcharts.chart('chart-1', {
            chart: {
                type: 'column'
            },
            title: {
                text: `Number of awards per ${year}`
            },
            subtitle: {
                text: 'Source: IPL Project'
            },
            xAxis: {
                categories: teams,
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'No of Awards'
                }
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'player',
                data: Object.values(data[year])
            }
            ]
        });
}

selectElementPom = document.getElementById("pMes");
selectElementPom.addEventListener("change", function() {
    console.log(selectElementPom.value)
    playeroftheMatchawardsforeachseason(selectElementPom.value)
});





async function  strikeRateOfABatsmanForEachSeason(year) {
    const response = await fetch('output/batsmanStrikeRateSeason.json');
    const data = await response.json();
        const teams = Object.keys(data[year])
        Highcharts.chart('chart-1', {
            chart: {
                type: 'column',
            },
            title: {
                text: `Number of awards per ${year}`
            },
            subtitle: {
                text: 'Source: IPL Project'
            },
            xAxis: {
                categories: teams,
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'No of Awards'
                }
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'player',
                data: Object.values(data[year]).map( (player) => {
                    return Number(player.strikrate)
                })
            }
            ]
        });
}

selectElement = document.getElementById("sRBS");
selectElement.addEventListener("change", function() {
    console.log(selectElement.value)
    strikeRateOfABatsmanForEachSeason(selectElement.value)
});
