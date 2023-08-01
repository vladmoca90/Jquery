const destinations = [
    {
        code: 'AYW',
        name: 'Aberystwyth',
    },
    {
        code: 'BSK',
        name: 'Basingstoke',
    },
    {
        code: 'BTH',
        name: 'Bath Spa',
    },
    {
        code: 'BHM',
        name: 'Birmingham Grand Central',
    },
    {
        code: 'BAW',
        name: 'Blackwater',
    },
    {
        code: 'BCE',
        name: 'Bracknell',
    },
    {
        code: 'BRI',
        name: 'Bristol Temple Meads',
    },
    {
        code: 'CDF',
        name: 'Cardiff Central',

    },
    {
        code: 'DID',
        name: 'Didcot Parkway',

    },
    {
        code: 'EAL',
        name: 'Ealing Broadway',

    },
    {
        code: 'FNN',
        name: 'Farnborough North',
    },
    {
        code: 'GTW',
        name: 'Gatwick Airport',
    },
    {
        code: 'GLD',
        name: 'Guildford',
    },
    {
        code: 'PAD',
        name: 'London Paddington',
    },
    {
        code: 'WAT',
        name: 'London Waterloo',
    },
    {
        code: 'MAI',
        name: 'Maidenhead',
    },
    {
        code: 'MIA',
        name: 'Manchester Picadilly',
    },
    {
        code: 'NBY',
        name: 'Newbury',
    },
    {
        code: 'NCL',
        name: 'Newcastle',
    },
    {
        code: 'OXF',
        name: 'Oxford',
    },
    {
        code: 'PLY',
        name: 'Plymouth',
    },
    {
        code: 'RDG',
        name: 'Reading',
    },
    {
        code: 'SOU',
        name: 'Southampton Central',
    },
    {
        code: 'TWI',
        name: 'Twickenham',
    },
    {
        code: 'WIN',
        name: 'Winchester',
    },
    {
        code: 'WNC',
        name: 'Windsor',
    },
    {
        code: 'WKM',
        name: 'Wokingham',
    },
    {
        code: 'YRK',
        name: 'York',
    },
];

$(function () {
    const getTrainStations = (destinations, dropdownId) => {
        if (destinations.length == 0) {
            throw new Error('Destinations must be provided');
        }

        let stationsDropdown = $(dropdownId);
        stationsDropdown.empty();

        let station = $('<option value="Choose station">Choose station:</option>');
        $('#fromStation').append(station);

        let destination = $('<option value="Choose destination">Choose destination:</option>');
        $('#toStation').append(destination);

        for (let i = 0; i < destinations.length; i++) {
            let stationOption = $('<option></option>');

            stationOption.attr('value', destinations[i].code);
            stationOption.html(destinations[i].name);
            stationsDropdown.append(stationOption);
        }
    }

    getTrainStations(destinations, '#fromStation');

    $('#fromStation').change(function () {
        let selectedOption = $(this).find(':selected');
        let removeSelected = selectedOption.val();
        let destinations2 = [];

        for (let i = 0; i < destinations.length; i++) {
            if (removeSelected != destinations[i].code) {
                destinations2.push(destinations[i]);
            }
        }

        getTrainStations(destinations2, '#toStation');
    });
});