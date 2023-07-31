$(function () {
    let addBtn = $('.add-button');
    let list = $('.list-main');
    let listItem = $('.list-item');
    let text = $('#field');
    let close = $('<i class="fa fa-close"></i>');

    addBtn.on('click', function() {
        let listContent = text.val();
        let listText = clone.text(listContent);

        list.append(listText);
        listText.append(close);

        if(listContent.trim().length == 0) {
            clone.remove();
        }
        if(listContent.length > 0) {
            return text.val(null);
        }   

        close.on('click', function() {
            $(this).closest('.list-item').remove();
        });
    });
});