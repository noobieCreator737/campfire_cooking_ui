let numbers = document.getElementById('number_option');

let price = document.getElementById('price');

// for (const element of numbers) {
//     element.innerHTML = "#" + element.innerHTML * numbers.options[element.length - 1].value;
// }

let result = '';
 for(var i = 0; i < numbers.length; i++){
     price.innerHTML = "#" + price.innerHTML * numbers.option[i].value;
 }

price.innerText = result;

price.innerHTML = "#" + price.innerHTML * numbers.value;
