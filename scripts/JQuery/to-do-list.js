$(function () {
    let addBtn = $('.add-button');
    let list = $('.list-main');
    let text = $('#field');
    //let close = $('<i class="fa fa-close"></i>');

    addBtn.on('click', function() {
        let clone = list.find('li.list-item:first').clone();

        let listContent = text.val();
        let listText = clone.text(listContent);

        list.append(listText);
        //listText.append(close);

        if(listContent.trim().length == 0) {
            clone.remove();
        }
        if(listContent.length > 0) {
            return text.val(null);
        }   

        close.on('click', function() {
            $(this).parent('.list-item').remove();
        });
    });
});