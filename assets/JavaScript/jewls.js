$(document).ready(function () {

    var numberOptions = [25, 5, 1, 10];
    var counter = 0;
    var usertotal = 0;
    var wins = 0;
    var loses = 0;

    var randomTarget = Math.floor(Math.random() * 102) + 19;
    console.log("random number: ", randomTarget);

    
    /* First image clicked, add points */
    $('#btn-1').click(function () {
        usertotal += numberOptions[0];
        document.getElementById('total-score').value = usertotal;
        console.log("Current Total: ", usertotal);
        checkScore();
    });

    /* First image clicked, add points */
    $('#btn-2').click(function () {
        usertotal += numberOptions[1];
        document.getElementById('total-score').value = usertotal;
        console.log("Current Total: ", usertotal);
        checkScore();
    });

    /* First image clicked, add points */
    $('#btn-3').click(function () {
        usertotal += numberOptions[2];
        document.getElementById('total-score').value = usertotal;
        console.log("Current Total: ", usertotal);
        checkScore();
    });

    /* First image clicked, add points */
    $('#btn-4').click(function () {
        usertotal += numberOptions[3];
        document.getElementById('total-score').value = usertotal;
        console.log("Current Total: ", usertotal);
        checkScore();
    });

    document.getElementById('target-number').value = randomTarget;

    function checkScore() {
        if (usertotal === randomTarget) {
            wins=0;
            alert("You Win");
            document.getElementById('wins').value = + 1;
            $('usertotal').empty;
             document.location.reload();
            clearInterval(interval);
            

        }
        else if (usertotal > randomTarget) {
            loses=0;
            alert("You lost");
            document.getElementById('loses').value = + 1;
            $('usertotal').empty;
            document.location.reload();
            clearInterval(interval);
        }

    }
   
});