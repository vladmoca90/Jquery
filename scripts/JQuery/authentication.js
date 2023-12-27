$(function() {
    let name = $('#name').val();
    let email = $('#email').val();
    let password = $('#password').val();
    let gender = $('#gender:checked');
    let checkOut = $('#check:checked');

    $('.validation-messages p').css('display', 'block');

    $('#submit').on('click', function() {
        if(name.length < 3) {
            $('.name-alert').css('display', 'block');
        }
        if(email.length < 6 && email.indexOf('@') == -1) {
            $('.email-alert').css('display', 'block');
        }
        if(password.length < 6) {
            $('.password-alert').css('display', 'block');
        }
        if(gender.length == 0) {
            $('.gender-alert').addClass('show-alert');
        }
        if(checkOut.length = 0) {
            $('.checkOut-alert').addClass('show-alert');
        }
    });
});