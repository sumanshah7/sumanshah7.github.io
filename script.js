let string = "";
let memory = 0;

let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      string = eval(string);
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML == 'C') {
      string = "";
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML == 'M+') {
      memory += parseInt(string);
    } else if (e.target.innerHTML == 'M-') {
      memory -= parseInt(string);
    } else if (e.target.innerHTML == 'MC') {
      memory = 0;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  });
});
