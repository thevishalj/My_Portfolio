const input = document.getElementById('my-input');
input.value = '0';

let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((buttons)=>{
    buttons.addEventListerner('click', (e)=>{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
    })
});
