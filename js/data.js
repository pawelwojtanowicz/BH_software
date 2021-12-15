var slabsHC = {
  HC150: {
    name: "HC150",
    weight_kN_m2: 2.64,
    weightConcreteHolesOneSite_kN_m: 0.64
  },

  HC160: {
    name: "HC160",
    weight_kN_m2: 2.64,
    weightConcreteHolesOneSite_kN_m: 0.64
  },

  HC200: {
    name: "HC200",
    weight_kN_m2: 3.27,
    weightConcreteHolesOneSite_kN_m: 0.95
  },

  HC265: {
    name: "HC265",
    weight_kN_m2: 3.82,
    weightConcreteHolesOneSite_kN_m: 1.45
  },

  HC320: {
    name: "HC320",
    weight_kN_m2: 4.54,
    weightConcreteHolesOneSite_kN_m: 2.28
  },

  HC400: {
    name: "HC400",
    weight_kN_m2: 4.95,
    weightConcreteHolesOneSite_kN_m: 3.11
  },

  HC500: {
    name: "HC500",
    weight_kN_m2: 6.7,
    weightConcreteHolesOneSite_kN_m: 3.77
  }
};

var beams = {
  BHM20200: {
    name: "BHM 20-200",
    type: "BHM",
    size: "20-200",
    w: 2.41,
    m: 329.08,
    s: 469.57
  },

  BHM20250: {
    name: "BHM 20-250",
    type: "BHM",
    size: "20-250",
    w: 2.83,
    m: 409.61,
    s: 469.57
  },

  BHM20300: {
    name: "BHM 20-300",
    type: "BHM",
    size: "20-300",
    w: 3.24,
    m: 488.57,
    s: 469.57
  },

  BHM27300: {
    name: "BHM 27-300",
    type: "BHM",
    size: "27-300",
    w: 4.34,
    m: 893.23,
    s: 597.63
  },

  BHM27350: {
    name: "BHM 27-350",
    type: "BHM",
    size: "27-350",
    w: 4.91,
    m: 1021.13,
    s: 597.63
  },

  BHM27400: {
    name: "BHM 27-400",
    type: "BHM",
    size: "27-400",
    w: 5.56,
    m: 1173.53,
    s: 597.63
  },

  BHM32350: {
    name: "BHM 32-350",
    type: "BHM",
    size: "32-350",
    w: 5.83,
    m: 1392.11,
    s: 1013.84
  },

  BHM32400: {
    name: "BHM 32-400",
    type: "BHM",
    size: "32-400",
    w: 6.87,
    m: 1522.86,
    s: 1013.84
  },

  BHM32450: {
    name: "BHM 32-450",
    type: "BHM",
    size: "32-450",
    w: 7.55,
    m: 1604.14,
    s: 1013.84
  },

  BHM40400: {
    name: "BHM 40-400",
    type: "BHM",
    size: "40-400",
    w: 8.45,
    m: 2231.48,
    s: 1253.96
  },

  BHM40450: {
    name: "BHM 40-450",
    type: "BHM",
    size: "40-450",
    w: 9.29,
    m: 2385.39,
    s: 1253.96
  },

  BHM40500: {
    name: "BHM 40-500",
    type: "BHM",
    size: "40-500",
    w: 10.26,
    m: 2935.6,
    s: 1504.75
  },

  BHM45400: {
    name: "BHM 45-400",
    type: "BHM",
    size: "45-400",
    w: 9.13,
    m: 2647.24,
    s: 1253.96
  },

  BHM45450: {
    name: "BHM 45-450",
    type: "BHM",
    size: "45-450",
    w: 10.68,
    m: 3019.53,
    s: 1664.83
  },

  BHM45500: {
    name: "BHM 45-500",
    type: "BHM",
    size: "45-500",
    w: 11.63,
    m: 3352.17,
    s: 1664.83
  },

  BHM50500: {
    name: "BHM 50-500",
    type: "BHM",
    size: "50-500",
    w: 12.53,
    m: 4022.49,
    s: 1824.91
  },

  BHM50550: {
    name: "BHM 50-550",
    type: "BHM",
    size: "50-550",
    w: 13.81,
    m: 4336.15,
    s: 2281.14
  },

  BHM50650: {
    name: "BHM 50-650",
    type: "BHM",
    size: "50-650",
    w: 15.86,
    m: 4926.79,
    s: 2281.14
  },

  BHMd20200: {
    name: "BHM(d) 20-200",
    type: "BHM(d)",
    size: "20-200",
    w: 2.41,
    m: 329.08,
    s: 469.57
  },

  BHMd20250: {
    name: "BHM(d) 20-250",
    type: "BHM(d)",
    size: "20-250",
    w: 2.83,
    m: 409.61,
    s: 469.57
  },

  BHMd20300: {
    name: "BHM(d) 20-300",
    type: "BHM(d)",
    size: "20-300",
    w: 3.24,
    m: 488.57,
    s: 469.57
  },

  BHMd27300: {
    name: "BHM(d) 27-300",
    type: "BHM(d)",
    size: "27-300",
    w: 4.34,
    m: 893.23,
    s: 597.63
  },

  BHMd27350: {
    name: "BHM(d) 27-350",
    type: "BHM(d)",
    size: "27-350",
    w: 4.91,
    m: 1021.13,
    s: 597.63
  },

  BHMd27400: {
    name: "BHM(d) 27-400",
    type: "BHM(d)",
    size: "27-400",
    w: 5.56,
    m: 1173.53,
    s: 597.63
  },

  BHMd32350: {
    name: "BHM(d) 32-350",
    type: "BHM(d)",
    size: "32-350",
    w: 5.83,
    m: 1392.11,
    s: 1013.84
  },

  BHMd32400: {
    name: "BHM(d) 32-400",
    type: "BHM(d)",
    size: "32-400",
    w: 6.87,
    m: 1522.86,
    s: 1013.84
  },

  BHMd32450: {
    name: "BHM(d) 32-450",
    type: "BHM(d)",
    size: "32-450",
    w: 7.55,
    m: 1604.14,
    s: 1013.84
  },

  BHMd40400: {
    name: "BHM(d) 40-400",
    type: "BHM(d)",
    size: "40-400",
    w: 8.45,
    m: 2231.48,
    s: 1253.96
  },

  BHMd40450: {
    name: "BHM(d) 40-450",
    type: "BHM(d)",
    size: "40-450",
    w: 9.29,
    m: 2385.39,
    s: 1253.96
  },

  BHMd40500: {
    name: "BHM(d) 40-500",
    type: "BHM(d)",
    size: "40-500",
    w: 10.26,
    m: 2935.6,
    s: 1504.75
  },

  BHMd45400: {
    name: "BHM(d) 45-400",
    type: "BHM(d)",
    size: "45-400",
    w: 9.13,
    m: 2647.24,
    s: 1253.96
  },

  BHMd45450: {
    name: "BHM(d) 45-450",
    type: "BHM(d)",
    size: "45-450",
    w: 10.68,
    m: 3019.53,
    s: 1664.83
  },

  BHMd45500: {
    name: "BHM(d) 45-500",
    type: "BHM(d)",
    size: "45-500",
    w: 11.63,
    m: 3352.17,
    s: 1664.83
  },

  BHMd50500: {
    name: "BHM(d) 50-500",
    type: "BHM(d)",
    size: "50-500",
    w: 12.53,
    m: 4022.49,
    s: 1824.91
  },

  BHMd50550: {
    name: "BHM(d) 50-550",
    type: "BHM(d)",
    size: "50-550",
    w: 13.81,
    m: 4336.15,
    s: 2281.14
  },

  BHMd50650: {
    name: "BHM(d) 50-650",
    type: "BHM(d)",
    size: "50-650",
    w: 15.86,
    m: 4926.79,
    s: 2281.14
  },

  BHR20200: {
    name: "BHR 20-200",
    type: "BHR",
    size: "20-200",
    w: 2.41,
    m: 329.08,
    s: 469.57
  },

  BHR20250: {
    name: "BHR 20-250",
    type: "BHR",
    size: "20-250",
    w: 2.83,
    m: 409.61,
    s: 469.57
  },

  BHR20300: {
    name: "BHR 20-300",
    type: "BHR",
    size: "20-300",
    w: 3.24,
    m: 488.57,
    s: 469.57
  },

  BHR27300: {
    name: "BHR 27-300",
    type: "BHR",
    size: "27-300",
    w: 4.34,
    m: 893.23,
    s: 597.63
  },

  BHR27350: {
    name: "BHR 27-350",
    type: "BHR",
    size: "27-350",
    w: 4.91,
    m: 1021.13,
    s: 597.63
  },

  BHR27400: {
    name: "BHR 27-400",
    type: "BHR",
    size: "27-400",
    w: 5.56,
    m: 1173.53,
    s: 597.63
  },

  BHR32350: {
    name: "BHR 32-350",
    type: "BHR",
    size: "32-350",
    w: 5.83,
    m: 1392.11,
    s: 1013.84
  },

  BHR32400: {
    name: "BHR 32-400",
    type: "BHR",
    size: "32-400",
    w: 6.87,
    m: 1522.86,
    s: 1013.84
  },

  BHR32450: {
    name: "BHR 32-450",
    type: "BHR",
    size: "32-450",
    w: 7.55,
    m: 1604.14,
    s: 1013.84
  },

  BHR40400: {
    name: "BHR 40-400",
    type: "BHR",
    size: "40-400",
    w: 8.45,
    m: 2231.48,
    s: 1253.96
  },

  BHR40450: {
    name: "BHR 40-450",
    type: "BHR",
    size: "40-450",
    w: 9.29,
    m: 2385.39,
    s: 1253.96
  },

  BHR40500: {
    name: "BHR 40-500",
    type: "BHR",
    size: "40-500",
    w: 10.26,
    m: 2935.6,
    s: 1504.75
  },

  BHR45400: {
    name: "BHR 45-400",
    type: "BHR",
    size: "45-400",
    w: 9.13,
    m: 2647.24,
    s: 1253.96
  },

  BHR45450: {
    name: "BHR 45-450",
    type: "BHR",
    size: "45-450",
    w: 10.68,
    m: 3019.53,
    s: 1664.83
  },

  BHR45500: {
    name: "BHR 45-500",
    type: "BHR",
    size: "45-500",
    w: 11.63,
    m: 3352.17,
    s: 1664.83
  },

  BHR50500: {
    name: "BHR 50-500",
    type: "BHR",
    size: "50-500",
    w: 12.53,
    m: 4022.49,
    s: 1824.91
  },

  BHR50550: {
    name: "BHR 50-550",
    type: "BHR",
    size: "50-550",
    w: 13.81,
    m: 4336.15,
    s: 2281.14
  },

  BHR50650: {
    name: "BHR 50-650",
    type: "BHR",
    size: "50-650",
    w: 15.86,
    m: 4926.79,
    s: 2281.14
  }
};

console.log(beams);

console.log(slabsHC);
