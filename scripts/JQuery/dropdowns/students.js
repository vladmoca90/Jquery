const data = {
    students: [
        {
            code: 'AM',
            name: 'Alexandru Mocanu',
            mark: 8.81,
        },
        {
            code: 'ACN',
            name: 'Andreea-Corina Nisipeanu',
            mark: 6.95,
        },
        {
            code: 'VM',
            name: 'Vlad Mocanu',
            mark: 9.06,
        },
        {
            code: 'IAR',
            name: 'Ilinca-Alexandra Rolea',
            mark: 9.91,
        },
        {
            code: 'AD',
            name: 'Alexandru Dunca',
            mark: 7.25,
        },
        {
            code: 'SOA',
            name: 'Stroia Otilia-Andreea',
            mark: 9.45,
        },
    ]
}

$(function () {
    let student = $('#student');
    let mark = $('#mark');

    const getStudents = data => {
        if (data.students.length == 0) {
            throw new Error('The students list must be given');
        }

        for (let i = 0; i < data.students.length; i++) {
            let option = $('<option></option>');

            option.attr('val', data.students[i].code);
            option.html(data.students[i].name);
            student.append(option);
        }
    }

    student.change(function () {
        let selectedOption = $(this).find(':selected');
        let studentCode = selectedOption.val();

        for (let i = 0; i < data.students.length; i++) {
            if (data.students[i].name == studentCode) {
                mark.text(data.students[i].mark);
            }
        }
    });

    getStudents(data);
});