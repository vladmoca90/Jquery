var data = {
    makes: [{
            name: 'Alfa Romeo',
            models: [{
                    name: '174',
                    stock: 1
                },
                {
                    name: 'Giulietta',
                    stock: 2
                }
            ]
        },
        {
            name: 'Audi',
            models: [{
                    name: 'A1',
                    stock: 4
                },
                {
                    name: 'A2',
                    stock: 2
                },
                {
                    name: 'A3',
                    stock: 1
                },
                {
                    name: 'R8',
                    stock: 1
                }
            ]
        },
        {
            name: 'BMW',
            models: [{
                    name: '1 Series',
                    stock: 4
                },
                {
                    name: '2 Series',
                    stock: 2
                },
                {
                    name: '3 Series',
                    stock: 1
                },
                {
                    name: 'Z4',
                    stock: 1
                }
            ]
        },
        {
            name: 'Citroen',
            models: [{
                    name: 'Berlingo',
                    stock: 4
                },
                {
                    name: 'Picasso',
                    stock: 2
                }
            ]
        },
        {
            name: 'Ford',
            models: [{
                    name: 'Escort',
                    stock: 4
                },
                {
                    name: 'Fiesta',
                    stock: 2
                },
                {
                    name: 'Focus',
                    stock: 1
                },
                {
                    name: 'Galaxy',
                    stock: 1
                },
                {
                    name: 'KA',
                    stock: 4
                },
                {
                    name: 'Kuga',
                    stock: 2
                },
                {
                    name: 'Mustang',
                    stock: 1
                },
                {
                    name: 'Transit',
                    stock: 1
                }
            ]
        },
        {
            name: 'Lambourghini',
            models: [{
                    name: 'Hurracan',
                    stock: 1
                },
                {
                    name: 'Aventador',
                    stock: 1
                }
            ]
        }
    ]
};

function getModelsForMake(make) {
    if (!make) {
        throw new Error("Make parameter must be populated.");
    }

    for (var i = 0; i < data.makes.length; i++) {
        if (data.makes[i].name == make) {
            return data.makes[i].models;
        }
    }

    throw new Error("Make does not exist.")
}

function populateModelsDropdown(make) {
    if(!make) {
        throw new Error("make must be provided.");
    }

    var models = getModelsForMake(make);
    var modelDropdown = $('#modelDropdown');

    for (var i = 0; i < models.length; i++) {
        var modelOption = $('<option />');
        modelOption.val(models[i].name);
        modelOption.html(models[i].name);

        modelDropdown.append(modelOption);
    }
}

function populateUi(makes) {
    if (!makes) {
        throw new Error("Makes array cannot be null or empty.");
    }

    var makeDropdown = $('#makeDropdown');

    for (var i = 0; i < makes.length; i++) {
        var option = $('<option />');
        option.val(makes[i].name);
        option.html(makes[i].name);

        makeDropdown.append(option);
    }
}

function updateStocksForMake(make) {
    if(!make) {
        throw new Error("make must be provided.");
    }

    var models = getModelsForMake(make);
    var stockTotal = $('.stock-value');
    var totalStock = 0;

    for (var i = 0; i < models.length; i++) {
        totalStock += models[i].stock;
    }

    stockTotal.html(totalStock);
}

function updateStocksForModel(make, model) {
    if(!make || !model) {
        throw new Error("Both make and model must be provided.");
    }

    var models = getModelsForMake(make);
    var totalStock = 0;

    for(var i = 0; i < models.length; i++) {
        if(models[i].name == model) {
            totalStock = models[i].stock;
            break;
        } else if(model == "any") {
            totalStock += models[i].stock;
        }
    }

    var stockTotal = $('.stock-value');
    stockTotal.html(totalStock);
}

function updateStocks(make, model) {
    if(!make) {
        throw new Error("make must be provided.");
    }

    if(model) {
        updateStocksForModel(make, model);
    } else {
        updateStocksForMake(make);
    }
}

function resetModelsDropdown() {
    $('#modelDropdown').empty();

    var anyOption = $('<option />');
    anyOption.html('Model (any)');
    anyOption.val('any');
    $('#modelDropdown').append(anyOption);
    $('#modelDropdown').val('any');
}

function resetStocks() {
    var totalStocks = 0;

    for(var i = 0; i < data.makes.length; i++) {
        var make = data.makes[i];

        for(var j = 0; j < make.models.length; j++) {
            var model = make.models[j];
            totalStocks += model.stock;
        }
    }

    $('.stock-value').html(totalStocks);
}

function selectMake(make) {
    if(!make) {
        throw new Error("Make must be provided.");
    }

    resetModelsDropdown();
    populateModelsDropdown(make);
    updateStocks(make);
}

function selectModel(make, model) {
    if(!make || !model) {
        throw new Error("Both make and model must be provided.");
    }

    updateStocks(make, model);
}

function setUpEvents() {
    resetStocks();

    $('#makeDropdown').change(function () {
        $('#modelDropdown').empty();

        if (this.value == "any") {
            resetModelsDropdown();
            resetStocks();
            $('#modelDropdown').prop('disabled', true);
        } else {
            $('#modelDropdown').prop('disabled', false);

            selectMake(this.value);
        }
    });

    $('#modelDropdown').change(function () {
        var make = $('#makeDropdown').val();
        var model = this.value;

        selectModel(make, model);
    });
}

$(function () {
    populateUi(data.makes);
    setUpEvents();
});