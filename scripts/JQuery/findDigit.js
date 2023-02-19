//A function that returns a certain digit from a number. The position m of a digit in a number.

$(function () {
    const digitBtn = $('button');

    digitBtn.on('click', function () {
        let n = $('#number').val();
        let m = $('#digit').val();
        let digit = n.toString()[m];

        const findDigit = (n, m) => {
            if (n.toString().length == 0) {
                throw new Error('The number must be given');
            }
            if (n.toString().length == 1) {
                throw new Error('The number must have at leat two digits');
            }
            if (m < 0) {
                throw new Error('The digit must be greater than 0');
            }
            if (m >= n.toString().length) {
                throw new Error('The digit does not exist');
            }

            $('p').text(parseInt(digit));
        }

        findDigit(n, m);
    });
});