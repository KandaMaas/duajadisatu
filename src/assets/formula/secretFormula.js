/* =====================================================
   MATCHING CONFIGURATION
===================================================== */

const MATCHING_CONFIG = {

  // MAKSIMAL jumlah orang yang dikenalkan kepada setiap peserta
  MAX_RECOMMENDATIONS: 3,

  // Skor minimum agar pasangan dianggap layak direkomendasikan
  MINIMUM_SCORE: 60,

  // Filter kandidat
  FILTER: {
    gender: true,
    age: true,
    height: true
  },

  // Pengaturan pemerataan
  FAIRNESS: {
    enabled: true,

    // Semakin besar nilainya, semakin diprioritaskan
    // peserta yang masih sedikit mendapatkan rekomendasi
    priority: 5
  },

  // Bobot setiap faktor
  WEIGHTS: {
    age: 15,
    height: 10,
    hobby: 10,
    socialEnergy: 10,
    productive: 5,
    communication: 15,
    freetime: 10,
    foods: 5,
    weekend: 5,
    loveLanguage: 10,
    entertainment: 5
  },

  // Nilai kecocokan jawaban
  MATCH_LEVEL: {
    exact: 100,
    close: 70,
    different: 40
  }
};


/* =====================================================
   QUESTIONNAIRE COMPATIBILITY
===================================================== */

const MATCH_RELATION = {

  socialEnergy: {

    Introvert: {
      Introvert: "exact",
      Ambivert: "close",
      Extrovert: "different"
    },

    Ambivert: {
      Introvert: "close",
      Ambivert: "exact",
      Extrovert: "close"
    },

    Extrovert: {
      Introvert: "different",
      Ambivert: "close",
      Extrovert: "exact"
    }

  },


  productive: {

    Morning: {
      Morning: "exact",
      "Night Owl": "different"
    },

    "Night Owl": {
      Morning: "different",
      "Night Owl": "exact"
    }

  },


  communication: {

    "Fast responder": {
      "Fast responder": "exact",
      "Slow responder": "different"
    },

    "Slow responder": {
      "Fast responder": "different",
      "Slow responder": "exact"
    }

  },


  freetime: {

    "Me time": {
      "Me time": "exact",
      Hangout: "different",
      "Chill at home": "close"
    },

    Hangout: {
      "Me time": "different",
      Hangout: "exact",
      "Chill at home": "close"
    },

    "Chill at home": {
      "Me time": "close",
      Hangout: "close",
      "Chill at home": "exact"
    }

  },


  foods: {

    "Asian food": {
      "Asian food": "exact",
      Western: "different",
      "Indonesian food": "close",
      "Comfort food": "close",
      "Healthy set": "different"
    },

    Western: {
      "Asian food": "different",
      Western: "exact",
      "Indonesian food": "different",
      "Comfort food": "close",
      "Healthy set": "different"
    },

    "Indonesian food": {
      "Asian food": "close",
      Western: "different",
      "Indonesian food": "exact",
      "Comfort food": "close",
      "Healthy set": "different"
    },

    "Comfort food": {
      "Asian food": "close",
      Western: "close",
      "Indonesian food": "close",
      "Comfort food": "exact",
      "Healthy set": "different"
    },

    "Healthy set": {
      "Asian food": "different",
      Western: "different",
      "Indonesian food": "different",
      "Comfort food": "different",
      "Healthy set": "exact"
    }

  },


  weekend: {

    "Chill at home": {
      "Chill at home": "exact",
      "Hangout with friends": "different",
      "Cafe Hopping": "different",
      "Food Hunting": "different",
      Workout: "different"
    },

    "Hangout with friends": {
      "Chill at home": "different",
      "Hangout with friends": "exact",
      "Cafe Hopping": "close",
      "Food Hunting": "close",
      Workout: "different"
    },

    "Cafe Hopping": {
      "Chill at home": "different",
      "Hangout with friends": "close",
      "Cafe Hopping": "exact",
      "Food Hunting": "close",
      Workout: "different"
    },

    "Food Hunting": {
      "Chill at home": "different",
      "Hangout with friends": "close",
      "Cafe Hopping": "close",
      "Food Hunting": "exact",
      Workout: "different"
    },

    Workout: {
      "Chill at home": "different",
      "Hangout with friends": "different",
      "Cafe Hopping": "different",
      "Food Hunting": "different",
      Workout: "exact"
    }

  },


  loveLanguage: {

    "Words of affirmation": {
      "Words of affirmation": "exact",
      "Giving a gift": "close",
      "Quality time": "close",
      "Physical touch": "different"
    },

    "Giving a gift": {
      "Words of affirmation": "close",
      "Giving a gift": "exact",
      "Quality time": "close",
      "Physical touch": "different"
    },

    "Quality time": {
      "Words of affirmation": "close",
      "Giving a gift": "close",
      "Quality time": "exact",
      "Physical touch": "close"
    },

    "Physical touch": {
      "Words of affirmation": "different",
      "Giving a gift": "different",
      "Quality time": "close",
      "Physical touch": "exact"
    }

  },


  entertainment: {

    "Drama & Romance": {
      "Drama & Romance": "exact",
      Comedy: "different",
      "Horror & Thriller": "different",
      "Music & Concerts": "close"
    },

    Comedy: {
      "Drama & Romance": "different",
      Comedy: "exact",
      "Horror & Thriller": "different",
      "Music & Concerts": "close"
    },

    "Horror & Thriller": {
      "Drama & Romance": "different",
      Comedy: "different",
      "Horror & Thriller": "exact",
      "Music & Concerts": "different"
    },

    "Music & Concerts": {
      "Drama & Romance": "close",
      Comedy: "close",
      "Horror & Thriller": "different",
      "Music & Concerts": "exact"
    }

  }

};


