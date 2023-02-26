$(function () {
    let day = $('#selectable').find('li');
    let showDay = $('#showDay');
    let excludeDay = $('#exclude');

    if(day.length == 0) {
        throw new Error('The list must be provided');
    }

    day.on('click', function () {
        $(this).addClass('clicked').siblings().removeClass('clicked');
        showDay.text($(this).text());
    });

    excludeDay.change(function () {
        if(this.checked) {
            for (let i = 0; i < day.length; i++) {
                let weekend = day.eq(i);

                if (weekend.text() === 'Saturday' || weekend.text() === 'Sunday') {
                    //weekend.addClass('disable-day');
                    //weekend.removeClass('clicked');
                    //showDay.eq(i).text();
                    weekend.hide();
                }
            }
        } 
        else {
            weekend.show();
        }
    });
});