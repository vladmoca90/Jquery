const cars = [
    {
        model: 'Mercedes-Benz',
        make: 'E50',
    },
    {
        model: 'Honda',
        make: 'Accord',
    },
    {
        model: 'Ford',
        make: 'F250',
    },
    {
        model: 'Toyota',
        make: 'RAV4',
    },
];

const stocks = [3, 1, 4, 1];

$(function () {
    let models = $('#modelDrop');
    let makes = $('#makeDrop');

    const addModels = (cars, dropId) => {
        if(cars.length == 0) {
            throw new Error('Cars list list be given');
        }

        for(let i = 0; i < cars.length; i++) {
            let option = $('<option></option>');

            option.val(cars[i].model);
            option.html(cars[i].model);
            $(dropId).append(option);
        }
    }

    addModels(cars, '#modelDrop');
    
    models.change(function() {
        makes.empty();

        let chooseMake = $('<option value="Choose make">Choose make (any):</option>');
        makes.append(chooseMake);

        let selectedOption = $(this).find(':selected');
        let carCode = selectedOption.val();

        for(let i = 0; i < cars.length; i++) {
            let option = $('<option></option>');

            if(cars[i].model == carCode) {
                option.val(cars[i].make);
                option.html(cars[i].make);

                makes.append(option);
            }
        }
    });

    const includeStocksInCars = stocks => {
        if(stocks.length == 0) {
            throw new Error('Stocks list must be given');
        }

        return cars.push(stocks);
    }

    includeStocksInCars(stocks);

    makes.change(function() {
        let stockNumber = $('<span></span>');

        for(let i = 0; i < cars.length; i++) {
            Object.assign(cars[i], {
                stock: stocks[i]
            });

            stockNumber.html(cars[i].stock);
            $('#stock').append(stockNumber);
        }
    });
});