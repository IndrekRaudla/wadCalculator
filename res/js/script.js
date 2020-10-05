let counter = 0;
let operator = "";
let number1 = 0;
let number2 = 0;
let stepCounter = 1;
//counterTag.text(value);
//counter += Number.parseInt(value);

$(function () {

    let counterTag = $('#counter');

    $('.button').click(function () {

        let value = $(this).attr('data-value');

		if (stepCounter == 1 || stepCounter == 3) {
			if (!isNaN(Number.parseInt(value))) {
				counterTag.text(value);
				if (stepCounter == 1) {
					number1 = Number.parseInt(value);
					stepCounter++;
				}
				if (stepCounter == 3) {
					number3 = Number.parseInt(value);
					stepCounter++;
				}
			} else {
				counterTag.text("0");
			}
		} else if (stepCounter == 2) {
			if (!isNaN(Number.parseInt(value))) {
				operator = value;
				counterTag.text(operator);
				stepCounter++;

			}
		}


    });

    $('#reset').click(function () {

        counter = 0;
		actionCounter = 0;

        counterTag.text(counter);

    });

});