/* =====================================================
   BASIC HELPER
===================================================== */

function getMatchValue(level) {

  return MATCHING_CONFIG.MATCH_LEVEL[level] ?? 0;

}


/* =====================================================
   RANGE SCORE
===================================================== */

function calculateRangeScore(value, min, max) {

  if (value >= min && value <= max) {
    return 100;
  }

  return 0;

}


/* =====================================================
   HOBBY SCORE
===================================================== */

function calculateHobbyScore(preferenceA, userB) {

  if (
    !preferenceA?.hobby ||
    !userB?.questionnaire?.hobby
  ) {
    return 0;
  }

  if (
    preferenceA.hobby ===
    userB.questionnaire.hobby
  ) {
    return 100;
  }

  return MATCHING_CONFIG.MATCH_LEVEL.different;

}


/* =====================================================
   QUESTIONNAIRE SCORE
===================================================== */

function calculateQuestionnaireScore(
  field,
  valueA,
  valueB
) {

  if (!valueA || !valueB) {
    return 0;
  }

  if (valueA === valueB) {
    return MATCHING_CONFIG.MATCH_LEVEL.exact;
  }

  const relation =
    MATCH_RELATION[field]?.[valueA]?.[valueB];

  if (!relation) {
    return MATCHING_CONFIG.MATCH_LEVEL.different;
  }

  return getMatchValue(relation);

}


/* =====================================================
   ONE WAY SCORE
===================================================== */

/*
  A → B

  Artinya:

  "Seberapa cocok B dengan keinginan A?"
*/

