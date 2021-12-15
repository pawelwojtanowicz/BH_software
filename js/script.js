window.onload = function() {
  var button = document.getElementById("calculate");
  button.addEventListener("click", calculate);

  // TODO
  //   var ec = document.getElementById("ec");
  //   ec.addEventListener("click", function() {
  //     document.body.className = "ec";
  //     document.getElementById("gammaG").disabled = true;
  //     document.getElementById("gammaG").value = 1.35;
  //   });

  // TODO wrap in separate function
  markHeightSelection();
  var hc = document.getElementById("slab_HC");
  var monolithic = document.getElementById("slab_monolithic");
  hc.addEventListener("click", markHeightSelection);
  monolithic.addEventListener("click", markHeightSelection);
  // TODO end
};

function calculate() {
  var lbhLength = document.getElementById("lbh").value;
  var ls1Length = document.getElementById("ls1").value;
  var ls2Length = document.getElementById("ls2").value;
  var hs1Height = document.getElementById("hs1").value;
  var hs2Height = document.getElementById("hs2").value;
  var gEkLoad = document.getElementById("gEk").value;
  var qEkLoad = document.getElementById("qEk").value;
  var dEkHC1Load = document.getElementById("dEk1HC").value;
  var dEkHC2Load = document.getElementById("dEk2HC").value;
  var gGammaUser = document.getElementById("gammaG").value;
  var qGammaUser = document.getElementById("gammaQ").value;
  var dGammaUser = document.getElementById("gammaD").value;
  var gdGammaEC = 1.35;
  var qGammaEC = 1.5;
  var concreteWeight = 25;
  var hs1HCHeight = document.getElementById("selector1").value;
  var hs2HCHeight = document.getElementById("selector2").value;

  var lbhLengthNumber = parseFloat(lbhLength);
  var ls1LengthNumber = parseFloat(ls1Length);
  var ls2LengthNumber = parseFloat(ls2Length);
  var hs1HeightNumber = parseFloat(hs1Height);
  var hs2HeightNumber = parseFloat(hs2Height);
  var gEkLoadNumber = parseFloat(gEkLoad);
  var qEkLoadNumber = parseFloat(qEkLoad);
  var dEk1HCLoadNumber = parseFloat(dEkHC1Load);
  var dEk2HCLoadNumber = parseFloat(dEkHC2Load);
  var gGammaUserNumber = parseFloat(gGammaUser);
  var qGammaUserNumber = parseFloat(qGammaUser);
  var dGammaUserNumber = parseFloat(dGammaUser);

  var inputs = {
    beamType: getBeamType()
  };

  console.log("it works");

  var a1Length = aLengthCompute(ls1LengthNumber);
  console.log("a1=", a1Length);

  var a2Length = aLengthCompute(ls2LengthNumber);
  console.log("a2=", a2Length);

  var gammaG = getGamma(gGammaUserNumber, gdGammaEC);
  console.log("gammaG=", gammaG, typeof gammaG);

  var gammaQ = getGamma(qGammaUserNumber, qGammaEC);
  console.log("gammaQ=", gammaQ, typeof gammaQ);

  var gammaD = getGamma(dGammaUserNumber, gdGammaEC);
  console.log("gammaD=", gammaD, typeof gammaD);

  var steadyDesignLoad = steadyAndUsefulDesignLoadCompute(
    gammaG,
    gEkLoadNumber
  );
  console.log("staedyDesignLoad=", steadyDesignLoad, typeof steadyDesignLoad);

  var usefulDesignLoad = steadyAndUsefulDesignLoadCompute(
    gammaQ,
    qEkLoadNumber
  );
  console.log("usefulDesignLoad=", usefulDesignLoad, typeof steadyDesignLoad);

  var monolithicDeadDesignLoad1 = monolithicDeadDesignLoadCompute(
    hs1HeightNumber,
    concreteWeight,
    gammaD
  );
  console.log(
    "monolithicDeadDesignLoad1=",
    monolithicDeadDesignLoad1,
    typeof monolithicDeadDesignLoad1
  );

  var monolithicDeadDesignLoad2 = monolithicDeadDesignLoadCompute(
    hs2HeightNumber,
    concreteWeight,
    gammaD
  );
  console.log(
    "monolithicDeadDesignLoad2=",
    monolithicDeadDesignLoad2,
    typeof monolithicDeadDesignLoad2
  );

  var HCSlabDeadDesignLoad1 = HCSlabDeadDesignLoadCompute(
    gammaD,
    dEk1HCLoadNumber
  );
  console.log(
    "HCSlabDeadDesignLoad1=",
    HCSlabDeadDesignLoad1,
    typeof HCSlabDeadDesignLoad1
  );

  var HCSlabDeadDesignLoad2 = HCSlabDeadDesignLoadCompute(
    gammaD,
    dEk2HCLoadNumber
  );
  console.log(
    "HCSlabDeadDesignLoad2=",
    HCSlabDeadDesignLoad2,
    typeof HCSlabDeadDesignLoad2
  );

  console.log(hs1HCHeight, typeof hs1HCHeight);
  console.log(hs2HCHeight, typeof hs2HCHeight);

  var ConcretedGroutsWeight1 = getConcretedGroutsWeight(hs1HCHeight);
  console.log(
    "ConcretedGroutsWeight1=",
    ConcretedGroutsWeight1,
    typeof ConcretedGroutsWeight1
  );

  var ConcretedGroutsWeight2 = getConcretedGroutsWeight(hs2HCHeight);
  console.log(
    "ConcretedGroutsWeight2=",
    ConcretedGroutsWeight2,
    typeof ConcretedGroutsWeight2
  );

  console.log(slabsHC.HC150.weight_kN_m2);

  var linearDesignLoad1Monolithic = getLinearDesignLoad(
    steadyDesignLoad,
    usefulDesignLoad,
    monolithicDeadDesignLoad1,
    0,
    a1Length
  );
  console.log(
    "linearDesignLoad1Monolithic=",
    linearDesignLoad1Monolithic,
    typeof linearDesignLoad1Monolithic
  );

  var linearDesignLoad2Monolithic = getLinearDesignLoad(
    steadyDesignLoad,
    usefulDesignLoad,
    monolithicDeadDesignLoad2,
    0,
    a2Length
  );
  console.log(
    "linearDesignLoad2Monolithic=",
    linearDesignLoad2Monolithic,
    typeof linearDesignLoad1Monolithic
  );

  var linearDesignLoad1HC = getLinearDesignLoad(
    steadyDesignLoad,
    usefulDesignLoad,
    HCSlabDeadDesignLoad1,
    ConcretedGroutsWeight1,
    a1Length
  );
  console.log(
    "linearDesignLoad1HC=",
    linearDesignLoad1HC,
    typeof linearDesignLoad1HC
  );

  var linearDesignLoad2HC = getLinearDesignLoad(
    steadyDesignLoad,
    usefulDesignLoad,
    HCSlabDeadDesignLoad2,
    ConcretedGroutsWeight2,
    a2Length
  );
  console.log(
    "linearDesignLoad2HC=",
    linearDesignLoad2HC,
    typeof linearDesignLoad2HC
  );

  var totalLinearDesignLoadMonolithicEdge = getTotalLinearDesignLoad(
    linearDesignLoad1Monolithic,
    0
  );
  console.log(
    "totalLinearDesignLoadMonolithicEdge=",
    totalLinearDesignLoadMonolithicEdge,
    typeof totalLinearDesignLoadMonolithicEdge
  );

  var totalLinearDesignLoadMonolithicMiddle = getTotalLinearDesignLoad(
    linearDesignLoad1Monolithic,
    linearDesignLoad2Monolithic
  );
  console.log(
    "totalLinearDesignLoadMonolithicMiddle=",
    totalLinearDesignLoadMonolithicMiddle,
    typeof totalLinearDesignLoadMonolithicMiddle
  );

  var totalLinearDesignLoadHCEdge = getTotalLinearDesignLoad(
    linearDesignLoad1HC,
    0
  );
  console.log(
    "totalLinearDesignLoadHCEdge=",
    totalLinearDesignLoadHCEdge,
    typeof totalLinearDesignLoadHCEdge
  );

  var totalLinearDesignLoadHCMiddle = getTotalLinearDesignLoad(
    linearDesignLoad1HC,
    linearDesignLoad2HC
  );
  console.log(
    "ttotalLinearDesignLoadHCMiddle=",
    totalLinearDesignLoadHCMiddle,
    typeof totalLinearDesignLoadHCMiddle
  );

  var finalLinaerLoad = getFinalLinaerLoad(
    totalLinearDesignLoadHCMiddle,
    totalLinearDesignLoadHCEdge,
    totalLinearDesignLoadMonolithicMiddle,
    totalLinearDesignLoadMonolithicEdge
  );
  console.log("finalLinaerLoad=", finalLinaerLoad, typeof finalLinaerLoad);

  var linearCapacity = getLinearCapacity(
    beams.BHM20200.m,
    lbhLengthNumber,
    beams.BHM20200.w
  );
  console.log("linearCapacity=", linearCapacity, typeof LinearCapacity);

  var results = {};

  Object.keys(beams).forEach(function(key) {
    var beam = beams[key];
    var utilization = getRatioLinearCapacityFinalLinearLoadVar2(
      beam.m,
      lbhLengthNumber,
      beam.w,
      finalLinaerLoad
    );

    if (beam.type === inputs.beamType) {
      results[key] = {
        "Yes/No": utilization <= 100,
        Type: beam.type,
        Size: beam.size,
        Utilization: Math.round(utilization) + " %",
        Mrd: Math.round(beam.m) + " kNm"
      };
    }
  });

  console.log("results", results);

  writeResultsToTable(results);
}

