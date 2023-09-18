let string = "";
let buttons = document.querySelectorAll('.button');    //Nodelist of buttons

Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', function(e){       //e is storing which button is clicked.
    try {
        if(e.target.innerHTML == '='){                //we are checking which value is stored in e.
            string = eval(string);
            document.querySelector('input').value = string;
          }
        else if(e.target.innerHTML == 'AC'){
            string = ""
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == '('){
            string = string + "(";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == ')'){
            string = string + ")";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == '.'){
            string = string + '.';
            document.querySelector('input').value = string;
        }
        else{
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    }catch{
        document.querySelector('intput').value = 'ERR';
    }
    })
})