function calculateOneWayScore(userA, userB) {

  const preference =
    userA.preference || {};

  const questionnaireA =
    userA.questionnaire || {};

  const questionnaireB =
    userB.questionnaire || {};

  let score = 0;


  /* =================================================
     AGE
  ================================================= */

  const ageScore =
    calculateRangeScore(
      Number(userB.umur),
      Number(preference.minUmur),
      Number(preference.maxUmur)
    );

  score += (
    ageScore *
    MATCHING_CONFIG.WEIGHTS.age
  ) / 100;


  /* =================================================
     HEIGHT
  ================================================= */

  const heightScore =
    calculateRangeScore(
      Number(userB.tinggi),
      Number(preference.minTinggi),
      Number(preference.maxTinggi)
    );

  score += (
    heightScore *
    MATCHING_CONFIG.WEIGHTS.height
  ) / 100;


  /* =================================================
     HOBBY
  ================================================= */

  const hobbyScore =
    calculateHobbyScore(
      preference,
      userB
    );

  score += (
    hobbyScore *
    MATCHING_CONFIG.WEIGHTS.hobby
  ) / 100;


  /* =================================================
     SOCIAL ENERGY
  ================================================= */

  const socialEnergyScore =
    calculateQuestionnaireScore(
      "socialEnergy",
      questionnaireA.socialEnergy,
      questionnaireB.socialEnergy
    );

  score += (
    socialEnergyScore *
    MATCHING_CONFIG.WEIGHTS.socialEnergy
  ) / 100;


  /* =================================================
     PRODUCTIVE
  ================================================= */

  const productiveScore =
    calculateQuestionnaireScore(
      "productive",
      questionnaireA.productive,
      questionnaireB.productive
    );

  score += (
    productiveScore *
    MATCHING_CONFIG.WEIGHTS.productive
  ) / 100;


  /* =================================================
     COMMUNICATION
  ================================================= */

  const communicationScore =
    calculateQuestionnaireScore(
      "communication",
      questionnaireA.communication,
      questionnaireB.communication
    );

  score += (
    communicationScore *
    MATCHING_CONFIG.WEIGHTS.communication
  ) / 100;


  /* =================================================
     FREE TIME
  ================================================= */

  const freeTimeScore =
    calculateQuestionnaireScore(
      "freetime",
      questionnaireA.freetime,
      questionnaireB.freetime
    );

  score += (
    freeTimeScore *
    MATCHING_CONFIG.WEIGHTS.freetime
  ) / 100;


  /* =================================================
     FOODS
  ================================================= */

  const foodsScore =
    calculateQuestionnaireScore(
      "foods",
      questionnaireA.foods,
      questionnaireB.foods
    );

  score += (
    foodsScore *
    MATCHING_CONFIG.WEIGHTS.foods
  ) / 100;


  /* =================================================
     WEEKEND
  ================================================= */

  const weekendScore =
    calculateQuestionnaireScore(
      "weekend",
      questionnaireA.weekend,
      questionnaireB.weekend
    );

  score += (
    weekendScore *
    MATCHING_CONFIG.WEIGHTS.weekend
  ) / 100;


  /* =================================================
     LOVE LANGUAGE
  ================================================= */

  const loveLanguageScore =
    calculateQuestionnaireScore(
      "loveLanguage",
      questionnaireA.loveLanguage,
      questionnaireB.loveLanguage
    );

  score += (
    loveLanguageScore *
    MATCHING_CONFIG.WEIGHTS.loveLanguage
  ) / 100;


  /* =================================================
     ENTERTAINMENT
  ================================================= */

  const entertainmentScore =
    calculateQuestionnaireScore(
      "entertainment",
      questionnaireA.entertainment,
      questionnaireB.entertainment
    );

  score += (
    entertainmentScore *
    MATCHING_CONFIG.WEIGHTS.entertainment
  ) / 100;


  return Number(score.toFixed(2));

}


/* =====================================================
   HARD FILTER
===================================================== */

function isEligible(userA, userB) {


  /* =================================================
     GENDER
  ================================================= */

  if (MATCHING_CONFIG.FILTER.gender) {

    if (userA.gender === userB.gender) {
      return false;
    }

  }


  /* =================================================
     AGE
  ================================================= */

  if (MATCHING_CONFIG.FILTER.age) {

    const minAge =
      Number(userA.preference?.minUmur);

    const maxAge =
      Number(userA.preference?.maxUmur);

    const candidateAge =
      Number(userB.umur);

    if (
      candidateAge < minAge ||
      candidateAge > maxAge
    ) {
      return false;
    }

  }


  /* =================================================
     HEIGHT
  ================================================= */

  if (MATCHING_CONFIG.FILTER.height) {

    const minHeight =
      Number(userA.preference?.minTinggi);

    const maxHeight =
      Number(userA.preference?.maxTinggi);

    const candidateHeight =
      Number(userB.tinggi);

    if (
      candidateHeight < minHeight ||
      candidateHeight > maxHeight
    ) {
      return false;
    }

  }


  return true;

}


