$(function () {
    let addBtn = $('.add-button');
    let list = $('.list-main');
    let listItem = $('<li class="list-item"><span class="close-btn">X</span></li>');
    let text = $('#field');

    addBtn.on('click', function() {
        list.append(listItem);
        let clone = listItem.clone();
        
        let listContent = text.val();
        let listText = listItem.text(listContent);

        /* if(listContent.trim().length == 0) {
            clone.remove();
        }
        if(listContent.length > 0) {
            return text.val(null);
        } */
    });
});