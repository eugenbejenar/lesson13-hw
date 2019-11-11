var x = parseInt(prompt('Please enter X', 0));

var y = parseInt(prompt('Please enter Y', 0));

var result = Math.pow(x, y);

var textResult = 'Result of x = ' + x + ' in power of n = ' + y + ' equals ' + result;



var el = document.getElementById('div-1');
var create = document.createElement('h2');
create.innerHTML = textResult;
el.appendChild(create);


alert(textResult);