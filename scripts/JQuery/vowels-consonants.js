$(function () {
    let check = $('.check-btn');
    let textWarning = $('.alert-text');
    textWarning.hide();

    check.on('click', function () {
        let text =  $('#textField').val().replace(/\d+/g,'').replace(/\s+/g, ''); // Will exclude number characters and white spaces. It will not count them in.

        const countEachLetter = text => {
            if(text.length == 0) {
                textWarning.show();
            }
            if(text.length > 0) {
                textWarning.hide();
            }

            let count = 0;

            for(let i = 0; i < text.length; i++) {
                let c = text.charAt(i);
        
                if(isVowel(c)) {
                    count++;
                }
            }

            $('.vowels-number').text(count);
            $('.cons-number').text(text.length - count);
        }

        const isVowel = c => {
            let v = (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' || c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U');

            return v;
        }

        countEachLetter(text);
    });
});