console.log('debugging');
var sauceFlag = 1;

while (sauceFlag ==1) {
  sauceFlag = prompt('Do yu need sauce? Please say yes or no');

  if (sauceFlag == 'yes') {
    var countSauce = parseInt(prompt('How many sauce?Please enter a number'));
    console.log(countSauce);
    sauceFlag = 0;
    document.getElementById('result').textContent = 'You asked for ' + countSauce + ' sauces';

    if (countSauce > 10) {
      sauceFlag = 1;
      alert("Oh! too many!");
      continue;
    }
  }
  if (sauceFlag == 0) {
    sauceFlag = 0;
  }
}
