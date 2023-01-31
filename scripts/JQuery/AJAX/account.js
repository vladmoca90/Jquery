//You have a personal account and have to save everything that the person selects from the form
//You will have 2 dropdowns, 3 checkboxes, 3 inputs
//FirstName (string), LastName (string)
//Title (number) => 100 (mr), 200 (miss), 300 (mrs), 400(ms) 500 (Dr) (will choose one value)
//AccountType (number) => 1000 (Personal), 1100 (Savings), 2000 (Business) (will choose one value)
//OverdraftValue (number, 0 or positive) => AddOverdraft (boolean), ReceiveOffers(boolean), AgreeToTerms (boolean)
//it is a JSON with 8 properties (NO ARRAYS)
//the data are boolean, number or string only

$(function () {
    let submit = $('#accountSubmit');

    submit.on('click', function () {
        const json = {
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            title: $('#title option:selected').val(),
            accountType: $('#accountType option:selected').val(),
            checkOverdraft: $('#checkOverdraft').is(':checked'),
            addOverdraft: $('#addOverdraft').val(),
            receiveOffers: $('#receiveOffers').is(':checked'),
            agreeTerms: $('#agreeTerms').is(':checked'),
        }

        let accountUrl = 'http://sampleapis20180514091454.azurewebsites.net/api/v1/accounts';

        $.ajax(accountUrl, {
            method: 'POST',
            data: JSON.stringify(json),
            success: function (response) {
                console.log(response);
            },
            error: function (err) {
                console.log(err);
            }
        });
    });
});