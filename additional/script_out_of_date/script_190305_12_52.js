
var beamType;
function setBeamType() {

    if (document.getElementById("beam_BHM").checked) {
        beamType = document.getElementById("beam_BHM").value;
    } else if(document.getElementById("beam_BHMd").checked) {
        beamType = document.getElementById("beam_BHMd").value;
    } else if(document.getElementById("beam_BHR").checked) {
        beamType = document.getElementById("beam_BHR").value;
    } else {
        beamType = null;
    }
}



function add() {
    var heightHs1 = document.getElementById("hs1").value;
    var heightHs2 = document.getElementById("hs2").value;
    var sum;
        heightHs1 = parseFloat(heightHs1);
        heightHs2 = parseFloat(heightHs2);
        console.log(heightHs1, heightHs2, typeof heightHs1, typeof heightHs2, heightHs1 + heightHs2);
        sum = heightHs1 + heightHs2;
        alert("Your result is: " + sum);
}

function add1() {
    var heightHs1 = document.getElementById("hs1").value;
    var heightHs2 = document.getElementById("hs2").value;
    var sum;
        heightHs1 = parseFloat(heightHs1);
        heightHs2 = parseFloat(heightHs2);
        console.log(heightHs1, heightHs2, typeof heightHs1, typeof heightHs2, heightHs1 + heightHs2);
        sum = heightHs1 + heightHs2;
        document.getElementById('add').innerHTML=sum;
}

/*function addLepiej (value1, value2) {
    var sum;
    var numberValue1 = parseFloat(value1);
    var numberValue2 = parseFloat(value2);
    console.log(value1, value2, typeof value1, typeof value2, value1 + value2)
    sum = numberValue1 + numberValue2;
    document.getElementById('add').innerHTML=sum;
    
}
    var heightHs1 = document.getElementById("hs1").value;
    var heightHs2 = document.getElementById("hs2").value;

addLepiej(heightHs1, heightHs2)*/

function multiply() {
    var heightHs1 = document.getElementById("hs1").value;
    var heightHs2 = document.getElementById("hs2").value;
    var multiplication;
        heightHs1 = parseFloat(heightHs1);
        heightHs2 = parseFloat(heightHs2);
        console.log(heightHs1, heightHs2, typeof heightHs1, typeof heightHs2, heightHs1 * heightHs2);
        multiplication = heightHs1 * heightHs2;
        alert("Your result is: " + multiplication);
}
        
function multiply1() {
    var heightHs1 = document.getElementById("hs1").value;
    var heightHs2 = document.getElementById("hs2").value;
    var multiplication;
        heightHs1 = parseFloat(heightHs1);
        heightHs2 = parseFloat(heightHs2);
        console.log(heightHs1, heightHs2, typeof heightHs1, typeof heightHs2, heightHs1 * heightHs2);
        multiplication = heightHs1 * heightHs2;
        document.getElementById('add').innerHTML=multiplication;
}

function divide() {
    var heightHs1 = document.getElementById("hs1").value;
    var heightHs2 = document.getElementById("hs2").value;
    var division;
        heightHs1 = parseFloat(heightHs1);
        heightHs2 = parseFloat(heightHs2);
        console.log(heightHs1, heightHs2, typeof heightHs1, typeof heightHs2, heightHs1 / heightHs2);
        division = heightHs1 / heightHs2;
        alert("Your result is: " + division);
}

function divide1() {
    var heightHs1 = document.getElementById("hs1").value;
    var heightHs2 = document.getElementById("hs2").value;
    var division;
        heightHs1 = parseFloat(heightHs1);
        heightHs2 = parseFloat(heightHs2);
        console.log(heightHs1, heightHs2, typeof heightHs1, typeof heightHs2, heightHs1 / heightHs2);
        division = heightHs1 / heightHs2;
        document.getElementById('add').innerHTML=division;
}

function setBeamType2() {

    if (document.getElementById("beam_BHM").checked) {
        add();
    } else if(document.getElementById("beam_BHMd").checked) {
        multiply();
    } else if(document.getElementById("beam_BHR").checked) {
        divide();
    } else {
        alert("Choose the beam type motherfucker");
    }
}

function setBeamType3() {

    if (document.getElementById("beam_BHM").checked) {
        add1();
    } else if(document.getElementById("beam_BHMd").checked) {
        multiply1();
    } else if(document.getElementById("beam_BHR").checked) {
        divide1();
    } else {
        alert("Choose the beam type motherfucker");
    }
}

function calculate() {
    var button = document.getElementById("calculate")
    button.addEventListener("click", function() {
        alert('it works');
    })
}

function calculate1() {
    var button = document.getElementById("pdf")
    button.addEventListener("click", function() {
        alert(document.getElementById("lbh").value);
    })
}

function calculate2() {
    var button = document.getElementById("clear_data")
    button.addEventListener("click", function() {
        alert('LBH=' + document.getElementById("lbh").value);
    })
}


function calculate3() {
    var button = document.getElementById("test_1");
    button.addEventListener("click", function() {
        setBeamType();
        alert(beamType);

    })
}

function calculate4() {
    var button = document.getElementById("test_2");
    button.addEventListener("click", function() {
        console.log('hs1=' + document.getElementById("hs1").value + ', hs2=' + document.getElementById("hs2").value)
    })
}


function calculate5() {
    var button = document.getElementById("test_3");
    button.addEventListener("click", function() {
        var hs1 = document.getElementById("hs1").value;
        var hs2 = document.getElementById("hs2").value;
        hs1 = parseFloat(hs1);
        hs2 = parseFloat(hs2);
        console.log(hs1, hs2, typeof hs1, typeof hs2, hs1 + hs2);
    })
}

function calculate6() {
    var button = document.getElementById("test_4");
    button.addEventListener("click", function() {
        setBeamType2(); 

    })
}

function calculate7() {
    var button = document.getElementById("test_5");
    button.addEventListener("click", function() {
        setBeamType3(); 

    })
}

window.onload = function() {
    calculate()
    calculate1()
    calculate2()
    calculate3()
    calculate4()
    calculate5()
    calculate6()
    calculate7()
    


}


