const data = {
    "stations": [
        {
            "code": "APF",
            "name": "Appleford"
        },
        {
            "code": "BSK",
            "name": "Basingstoke"
        },
        {
            "code": "BTH",
            "name": "Bath Spa"
        },
        {
            "code": "BHM",
            "name": "Birmingham Grand Central"
        },
        {
            "code": "BAW",
            "name": "Blackwater"
        },
        {
            "code": "BCE",
            "name": "Bracknell"
        },
        {
            "code": "BRI",
            "name": "Bristol Temple Meads"
        },
        {
            "code": "CDF",
            "name": "Cardiff Central"
        },
        {
            "code": "DID",
            "name": "Didcot Parkway"
        },
        {
            "code": "EAL",
            "name": "Ealing Broadway"
        },
        {
            "code": "FNN",
            "name": "Farnborough North"
        },
        {
            "code": "GTW",
            "name": "Gatwick Airport"
        },
        {
            "code": "GLD",
            "name": "Guildford"
        },
        {
            "code": "PAD",
            "name": "London Paddington"
        },
        {
            "code": "WAT",
            "name": "London Waterloo"
        },
        {
            "code": "MAI",
            "name": "Maidenhead"
        },
        {
            "code": "MIA",
            "name": "Manchester Picadilly"
        },
        {
            "code": "NBY",
            "name": "Newbury"
        },
        {
            "code": "NCL",
            "name": "Newcastle"
        },
        {
            "code": "OXF",
            "name": "Oxford"
        },
        {
            "code": "PLY",
            "name": "Plymouth"
        },
        {
            "code": "RDG",
            "name": "Reading"
        },
        {
            "code": "SOU",
            "name": "Southampton Central"
        },
        {
            "code": "TWI",
            "name": "Twickenham"
        },
        {
            "code": "WIN",
            "name": "Winchester"
        },
        {
            "code": "WNC",
            "name": "Windsor"
        },
        {
            "code": "WKM",
            "name": "Wokingham"
        }
    ]
}

$(function () {
    const addStations = data => {
        if (data.stations.length == 0) {
            throw new Error('The stations list must be provided');
        }

        let stationContainer = $('.content-stations');

        for (let i = 0; i < data.stations.length; i++) {
            let stationOption = $('<div class="content-stations__col"></div>');

            stationOption.val(data.stations[i].name);
            stationOption.html(data.stations[i].name);
            stationContainer.append(stationOption);
        }
    }

    addStations(data);
});