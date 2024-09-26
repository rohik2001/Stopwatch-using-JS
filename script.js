window.onload  = function () {

    var second = 00;
    var tens = 00;
    var appendTens = document.getElementById("tens")
    var appendsecond = document.getElementById("seconds")
    var buttonstart = document.getElementById('button-start');
    var buttonstop = document.getElementById('button-stop');
    var buttonreset = document.getElementById('button-reset');
    var Interval ;

    buttonstart.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonstop.onclick = function () {
        clearInterval(Interval);
        
    }

    buttonreset.onclick = function(){
        clearInterval(Interval);
        tens = "00";
        second = "00";
        appendTens.innerHTML = tens;
        appendsecond.innerHTML = second;
    }

    function startTimer () {
        tens++;

        if (tens <= 9){
          appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9){
            appendTens.innerHTML = tens;
        }

        if (tens > 99){
          console.log("second")
          second++;
          appendsecond.innerHTML = "0" + second;
          tens = 0;
          appendTens.innerHTML = "0" + 0;
        }
        if (second > 9){
            appendsecond.innerHTML = second;
        }
    }
}
