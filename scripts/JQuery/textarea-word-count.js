$(function () {
    var words = $('#maxWords');
    var textBlock = $('#textarea');

    textBlock.on('keyup', function () {
        var count = $(this).val().length;

        if(count > 1000) {
            throw new Error('you have more words than the limmit');
        }

        words.text(count + '/' + textBlock.attr('maxlength'));
    });
});