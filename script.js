

function calculate() {
    var myBox1 = document.getElementById('box1').value;	
    var result = document.getElementById('result');
    var result2 = document.getElementById('result2');
    var myResult = myBox1 * 1249;
    result.value = myResult;
    result2.value = myResult;
}

function payNowgpay() {
  var amo = document.getElementById("result").value;
  
  window.open("upi://pay?pa=rpy.okcred4xsucc28fdxxnj@icici&pn=TRADER'S HANDBOOK&am=" + amo + "&cu=INR&mc=7277");
  }

function payNowphonepe() {
    var amo = document.getElementById("result").value;

    window.open("phonepe://pay?pa=rpy.okcred4xsucc28fdxxnj@icici&pn=TRADER'S HANDBOOK&am=" + amo + "&cu=INR&mc=7277");
}

function payNowpaytm() {
    var amo = document.getElementById("result").value;
    
    window.open("paytmmp://pay?pa=rpy.okcred4xsucc28fdxxnj@icici&pn=TRADER'S HANDBOOK&am=" + amo + "&cu=INR&mc=7277");
    }




//qr generate start//


function htmlEncode(value) {  
    return $('<div/>').text(value)  
        .html();  
    }  
    $(function () {  
    $('#generate').click(function () {        
        let finalURL = 'https://chart.googleapis.com/chart?cht=qr&chl=' + 'upi://pay?pa=rpy.okcred4xsucc28fdxxnj@icici%26pn=TRADER%27S%20HANDBOOK%26am=' +  htmlEncode($('#result').val()) +
        '&chs=160x160&chld=L|0'   
        $('.qr-code').attr('src', finalURL);  
    });  
    });

//qr generate end//

//Rupee symbol start//

  let input = document.getElementById("result2");

input.addEventListener("keydown", () => {
  let inputValue = input.value;
  if (inputValue) {
    if (inputValue.charAt(0) === "$") {
      inputValue = inputValue.substring(1);
    }
  }
  let newValue = `$${inputValue}`;
  input.value = newValue;
});

//Rupee symbol end//