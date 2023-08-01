const people = [
    {
        name: 'Ana-Maria Magureanu',
        age: '29',
    },
    {
        name: 'Alexander Swift',
        age: '25',
    },
    {
        name: 'Caitlin Morgan',
        age: '30',
    },
    {
        name: 'Vladimir Krushchev',
        age: '35',
    },
    {
        name: 'Leon Williams',
        age: '29',
    },
]

$(function () {
    let dropBtn = $('.dropdown__dropBtn');
    let list = $('.dropdown__list');

    dropBtn.on('click', function () {
        list.slideToggle(250);
    });

    const addNames = people => {
        if (people.length == 0) {
            throw new Error('The persons list must be given');
        }

        for (let i = 0; i < people.length; i++) {
            let name = $('<li class="dropdown__list-item"></li>');

            name.val(people[i].name);
            name.html(people[i].name);
            list.append(name);
        }
    }

    addNames(people);
});