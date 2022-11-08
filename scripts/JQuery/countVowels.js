$(function () {
    let countBtn = $('.countBtn');

    countBtn.on('click', function () {
        let text = $('#text').val();

        const countVowels = text => {
            if (text.length == 0) {
                throw new Error('The text cannot be empty');
            }

            let count = 0;

            for (let i = 0; i < text.length; i++) {
                let c = text.charAt(i);
                if (isVowel(c)) {
                    count++;
                }
            }

            $('p').text(count);
        }

        const isVowel = c => {
            let v = (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' || c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U');

            return v;
        }

        countVowels(text)
    });
});