function getRatioLinearCapacityFinalLinearLoadVar2(m, l, g, FLL) {
  return ((FLL + g) / ((8 * m) / (l * l))) * 100;
}

function getRatioLinearCapacityFinalLinearLoadVar1(m, l, g, FLL) {
  return (FLL / ((8 * m) / (l * l) - g)) * 100;
}

function getLinearCapacity(m, l, g) {
  return (8 * m) / (l * l) - g;
}

function getFinalLinaerLoad(
  HCMiddle,
  HCEdge,
  MonolithicMiddle,
  MonolithicEdge
) {
  var isBHM = document.getElementById("beam_BHM").checked;
  var isBHMd = document.getElementById("beam_BHMd").checked;
  var isBHR = document.getElementById("beam_BHR").checked;
  var isHC = document.getElementById("slab_HC").checked;
  var isMonolithic = document.getElementById("slab_monolithic").checked;

  if ((isBHM || isBHMd) && isHC) {
    return HCMiddle;
  } else if ((isBHM || isBHMd) && isMonolithic) {
    return MonolithicMiddle;
  } else if (isBHR && isHC) {
    return HCEdge;
  } else if (isBHR && isMonolithic) {
    return MonolithicEdge;
  } else {
    alert("please - choose something");
  }
}

function getTotalLinearDesignLoad(linear1, linear2) {
  return linear1 + linear2;
}

