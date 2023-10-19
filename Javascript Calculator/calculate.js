let input = document.getElementById('input-box');
let button = document.querySelectorAll('button');

let string = "";
let arr = Array.from(button);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;
        if (buttonText === '='){
            //Use a try-catch block to handle potential parsing errors
            try{
                // Use Function constructor for basic expression evaluation
                string = new Function('return ' + string)();
                input.value = string;
            } catch (error) {
                input.value = 'Error';
            }
        }
        else if (buttonText == 'AC'){
            string = "";
            input.value = string;
        }
        else if (buttonText == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += buttonText;
            input.value = string;
        }
    })
});

