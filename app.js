document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('button');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
  
        const validInputs = /[0-9./*+-]/;
        if (validInputs.test(value)) {
          display.value += value;
        } else if (value === '=') {
          try {
            display.value = eval(display.value);
          } catch (error) {
            display.value = 'Error';
          }
        } else if (value === 'AC') {
          display.value = '';
        } else if (value === 'DEL') {
          display.value = display.value.slice(0, -1);
        }
      });
    });
  
    display.addEventListener('input', function() {
      const regex = /[^0-9./*+-]/g;
      this.value = this.value.replace(regex, '');
    });
  
    // The code to handle keyboard input

    document.addEventListener('keydown', function(event) {
      const key = event.key;
      const validKeys = /[0-9./*+\-=]|Backspace|Enter|Escape/;
  
      if (validKeys.test(key)) {
        if (key === 'Enter') {
          try {
            display.value = eval(display.value);
          } catch (error) {
            display.value = 'Error';
          }
        } else if (key === 'Escape') {
          display.value = '';
        } else if (key === 'Backspace') {
          display.value = display.value.slice(0, -1);
        } else {
          display.value += key;
        }
      }
    });
  });
  