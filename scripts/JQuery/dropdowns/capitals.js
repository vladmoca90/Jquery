const data = {
    countries: [{
            name: 'India',
            code: 'IND',
            capital: 'Delhi',
            otherCities: ['Madras', 'Mumbai', 'Calcutta', 'letanasi', 'Hyderabad'],
        },
        {
            name: 'Romania',
            code: 'ROM',
            capital: 'Bucharest',
            otherCities: ['Cluj-Napoca', 'Iasi', 'Craiova', 'Brasov'],
        },
        {
            name: 'Israel',
            code: 'ISR',
            capital: 'Jerusalem',
            otherCities: ['Tel Aviv', 'Haifa', 'Eilat', 'Netanya'],
        },
        {
            name: 'France',
            code: 'FRA',
            capital: 'Paris',
            otherCities: ['Lyon', 'Marseille', 'Toulouse', 'Bordeaux', 'Strasbourg', 'Nice'],
        },
        {
            name: 'Moldova',
            code: 'MDV',
            capital: 'Kishinev',
            otherCities: ['Balti', 'Tighina'],
        },
        {
            name: 'Brazil',
            code: 'BRA',
            capital: 'Brasilia',
            otherCities: ['Rio de Janeiro', 'Sao Paulo', 'Fortaleza', 'Recife'],
        },
        {
            name: 'South Africa',
            code: 'SAF',
            capital: 'Pretoria',
            otherCities: ['Johannesburg', 'Cape Town', 'Durban'],
        },
        {
            name: 'Argentina',
            code: 'ARG',
            capital: 'Buenos Aires',
            otherCities: ['Cordoba', 'Mendoza', 'Bahia Blanca', 'Mar del Plata'],
        },
        {
            name: 'United States',
            code: 'USA',
            capital: 'Washington DC',
            otherCities: ['New York City', 'Los Angeles', 'Miami', 'Chicago', 'San Francisco', 'Dallas', 'Seattle', 'Boston', 'Denver'],
        },
    ],
}

$(function () {
    const populateCountriesDrop = data => {
        if (data.length == 0) {
            throw new Error('The list must be given');
        }

        for (let i = 0; i < data.countries.length; i++) {
            let option = $('<option></option>');

            option.attr('value', data.countries[i].code);
            option.html(data.countries[i].name);
            $('#countriesDrop').append(option);
        }
    }

    populateCountriesDrop(data, '#countriesDrop');

    $('#countriesDrop').change(function () {
        let selectedOption = $(this).find(':selected');
        let capital = selectedOption.val();

        for (let i = 0; i < data.countries.length; i++) {
            if (data.countries[i].code == capital) {
                $('#capital').html(data.countries[i].capital);
            }
        }
    });

    $('#countriesDrop').change(function () {
        $('#citiesDrop').empty();

        let chooseCity = $('<option value="All other cities">Choose city:</option>');
        $('#citiesDrop').append(chooseCity);

        let selectedOption = $(this).find(':selected');
        let country = selectedOption.val();

        for (let i = 0; i < data.countries.length; i++) {
            if (data.countries[i].code == country) {
                for (let j = 0; j < data.countries[i].otherCities.length; j++) {
                    let option = $('<option></option>');
                    option.attr('value', data.countries[i].code);
                    option.html(data.countries[i].otherCities[j]);

                    $('#citiesDrop').append(option);
                }
            }
        }
    });
});