/* =====================================================
   RECIPROCAL SCORE
===================================================== */

/*
  A → B
  B → A

  Kemudian digabungkan menggunakan rata-rata.

  Contoh:

  A → B = 90
  B → A = 60

  Mutual Match:

  (90 + 60) / 2 = 75
*/

function calculateReciprocalScore(
  userA,
  userB
) {

  const scoreAB =
    calculateOneWayScore(
      userA,
      userB
    );

  const scoreBA =
    calculateOneWayScore(
      userB,
      userA
    );

  const reciprocalScore =
    (scoreAB + scoreBA) / 2;

  return {

    scoreAB,

    scoreBA,

    reciprocalScore:
      Number(
        reciprocalScore.toFixed(2)
      )

  };

}


/* =====================================================
   BUILD ALL POSSIBLE PAIRS
===================================================== */

function buildPairs(users) {

  const pairs = [];


  for (
    let i = 0;
    i < users.length;
    i++
  ) {

    for (
      let j = i + 1;
      j < users.length;
      j++
    ) {

      const userA = users[i];

      const userB = users[j];


      /* =================================================
         CHECK A → B
      ================================================= */

      const eligibleAB =
        isEligible(
          userA,
          userB
        );


      /* =================================================
         CHECK B → A
      ================================================= */

      const eligibleBA =
        isEligible(
          userB,
          userA
        );


      /*
        Dua arah harus eligible.

        A harus memenuhi preference B
        DAN
        B harus memenuhi preference A.
      */

      if (
        !eligibleAB ||
        !eligibleBA
      ) {
        continue;
      }


      const score =
        calculateReciprocalScore(
          userA,
          userB
        );


      if (
        score.reciprocalScore <
        MATCHING_CONFIG.MINIMUM_SCORE
      ) {
        continue;
      }


      pairs.push({

        userA,

        userB,

        scoreAB:
          score.scoreAB,

        scoreBA:
          score.scoreBA,

        reciprocalScore:
          score.reciprocalScore

      });

    }

  }


  return pairs;

}


/* =====================================================
   FAIRNESS SCORE
===================================================== */

function calculateFairnessBonus(
  recommendationCount
) {

  if (
    !MATCHING_CONFIG.FAIRNESS.enabled
  ) {
    return 0;
  }


  const maxRecommendations =
    MATCHING_CONFIG.MAX_RECOMMENDATIONS;


  const remaining =
    maxRecommendations -
    recommendationCount;


  if (remaining <= 0) {
    return 0;
  }


  return (
    remaining /
    maxRecommendations
  ) *
  MATCHING_CONFIG.FAIRNESS.priority;

}


/* =====================================================
   GET ALLOCATION SCORE
===================================================== */

function calculateAllocationScore(
  pair,
  recommendationCount
) {

  const countA =
    recommendationCount[
      pair.userA.uid
    ] || 0;

  const countB =
    recommendationCount[
      pair.userB.uid
    ] || 0;


  const fairnessA =
    calculateFairnessBonus(
      countA
    );

  const fairnessB =
    calculateFairnessBonus(
      countB
    );


  const fairnessBonus =
    (fairnessA + fairnessB) / 2;


  return Number(
    (
      pair.reciprocalScore +
      fairnessBonus
    ).toFixed(2)
  );

}


/* =====================================================
   MATCH USERS
===================================================== */

