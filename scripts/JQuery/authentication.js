$(function() {
    let name = $('#name');
    let gender = $('#gender');
    let email = $('#email');
    let password = $('#password');
    let check = $('#check');
    
    $('.validation-alerts p').hide();

    $('#submit').on('click', function() {
        if(name.length < 3) {
            $('.name-alert').show();
        }
        if(email.length < 3 || email.indexOf('@') == -1) {
            throw new Error('');
        }
    });
});