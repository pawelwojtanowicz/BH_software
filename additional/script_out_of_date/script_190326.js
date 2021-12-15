
var lbhLength = document.getElementById("lbh").value;
var ls1Length = document.getElementById("ls1").value;
var ls2Length = document.getElementById("ls2").value;
var hs1Height = document.getElementById("hs1").value;
var hs2Height = document.getElementById("hs2").value;
var lbhLengthNumber = parseFloat(lbhLength);
var ls1LengthNumber = parseFloat(ls1Length);
var ls2LengthNumber = parseFloat(ls2Length);
var hs1HeightNumber = parseFloat(hs1Height);
var hs2HeightNumber = parseFloat(hs2Height);




function aLengthCompute(Length1, Length2) {

    if (document.getElementById("beam_BHM").checked || document.getElementById("beam_BHMd").checked) {
        
        console.log(Length1, typeof Length1); 
        console.log(Length2, typeof Length2); 
        return (Length1 + Length2) / 2;

    } else if (document.getElementById("beam_BHR").checked) {
        
        console.log(Length1, typeof Length1); 
        return Length1 / 2;

    } else {

        alert("Chooooooseeeeee beam type")
        return "it was an alert";
        
    }


}


function calculate() {
    var button = document.getElementById("calculate");
    button.addEventListener("click", function() {
        console.log("dziala");
        var aLength = aLengthCompute(ls1LengthNumber, ls2LengthNumber);
        console.log(aLength)

    })
}


window.onload = function() {
    calculate()

}




/*function checkCompleteness() {

    if (document.getElementById("beam_BHM").checked || document.getElementById("beam_BHMd").checked || document.getElementById("beam_BHR").checked) {

} else {
    alert("Choose something")
}
}

function calculate() {
    var button = document.getElementById("calculate");
    button.addEventListener("click", function() {
        console.log("dziala");
        checkCompleteness()
        var heightHs1 = document.getElementById("hs1").value;
        var heightHs2 = document.getElementById("hs2").value;   
        var result = compute(heightHs1, heightHs2);
        showResult(result);

    })
}

function compute(value1, value2) {
    var numberValue1 = parseFloat(value1);
    var numberValue2 = parseFloat(value2);
    console.log(numberValue1, numberValue2);
    console.log(typeof numberValue1);
    console.log(typeof numberValue2);


    if (document.getElementById("beam_BHM").checked) {

        return (numberValue1 + numberValue2);


    } else if(document.getElementById("beam_BHMd").checked) {

        return (numberValue1 * numberValue2);

    } else if(document.getElementById("beam_BHR").checked) {

        return (numberValue1 / numberValue2);

    } else {

        return null;

    }

}



function showResult(result) {

    console.log("dziala2");

    if (result === null) {
        console.log("g");
        alert("Choose the beam Your Highness");


    } else {

        document.getElementById('add').innerHTML = result;

    }
}



window.onload = function() {
    calculate()

}
*/



/*var result;
function compute(value1, value2) {

    var numberValue1 = parseFloat(value1);
    var numberValue2 = parseFloat(value2);
    console.log(numberValue1, numberValue2)

    if (document.getElementById("beam_BHM").checked) {
        result = numberValue1 + numberValue2;
        document.getElementById('add').innerHTML = result;
        alert("Your result is: " + result);
    } else if(document.getElementById("beam_BHMd").checked) {
        result = numberValue1 * numberValue2;
        document.getElementById('add').innerHTML = result;
        alert("Your result is: " + result);
    } else if(document.getElementById("beam_BHR").checked){
        result = numberValue1 / numberValue2;
        document.getElementById('add').innerHTML = result;
        alert("Your result is: " + result);
    } else {
        alert("Choose the beam type motherfucker");
    }
}


function calculate() {
    var heightHs1 = document.getElementById("hs1").value;
    var heightHs2 = document.getElementById("hs2").value;
    compute(heightHs1, heightHs2);
}



function calculate1() {
    var button = document.getElementById("calculate");
    button.addEventListener("click", function() {
        console.log("dziala");
        calculate();
    })
}


function calculate2() {
    var button = document.getElementById("test_1");
    button.addEventListener("click", function() {
        console.log("dziala");
        console.log(document.getElementById("selector").value);
    })
}


window.onload = function() {
    calculate1()
    calculate2()
}
*/