function generateMatching(users) {

  const maxRecommendations =
    MATCHING_CONFIG.MAX_RECOMMENDATIONS;


  /*
    Menyimpan berapa kali seseorang
    sudah dikenalkan kepada peserta lain.
  */

  const recommendationCount = {};


  /*
    Hasil akhir.
  */

  const results = {};


  users.forEach((user) => {

    recommendationCount[user.uid] = 0;

    results[user.uid] = {

      user,

      recommendations: []

    };

  });


  /*
    Buat semua pasangan yang eligible.
  */

  const pairs =
    buildPairs(users);


  /*
    MATCHING DILAKUKAN PER RONDE.

    Round 1 → semua berusaha mendapat 1
    Round 2 → semua berusaha mendapat 2
    Round 3 → semua berusaha mendapat 3

    Kalau MAX_RECOMMENDATIONS
    diubah menjadi 4,
    otomatis menjadi 4 ronde.
  */

  for (
    let round = 0;
    round < maxRecommendations;
    round++
  ) {


    /*
      Kandidat pasangan yang masih bisa digunakan.
    */

    const availablePairs =
      pairs.filter((pair) => {

        const countA =
          recommendationCount[
            pair.userA.uid
          ];

        const countB =
          recommendationCount[
            pair.userB.uid
          ];


        if (
          countA >= maxRecommendations ||
          countB >= maxRecommendations
        ) {
          return false;
        }


        /*
          Jangan memasukkan pasangan yang sama
          lebih dari satu kali.
        */

        const alreadyA =
          results[
            pair.userA.uid
          ]
            .recommendations
            .some(
              (item) =>
                item.uid ===
                pair.userB.uid
            );


        const alreadyB =
          results[
            pair.userB.uid
          ]
            .recommendations
            .some(
              (item) =>
                item.uid ===
                pair.userA.uid
            );


        if (
          alreadyA ||
          alreadyB
        ) {
          return false;
        }


        return true;

      });


    /*
      Hitung allocation score.

      Compatibility tetap menjadi faktor utama.

      Fairness hanya menjadi bonus kecil
      untuk peserta yang masih sedikit
      mendapatkan rekomendasi.
    */

    const rankedPairs =
      availablePairs
        .map((pair) => {

          const allocationScore =
            calculateAllocationScore(
              pair,
              recommendationCount
            );

          return {

            ...pair,

            allocationScore

          };

        })
        .sort(
          (a, b) =>
            b.allocationScore -
            a.allocationScore
        );


    /*
      Alokasikan pasangan.
    */

    for (
      const pair of rankedPairs
    ) {

      const uidA =
        pair.userA.uid;

      const uidB =
        pair.userB.uid;


      /*
        Cek lagi kapasitas karena
        pasangan sebelumnya mungkin
        sudah mengubah jumlah rekomendasi.
      */

      if (
        recommendationCount[uidA] >=
        maxRecommendations
      ) {
        continue;
      }


      if (
        recommendationCount[uidB] >=
        maxRecommendations
      ) {
        continue;
      }


      /*
        Jangan pasangan yang sama dua kali.
      */

      const alreadyExistsA =
        results[uidA]
          .recommendations
          .some(
            (item) =>
              item.uid === uidB
          );


      const alreadyExistsB =
        results[uidB]
          .recommendations
          .some(
            (item) =>
              item.uid === uidA
          );


      if (
        alreadyExistsA ||
        alreadyExistsB
      ) {
        continue;
      }


      /*
        Masukkan A → B
      */

      results[uidA]
        .recommendations
        .push({

          uid: uidB,

          nama: pair.userB.nama,

          score: pair.scoreAB,

          reciprocalScore:
            pair.reciprocalScore

        });


      /*
        Masukkan B → A
      */

      results[uidB]
        .recommendations
        .push({

          uid: uidA,

          nama: pair.userA.nama,

          score: pair.scoreBA,

          reciprocalScore:
            pair.reciprocalScore

        });


      /*
        Tambahkan jumlah rekomendasi.
      */

      recommendationCount[uidA]++;

      recommendationCount[uidB]++;

    }

  }


  /*
    Urutkan rekomendasi masing-masing orang
    berdasarkan reciprocal score tertinggi.
  */

  Object.values(results)
    .forEach((result) => {

      result.recommendations.sort(
        (a, b) =>
          b.reciprocalScore -
          a.reciprocalScore
      );

    });


  return Object.values(results);

}


/* =====================================================
   EXPORT
===================================================== */

const matching = {

  MATCHING_CONFIG,

  MATCH_RELATION,

  getMatchValue,

  calculateRangeScore,

  calculateHobbyScore,

  calculateQuestionnaireScore,

  calculateOneWayScore,

  isEligible,

  calculateReciprocalScore,

  buildPairs,

  calculateFairnessBonus,

  calculateAllocationScore,

  generateMatching

};

export default matching;