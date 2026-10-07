/* =====================================================
   MATCHING ENGINE (SINGLE OBJECT EXPORT)
===================================================== */

const MatchEngine = {
  /* ---------------------------------------------------
     CONFIGURATIONS & CONSTANTS
  --------------------------------------------------- */

  CONFIG: {

    // MAKSIMAL jumlah orang yang dikenalkan kepada setiap peserta
    MAX_RECOMMENDATIONS: 3,

    // Skor minimum agar pasangan dianggap layak direkomendasikan
    MINIMUM_SCORE: 50,

    // Filter kandidat
    FILTER: {
      gender: true,
      age: false,
      height: false
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
      hobby: 10, // Match preferensi hobi vs kuesioner hobi
      socialEnergy: 10,
      productive: 5,
      communication: 15,
      freeTime: 10,
      foods: 5,
      weekend: 5,
      loveLanguage: 10,
      hobbyQuestionnaire: 5 // Match relasi kuesioner hobi antar user
    },

    // Nilai kecocokan jawaban
    MATCH_LEVEL: {
      exact: 100,
      close: 70,
      different: 40
    }

  },


  /*
    Nilai hubungan antar jawaban.

    Kalau dua jawaban sama → exact.
    Kalau masih memiliki kedekatan → close.
    Kalau berbeda → different.
  */

  MATCH_RELATION: {

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


    freeTime: {
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


    hobby: {
      travelling: {
        travelling: "exact",
        Olahraga: "close",
        Memasak: "different",
        "Baca buku": "different",
        "Main musik": "different",
        "Nonton film": "close",
        "Beauty & fashion": "close"
      },

      Olahraga: {
        travelling: "close",
        Olahraga: "exact",
        Memasak: "different",
        "Baca buku": "different",
        "Main musik": "different",
        "Nonton film": "different",
        "Beauty & fashion": "close"
      },

      Memasak: {
        travelling: "different",
        Olahraga: "different",
        Memasak: "exact",
        "Baca buku": "close",
        "Main musik": "different",
        "Nonton film": "close",
        "Beauty & fashion": "close"
      },

      "Baca buku": {
        travelling: "different",
        Olahraga: "different",
        Memasak: "close",
        "Baca buku": "exact",
        "Main musik": "close",
        "Nonton film": "close",
        "Beauty & fashion": "different"
      },

      "Main musik": {
        travelling: "different",
        Olahraga: "different",
        Memasak: "different",
        "Baca buku": "close",
        "Main musik": "exact",
        "Nonton film": "close",
        "Beauty & fashion": "different"
      },

      "Nonton film": {
        travelling: "close",
        Olahraga: "different",
        Memasak: "close",
        "Baca buku": "close",
        "Main musik": "close",
        "Nonton film": "exact",
        "Beauty & fashion": "close"
      },

      "Beauty & fashion": {
        travelling: "close",
        Olahraga: "close",
        Memasak: "close",
        "Baca buku": "different",
        "Main musik": "different",
        "Nonton film": "close",
        "Beauty & fashion": "exact"
      }
    }

  },


  /* ---------------------------------------------------
     HELPER METHODS
  --------------------------------------------------- */

  // Helper untuk mengonversi data menjadi array jika berbentuk string
  toArray(val) {
    if (!val) return [];
    return Array.isArray(val) ? val : [val];
  },


  getMatchValue(level) {

    return this.CONFIG.MATCH_LEVEL[level] ?? 0;

  },


  calculateRangeScore(value, min, max) {

    if (value >= min && value <= max) {
      return 100;
    }

    return 0;

  },


  calculateHobbyScore(preferenceA, userB) {

    const arrA = this.toArray(preferenceA?.hobby);
    const arrB = this.toArray(userB?.questionnaire?.hobby);

    if (arrA.length === 0 || arrB.length === 0) {
      return 0;
    }

    // Cek apakah ada minimal 1 hobi yang sama
    const hasOverlap = arrA.some((item) => arrB.includes(item));

    if (hasOverlap) {
      return 100;
    }

    return this.CONFIG.MATCH_LEVEL.different;

  },


  calculateQuestionnaireScore(field, valueA, valueB) {

    const arrA = this.toArray(valueA);
    const arrB = this.toArray(valueB);

    if (arrA.length === 0 || arrB.length === 0) {
      return 0;
    }

    let maxScore = 0;

    // Evaluasi semua kombinasi item (baik array maupun bukan) dan ambil skor tertinggi
    for (const itemA of arrA) {
      for (const itemB of arrB) {
        let currentScore = 0;

        if (itemA === itemB) {
          currentScore = this.CONFIG.MATCH_LEVEL.exact;
        } else {
          const relation = this.MATCH_RELATION[field]?.[itemA]?.[itemB];
          currentScore = relation
            ? this.getMatchValue(relation)
            : this.CONFIG.MATCH_LEVEL.different;
        }

        if (currentScore > maxScore) {
          maxScore = currentScore;
        }
      }
    }

    return maxScore;

  },


  /* ---------------------------------------------------
     MATCH REASONS
  --------------------------------------------------- */

  getMatchReasons(userA, userB) {

    const reasons = [];

    const preferenceA = userA.preference || {};
    const preferenceB = userB.preference || {};

    const questionnaireA = userA.questionnaire || {};
    const questionnaireB = userB.questionnaire || {};

    // Helper untuk mencari kesamaan nilai antar elemen
    const findSharedItems = (valA, valB) => {
      const arrA = this.toArray(valA);
      const arrB = this.toArray(valB);
      return arrA.filter((item) => arrB.includes(item));
    };


    /*
     * HOBBY PREFERENCE
     */
    const sharedHobbies = findSharedItems(
      preferenceA.hobby,
      questionnaireB.hobby
    );
    if (sharedHobbies.length > 0) {
      reasons.push(sharedHobbies[0]);
    }


    /*
     * QUESTIONNAIRE FIELDS
     */
    const fields = [
      "socialEnergy",
      "productive",
      "communication",
      "freeTime",
      "foods",
      "weekend",
      "loveLanguage",
      "hobby"
    ];

    for (const field of fields) {
      const matches = findSharedItems(
        questionnaireA[field],
        questionnaireB[field]
      );
      if (matches.length > 0) {
        reasons.push(matches[0]);
      }
    }


    /*
     * Maksimal 2 alasan.
     */

    return reasons.slice(0, 4);

  },


  /* ---------------------------------------------------
     CORE CALCULATION METHODS
  --------------------------------------------------- */

  calculateOneWayScore(userA, userB) {

    const preference = userA.preference || {};
    const questionnaireA = userA.questionnaire || {};
    const questionnaireB = userB.questionnaire || {};

    let score = 0;


    /* AGE */

    const ageScore = this.calculateRangeScore(
      Number(userB.umur),
      Number(preference.minUmur),
      Number(preference.maxUmur)
    );

    score += (ageScore * this.CONFIG.WEIGHTS.age) / 100;


    /* HEIGHT */
      
    const heightScore = this.calculateRangeScore(
      Number(userB.tinggi),
      Number(preference.minTinggi),
      Number(preference.maxTinggi)
    );

    score += (heightScore * this.CONFIG.WEIGHTS.height) / 100;


    /* HOBBY PREFERENCE */

    const hobbyScore = this.calculateHobbyScore(
      preference,
      userB
    );

    score += (hobbyScore * this.CONFIG.WEIGHTS.hobby) / 100;


    /* SOCIAL ENERGY */

    const socialEnergyScore = this.calculateQuestionnaireScore(
      "socialEnergy",
      questionnaireA.socialEnergy,
      questionnaireB.socialEnergy
    );

    score += (
      socialEnergyScore *
      this.CONFIG.WEIGHTS.socialEnergy
    ) / 100;


    /* PRODUCTIVE */

    const productiveScore = this.calculateQuestionnaireScore(
      "productive",
      questionnaireA.productive,
      questionnaireB.productive
    );

    score += (
      productiveScore *
      this.CONFIG.WEIGHTS.productive
    ) / 100;


    /* COMMUNICATION */

    const communicationScore = this.calculateQuestionnaireScore(
      "communication",
      questionnaireA.communication,
      questionnaireB.communication
    );

    score += (
      communicationScore *
      this.CONFIG.WEIGHTS.communication
    ) / 100;


    /* FREE TIME */

    const freeTimeScore = this.calculateQuestionnaireScore(
      "freeTime",
      questionnaireA.freeTime,
      questionnaireB.freeTime
    );

    score += (
      freeTimeScore *
      this.CONFIG.WEIGHTS.freeTime
    ) / 100;


    /* FOODS */

    const foodsScore = this.calculateQuestionnaireScore(
      "foods",
      questionnaireA.foods,
      questionnaireB.foods
    );

    score += (
      foodsScore *
      this.CONFIG.WEIGHTS.foods
    ) / 100;


    /* WEEKEND */

    const weekendScore = this.calculateQuestionnaireScore(
      "weekend",
      questionnaireA.weekend,
      questionnaireB.weekend
    );

    score += (
      weekendScore *
      this.CONFIG.WEIGHTS.weekend
    ) / 100;


    /* LOVE LANGUAGE */

    const loveLanguageScore = this.calculateQuestionnaireScore(
      "loveLanguage",
      questionnaireA.loveLanguage,
      questionnaireB.loveLanguage
    );

    score += (
      loveLanguageScore *
      this.CONFIG.WEIGHTS.loveLanguage
    ) / 100;


    /* HOBBY QUESTIONNAIRE */

    const hobbyQuestionnaireScore = this.calculateQuestionnaireScore(
      "hobby",
      questionnaireA.hobby,
      questionnaireB.hobby
    );

    score += (
      hobbyQuestionnaireScore *
      this.CONFIG.WEIGHTS.hobbyQuestionnaire
    ) / 100;


    return Number(score.toFixed(2));

  },


  isEligible(userA, userB) {

    /* GENDER */

    if (this.CONFIG.FILTER.gender) {

      if (userA.gender === userB.gender) {
        return false;
      }

    }


    /* AGE */

    if (this.CONFIG.FILTER.age) {

      const minAge = Number(userA.preference?.minUmur);
      const maxAge = Number(userA.preference?.maxUmur);
      const candidateAge = Number(userB.umur);

      if (
        candidateAge < minAge ||
        candidateAge > maxAge
      ) {
        return false;
      }

    }


    /* HEIGHT */

    if (this.CONFIG.FILTER.height) {

      const minHeight = Number(userA.preference?.minTinggi);
      const maxHeight = Number(userA.preference?.maxTinggi);
      const candidateHeight = Number(userB.tinggi);

      if (
        candidateHeight < minHeight ||
        candidateHeight > maxHeight
      ) {
        return false;
      }

    }


    return true;

  },


  calculateReciprocalScore(userA, userB) {

    const scoreAB = this.calculateOneWayScore(
      userA,
      userB
    );

    const scoreBA = this.calculateOneWayScore(
      userB,
      userA
    );


    /*
     * Nilai mutual compatibility
     *
     * Contoh:
     * A -> B = 90
     * B -> A = 60
     *
     * Reciprocal = (90 + 60) / 2
     *            = 75
     */

    const reciprocalScore = (
      scoreAB +
      scoreBA
    ) / 2;


    return {
      scoreAB,
      scoreBA,
      reciprocalScore: Number(
        reciprocalScore.toFixed(2)
      )
    };

  },


  buildPairs(users) {

    const pairs = [];


    for (let i = 0; i < users.length; i++) {

      for (let j = i + 1; j < users.length; j++) {

        const userA = users[i];
        const userB = users[j];


        const eligibleAB = this.isEligible(
          userA,
          userB
        );

        const eligibleBA = this.isEligible(
          userB,
          userA
        );


        if (!eligibleAB || !eligibleBA) {
          continue;
        }


        const score = this.calculateReciprocalScore(
          userA,
          userB
        );


        if (
          score.reciprocalScore <
          this.CONFIG.MINIMUM_SCORE
        ) {
          continue;
        }


        pairs.push({
          userA,
          userB,
          scoreAB: score.scoreAB,
          scoreBA: score.scoreBA,
          reciprocalScore: score.reciprocalScore
        });

      }

    }


    return pairs;

  },


  calculateFairnessBonus(recommendationCount) {

    if (!this.CONFIG.FAIRNESS.enabled) {
      return 0;
    }


    const maxRecommendations =
      this.CONFIG.MAX_RECOMMENDATIONS;

    const remaining =
      maxRecommendations -
      recommendationCount;


    if (remaining <= 0) {
      return 0;
    }


    return (
      remaining /
      maxRecommendations
    ) * this.CONFIG.FAIRNESS.priority;

  },


  calculateAllocationScore(
    pair,
    recommendationCount
  ) {

    const countA =
      recommendationCount[pair.userA.uid] || 0;

    const countB =
      recommendationCount[pair.userB.uid] || 0;


    const fairnessA =
      this.calculateFairnessBonus(countA);

    const fairnessB =
      this.calculateFairnessBonus(countB);


    const fairnessBonus =
      (fairnessA + fairnessB) / 2;


    return Number(
      (
        pair.reciprocalScore +
        fairnessBonus
      ).toFixed(2)
    );

  },


  /* ---------------------------------------------------
     MAIN EXECUTION METHOD
  --------------------------------------------------- */

  generateMatching(users) {

    const maxRecommendations =
      this.CONFIG.MAX_RECOMMENDATIONS;

    const recommendationCount = {};
    const results = {};


    users.forEach((user) => {

      recommendationCount[user.uid] = 0;

      results[user.uid] = {
        user,
        recommendations: []
      };

    });


    const pairs = this.buildPairs(users);


    for (
      let round = 0;
      round < maxRecommendations;
      round++
    ) {

      const availablePairs = pairs.filter((pair) => {

        const countA =
          recommendationCount[pair.userA.uid];

        const countB =
          recommendationCount[pair.userB.uid];


        if (
          countA >= maxRecommendations ||
          countB >= maxRecommendations
        ) {
          return false;
        }


        const alreadyA =
          results[pair.userA.uid]
            .recommendations
            .some(
              (item) =>
                item.uid === pair.userB.uid
            );


        const alreadyB =
          results[pair.userB.uid]
            .recommendations
            .some(
              (item) =>
                item.uid === pair.userA.uid
            );


        if (alreadyA || alreadyB) {
          return false;
        }


        return true;

      });


      const rankedPairs = availablePairs
        .map((pair) => {

          const allocationScore =
            this.calculateAllocationScore(
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


      for (const pair of rankedPairs) {

        const uidA = pair.userA.uid;
        const uidB = pair.userB.uid;


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
         * REASON UNTUK A -> B
         */

        const reasonAB =
          this.getMatchReasons(
            pair.userA,
            pair.userB
          );


        /*
         * REASON UNTUK B -> A
         */

        const reasonBA =
          this.getMatchReasons(
            pair.userB,
            pair.userA
          );


        results[uidA].recommendations.push({

          uid: uidB,

          nama: pair.userB.nama,
          umur: pair.userB.umur,
          score: pair.scoreAB,
          tinggi: pair.userB.tinggi,
          ig: pair.userB.ig || pair.userB.instagram,
          reciprocalScore:
            pair.reciprocalScore,

          reason: reasonAB

        });


        results[uidB].recommendations.push({

          uid: uidA,

          nama: pair.userA.nama,
          umur: pair.userA.umur,
          score: pair.scoreBA,
          tinggi: pair.userA.tinggi,
          ig: pair.userA.ig || pair.userA.instagram,
          reciprocalScore:
            pair.reciprocalScore,

          reason: reasonBA

        });


        recommendationCount[uidA]++;
        recommendationCount[uidB]++;

      }

    }


    Object.values(results).forEach((result) => {

      result.recommendations.sort(
        (a, b) =>
          b.reciprocalScore -
          a.reciprocalScore
      );

    });


    return Object.values(results);

  }

};


/* =====================================================
   EXPORT SINGLE OBJECT
===================================================== */

export default MatchEngine;