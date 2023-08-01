$(function () {

    const setCountries = xml => {
        let countriesDropdown = $('#makeDropdown');
        let countries = xml.find('country');

        for (let i = 0; i < countries.length; i++) {
            let country = $(countries[i]);
            let countryOption = $('<option></option>');

            countryOption.attr('value', country.attr('code'));
            countryOption.html(country.html());
            countriesDropdown.append(countryOption);
        }

        setTotalCount(countries.length);
    }

    const setTotalCount = count => $('#total-value').html(count);

    let countriesUrl = 'http://sampleapis20180514091454.azurewebsites.net/api/v1/countries';

    $.ajax(countriesUrl, {
        method: 'GET',
        dataType: 'xml',
        success: function (response) {
            let xml = $(response);

            $(this).countries = setCountries(xml);
        },
        error: function (err) {
            console.error(err);
        }
    });
});