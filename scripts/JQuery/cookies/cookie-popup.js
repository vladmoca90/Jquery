$(function() {
    if(Cookies.get('adDismissed')) {
        $('.pop-up').css('display', 'none');
    }

    $('.close-btn').on('click', function() {
        $('.pop-up').css('display', 'none');

        Cookies.set('adDismissed', true, { domain: 'file:///C:/Users/vladm/OneDrive/Desktop/Projects/Jquery/sites/cookie-popUp.html' });
    });
});