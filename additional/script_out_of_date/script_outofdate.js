window.onload = function() {
  var calculateButton = document.querySelector("#calculate");

  // jak klikniesz guzik to:
  calculateButton.addEventListener("click", function() {
    // pobierz dane
    var inputData = getInputData();
    console.log("inputData:", inputData);

    // wybierz pasujące belki na podstawie danych
    var suitableBeams = getSuitableBeams(inputData);
    console.log("suitableBeams", suitableBeams);

    // pokaz rezultaty na podstawie pasujacych belek
    showResults(suitableBeams);
  });
};

// HELPER FUNCTIONS
function getInputData() {
  // initialize data object, that the function will return
  var data = {};

  // add other properties to the object
  data.beamType = getCheckedRadiobutton("beam_choice");
  data.slabType = getCheckedRadiobutton("slab_choice");
  data.safetyFactor = getCheckedRadiobutton("safety_factor_choice");
  data.safetyFactor = getCheckedRadiobutton("safety_factor_choice");
  data.producer = getSelectedDropdown("producer");
  data.lbh = getNumericInput("lbh");
  data.ls1 = getNumericInput("ls1");
  data.ls2 = getNumericInput("ls2");
  data.hs1 = getNumericInput("hs1");
  data.hs2 = getNumericInput("hs2");

  return data;
}

function getNumericInput(name) {
  var input = document.querySelector("input[name=" + name + "]");

  if (input) {
    return Number(input.value);
  } else {
    return; // some assumptions about error handling should be taken
  }
}

function getCheckedRadiobutton(name) {
  var input = document.querySelector("input[name=" + name + "]:checked");

  if (input) {
    return input.value;
  } else {
    return "not selected";
  }
}

function getSelectedDropdown(name) {
  var select = document.querySelector("select[name=" + name + "]");

  if (select) {
    return select.value;
  } else {
    return "not selected";
  }
}

function getSuitableBeams(inputData) {
  var beams = getBeamsJson();
  var suitableBeams = [];

  for (var i = 0; i < beams.length; i++) {
    var thisBeam = beams[i];
    if (isSuitableBeam(thisBeam, inputData)) {
      suitableBeams.push(thisBeam);
    }
  }

  return suitableBeams;
}

function isSuitableBeam(beam, inputData) {
  var isSuitable = true;

  var area = getArea(inputData);

  if (area < beam.area) isSuitable = false;
  if (inputData.producer !== "not selected") {
    if (inputData.producer !== beam.producer) isSuitable = false;
  }
  // zacznijmy od takiego czegos :) pozniej zrobimy ladniej

  return isSuitable;
}

function getArea(inputData) {
  var area;
  var beamChoice = inputData["beam_choice"];

  if (beamChoice === "BHM") {
    area = inputData.hs1 * inputData.ls1;
  } else if (beamChoice === "BHMd") {
    area = inputData.hs2 * inputData.ls2;
  } else {
    area = inputData.hs1 * inputData.ls2;
  }

  return area;
}

function showResults(suitableBeams) {
  var showResults = document.querySelector("#show-results");
  showResults.innerHTML = "";

  if (suitableBeams.length) {
    for (var i = 0; i < suitableBeams.length; i++) {
      var thisBeam = suitableBeams[i];
      showResults.innerHTML =
        showResults.innerHTML + "<div>" + thisBeam.name + "<div>";
    }
  } else {
    showResults.innerHTML = "brak belek spełniających założone warunki";
  }
}

function getBeamsJson() {
  var beams = [
    {
      name: "belka bh1",
      area: 10000,
      monolithic: true,
      producer: "Betard"
    },
    {
      name: "belka bh2",
      area: 10,
      monolithic: false,
      producer: "Konbet"
    },
    {
      name: "belka bh3",
      area: 5,
      monolithic: false,
      producer: "Pekabex"
    }
  ];

  return beams;
}
