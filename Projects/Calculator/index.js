let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenvalue = "";
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText)

        if (buttonText == 'X') {
            buttonText = '*';
            screenvalue += buttonText;
            screen.value = screenvalue;     //screen.value-is screen and screenvalueis is a String
        }
        else if (buttonText == 'C') {
            screenvalue = "";
            screen.value = screenvalue;
        }

        else if (buttonText == '=') {

            screen.value = eval(screenvalue);
        }
        else {
            screenvalue += buttonText;
            screen.value = screenvalue;
        }

    })

}
