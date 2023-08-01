//A function that truncates a piece of text
$(function () {
    $('.truncate-btn').on('click', function () {
        let text = $('#textContent').val();
        let num = $('#numberValue').val();

        const truncateText = (text, num) => {
            if(text.length == 0) {
                throw new Error('The text cannot be empty');
            }
            if(num <= 0) {
                throw new Error('n must be greater or equal to 1');
            }

            let splitText = text.trim().split('');
            let truncatedText = splitText.splice(0, Number).join('');

            $('.result').text(truncatedText);
        }

        truncateText(text, num);
    });
});