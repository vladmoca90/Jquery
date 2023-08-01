const names = [
    {
        name: "Vlad Mocanu",
        id: 20,
    },
    {
        name: "Alexandru Mocanu",
        id: 20,
    },
    {
        name: "Jamie Burton",
        id: 11,
    },
    {
        name: "Rebecca Docherty",
        id: 27,
    },
    {
        name: "Leon Williams",
        id: 7,
    },
    {
        name: "Klaudia Rudna",
        id: 16,
    },
    {
        name: "Libo Bian",
        id: 20,
    },
    {
        name: "Rachel Tyson",
        id: 11,
    },
    {
        name: "Zubair Hossain",
        id: 15,
    },
    {
        name: "Phil Gill",
        id: 9,
    },
    {
        name: "Liam Monticelli",
        id: 30,
    },
    {
        name: "Dara Djakovic",
        id: 21,
    },
    {
        name: "Sarah Potter",
        id: 20,
    },
];

$(function () {
    const addNamesToDropdown = names => {
        if (names.length == 0) {
            throw new Error('The list with names must be provided');
        }

        for (let i = 0; i < names.length; i++) {
            let option = $('<option></option>');

            $('#names').append(option);
            option.attr('value', names[i].name);
            option.html(names[i].name);
        }
    }

    addNamesToDropdown(names);

    const addNamesToList = names => {
        if (names.length == 0) {
            throw new Error('The list with names must be provided');
        }

        for (let i = 0; i < names.length; i++) {
            let nameItem = $('<li></li>');

            $('#namesList').append(nameItem);
            nameItem.html(names[i].name);
        }
    }

    addNamesToList(names);

    $('#names').change(function () {
        let selected = $(this).find(':selected');
        let selectedOption = selected.val();

        $('#namesList li').remove();

        if (selectedOption) {
            let listItem = $('<li></li>');
            let selectedName = listItem.html(selectedOption);

            $('#namesList').append(selectedName);
        }
    });
});