function getLinearDesignLoad(
  steadyLoad,
  usefulLoad,
  deadLoad1,
  deadLoad2,
  aLenght
) {
  return (steadyLoad + usefulLoad + deadLoad1) * aLenght + deadLoad2;
}

function getConcretedGroutsWeight(name) {
  if (name == "not selected") {
    alert("chose height of the HC slab");
    return null;
  } else return slabsHC[name].weightConcreteHolesOneSite_kN_m;
}

function getGamma(userGamma, ECvalue) {
  var isEc = document.getElementById("ec").checked;
  var isUser = document.getElementById("user").checked;

  if (isEc) {
    return ECvalue;
  } else if (isUser) {
    return userGamma;
  } else {
    alert("Chooooooseeeeee safety factor");
    return "it was an alert";
  }
}

function aLengthCompute(length) {
  return length / 2;
}

function steadyAndUsefulDesignLoadCompute(loadFactor, load) {
  return loadFactor * load;
}

function monolithicDeadDesignLoadCompute(
  hMonolithic,
  concreteWeight,
  loadFactor
) {
  return hMonolithic * 0.001 * concreteWeight * loadFactor;
}

function HCSlabDeadDesignLoadCompute(loadFactor, load) {
  return loadFactor * load;
}

function getBeamType() {
  var isBHM = document.getElementById("beam_BHM").checked;
  var isBHMd = document.getElementById("beam_BHMd").checked;
  var isBHR = document.getElementById("beam_BHR").checked;

  if (isBHM) {
    return "BHM";
  } else if (isBHMd) {
    return "BHM(d)";
  } else if (isBHR) {
    return "BHR";
  } else {
    return null;
  }
}

function writeResultsToTable(results) {
  var caret =
    '<i class="fas fa-caret-right" style="font-size:23px;color:#C0C0C0;" />';
  var no = '<i class="fas fa-times" style="font-size:23px;color:#FF0000;"></i>';
  var yes =
    '<i class="fas fa-check" style="font-size:23px;color:#00FF00;"></i>';
  var table = document.getElementById("results-table-content");
  clearTable(table);

  Object.keys(results).forEach(function(key) {
    var result = results[key];

    var row = table.insertRow();
    var cell_1 = row.insertCell();
    var cell_2 = row.insertCell();
    var cell_3 = row.insertCell();
    var cell_4 = row.insertCell();
    var cell_5 = row.insertCell();
    var cell_6 = row.insertCell();

    cell_1.innerHTML = caret;
    cell_2.innerHTML = result["Yes/No"] ? yes : no;
    cell_3.innerText = result["Type"];
    cell_4.innerText = result["Size"];
    cell_5.innerText = result["Mrd"];
    cell_6.innerText = result["Utilization"];
  });

  function clearTable(table) {
    table.innerHTML = "";
  }
}

function markHeightSelection() {
  var isHc = document.getElementById("slab_HC").checked;
  var isMonolithic = document.getElementById("slab_monolithic").checked;

  if (isHc) {
    document.body.className = "hc-selected";
  } else if (isMonolithic) {
    document.body.className = "monolithic-selected";
  }
}
