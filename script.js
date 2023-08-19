let string = '';
let buttons = document.querySelectorAll('button');
let input = document.getElementById('inputBox');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }

        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }


        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            input.value = string;
        };

    })
})