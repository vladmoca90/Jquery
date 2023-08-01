$(function () {
    let vehicles = $('.vehicle-price');

    const getVehiclesPrices = vehicles => {
        if (vehicles.length == 0) {
            return;
        }

        for (let i = 0; i < vehicles.length; i++) {
            let vehicle = $(vehicles[i]);
            let vehPrice = vehicle.children('.car-price').html().replace(',', '').trim().substring(1);
            let price = parseInt(vehPrice);
            let monthlyPrice = (price / 12).toFixed(2);

            vehicle.children('.monthly-price').text('£' + monthlyPrice + '/month');
        }
    }

    getVehiclesPrices(vehicles);
});