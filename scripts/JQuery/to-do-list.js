$(function () {
    let addBtn = $('.add-button');
    let list = $('.list-main');
    let listItem = $('.list-item');
    let text = $('#field');
    let close = $('<i class="fa fa-close"></i>');

    addBtn.on('click', function() {
        let clone = listItem.clone();
        
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
    });
    
    $('.fa.fa-close').on('click', function() {
        $(this).parent('.list-item').remove();
    });
});