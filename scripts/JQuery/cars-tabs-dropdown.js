const cars = [
  {
    make: 'Abarth',
    model: ['Abarth 1', 'Abarth 2', 'Abarth 3'],
  },
  {
    make: 'Alfa Romeo',
    model: ['Alfa Romeo 1', 'Alfa Romeo 2', 'Alfa Romeo 3'],
  },
  {
    make: 'Toyota',
    model: ['Toyota 1', 'Toyota 2', 'Toyota 3'],
  },
  {
    make: 'Vauxhall',
    model: ['Vauxhall 1', 'Vauxhall 2', 'Vauxhall 3'],
  },
  {
    make: 'Volkswagen',
    model: ['Volkswagen 1', 'Volkswagen 2', 'Volkswagen 3'],
  },
  {
    make: 'Volvo',
    model: ['Volvo 1', 'Volvo 2', 'Volvo 3'],
  },
];

const vans = [
  {
    make: 'Abarth 2',
    model: ['Abarth 11', 'Abarth 21', 'Abarth 31'],
  },
  {
    make: 'Volkswagen 2',
    model: ['Volkswagen 11', 'Volkswagen 21', 'Volkswagen 31'],
  },
  {
    make: 'Volvo 2',
    model: ['Volvo 11', 'Volvo 21', 'Volvo 31'],
  },
];

$(function () {
  $('#vansTab').hide();

  const changeTab = () => {
    $('.form-tabs input').change(function () {
       // console.log('CHANGED');
        let tabId = $(this).attr('id');
        $('.tab').hide();

        $('#' + tabId + 'Tab').show();
    });
  }

  changeTab();

  $('.number-of-cars').text(cars.length);
  $('.number-of-vans').text(vans.length);
});