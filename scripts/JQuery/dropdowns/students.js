var data = {
    students: [
        {
            code: 'AM',
            name: 'Alexandru Mocanu',
            mark: 8.81,
        },
        {
            code: 'VM',
            name: 'Vlad Mocanu',
            mark: 9.06,
        },
        {
            code: 'IAR',
            name: 'Ilinca-Alexandra Rolea',
            mark: 9.90,
        },
        {
            code: 'AD',
            name: 'Alexandru Dunca',
            mark: 7.25,
        }
    ]
}

$(function () {

    var student = $('#student');
    var mark = $('#mark');

    function getStudents(data) {
        if (data.students.length == 0) {
            throw new Error('The students list must be given');
        }

        var blank = $('<option value=""></option>');

        student.append(blank);

        for (var i = 0; i < data.students.length; i++) {
            var option = $('<option></option>');

            option.attr('val', data.students[i].code);
            option.html(data.students[i].name);
            student.append(option);
        }
    }

    student.change(function () {
        var selectedOption = $(this).find(':selected');
        var studentCode = selectedOption.val();

        for (var i = 0; i < data.students.length; i++) {
            if (data.students[i].name == studentCode) {
                mark.text(data.students[i].mark);
            }
        }
    });

    getStudents(data);
});