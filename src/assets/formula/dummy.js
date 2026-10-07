const dummyUsers = [
  // --- USER MALE (1 - 35) ---
  {
    uid: "usr_m_01",
    nama: "Andi Pratama",
    umur: 24,
    gender: "Male",
    tinggi: 173,
    ig: "andipratama",
    preference: { minUmur: 20, maxUmur: 25, minTinggi: 155, maxTinggi: 168, hobby: ["travelling", "Olahraga"], loveLanguage: ["Quality time"] },
    questionnaire: { socialEnergy: "Introvert", productive: "Morning", communication: "Fast responder", freeTime: "Chill at home", foods: ["Asian food", "Indonesian food"], weekend: ["Chill at home"], loveLanguage: ["Words of affirmation", "Quality time"], hobby: ["travelling", "Baca buku"] }
  },
  {
    uid: "usr_m_02",
    nama: "Budi Santoso",
    umur: 27,
    gender: "Male",
    tinggi: 178,
    ig: "budisantoso",
    preference: { minUmur: 22, maxUmur: 28, minTinggi: 158, maxTinggi: 172, hobby: ["Olahraga", "Nonton film"], loveLanguage: ["Physical touch"] },
    questionnaire: { socialEnergy: "Extrovert", productive: "Night Owl", communication: "Fast responder", freeTime: "Hangout", foods: ["Western", "Comfort food"], weekend: ["Workout", "Food Hunting"], loveLanguage: ["Physical touch", "Quality time"], hobby: ["Olahraga", "Nonton film"] }
  },
  {
    uid: "usr_m_03",
    nama: "Candra Wijaya",
    umur: 22,
    gender: "Male",
    tinggi: 168,
    ig: "candrawjy",
    preference: { minUmur: 19, maxUmur: 24, minTinggi: 150, maxTinggi: 165, hobby: ["Main musik", "Baca buku"], loveLanguage: ["Words of affirmation"] },
    questionnaire: { socialEnergy: "Ambivert", productive: "Morning", communication: "Slow responder", freeTime: "Me time", foods: ["Asian food", "Healthy set"], weekend: ["Cafe Hopping"], loveLanguage: ["Words of affirmation"], hobby: ["Main musik", "Baca buku"] }
  },
  {
    uid: "usr_m_04",
    nama: "Dicky Setiawan",
    umur: 29,
    gender: "Male",
    tinggi: 175,
    ig: "dickyset",
    preference: { minUmur: 23, maxUmur: 29, minTinggi: 160, maxTinggi: 175, hobby: ["Memasak", "travelling"], loveLanguage: ["Giving gifts"] },
    questionnaire: { socialEnergy: "Extrovert", productive: "Night Owl", communication: "Fast responder", freeTime: "Hangout", foods: ["Indonesian food", "Comfort food"], weekend: ["Food Hunting", "Hangout with friends"], loveLanguage: ["Giving gifts", "Quality time"], hobby: ["Memasak", "travelling"] }
  },
  {
    uid: "usr_m_05",
    nama: "Eko Prasetyo",
    umur: 25,
    gender: "Male",
    tinggi: 170,
    ig: "ekopras",
    preference: { minUmur: 21, maxUmur: 26, minTinggi: 152, maxTinggi: 168, hobby: ["Nonton film", "Baca buku"], loveLanguage: ["Quality time"] },
    questionnaire: { socialEnergy: "Introvert", productive: "Night Owl", communication: "Slow responder", freeTime: "Me time", foods: ["Asian food"], weekend: ["Chill at home"], loveLanguage: ["Quality time"], hobby: ["Nonton film", "Baca buku"] }
  },
  {
    uid: "usr_m_06",
    nama: "Fajar Nugraha",
    umur: 26,
    gender: "Male",
    tinggi: 180,
    ig: "fajarnug",
    preference: { minUmur: 22, maxUmur: 27, minTinggi: 160, maxTinggi: 175, hobby: ["Olahraga"], loveLanguage: ["Physical touch"] },
    questionnaire: { socialEnergy: "Extrovert", productive: "Morning", communication: "Fast responder", freeTime: "Hangout", foods: ["Western", "Healthy set"], weekend: ["Workout"], loveLanguage: ["Physical touch"], hobby: ["Olahraga", "travelling"] }
  },
  {
    uid: "usr_m_07",
    nama: "Gilang Ramadhan",
    umur: 23,
    gender: "Male",
    tinggi: 172,
    ig: "gilangrmd",
    preference: { minUmur: 20, maxUmur: 25, minTinggi: 155, maxTinggi: 170, hobby: ["Main musik", "Beauty & fashion"], loveLanguage: ["Words of affirmation"] },
    questionnaire: { socialEnergy: "Ambivert", productive: "Morning", communication: "Fast responder", freeTime: "Chill at home", foods: ["Asian food", "Comfort food"], weekend: ["Cafe Hopping"], loveLanguage: ["Words of affirmation", "Quality time"], hobby: ["Main musik", "Beauty & fashion"] }
  },
  {
    uid: "usr_m_08",
    nama: "Hendra Kusuma",
    umur: 30,
    gender: "Male",
    tinggi: 176,
    ig: "hendraksm",
    preference: { minUmur: 24, maxUmur: 30, minTinggi: 158, maxTinggi: 172, hobby: ["travelling", "Olahraga"], loveLanguage: ["Quality time"] },
    questionnaire: { socialEnergy: "Ambivert", productive: "Morning", communication: "Fast responder", freeTime: "Hangout", foods: ["Indonesian food"], weekend: ["Hangout with friends", "Food Hunting"], loveLanguage: ["Quality time"], hobby: ["travelling", "Olahraga"] }
  },
  {
    uid: "usr_m_09",
    nama: "Irfan Hakim",
    umur: 21,
    gender: "Male",
    tinggi: 169,
    ig: "irfanhkm",
    preference: { minUmur: 18, maxUmur: 23, minTinggi: 150, maxTinggi: 165, hobby: ["Nonton film"], loveLanguage: ["Giving gifts"] },
    questionnaire: { socialEnergy: "Introvert", productive: "Night Owl", communication: "Slow responder", freeTime: "Me time", foods: ["Asian food", "Comfort food"], weekend: ["Chill at home"], loveLanguage: ["Giving gifts"], hobby: ["Nonton film", "Baca buku"] }
  },
  {
    uid: "usr_m_10",
    nama: "Joko Susilo",
    umur: 28,
    gender: "Male",
    tinggi: 174,
    ig: "jokosul",
    preference: { minUmur: 23, maxUmur: 28, minTinggi: 156, maxTinggi: 170, hobby: ["Olahraga", "Memasak"], loveLanguage: ["Quality time"] },
    questionnaire: { socialEnergy: "Ambivert", productive: "Morning", communication: "Fast responder", freeTime: "Chill at home", foods: ["Indonesian food", "Asian food"], weekend: ["Food Hunting"], loveLanguage: ["Quality time"], hobby: ["Olahraga", "Memasak"] }
  },
  {
    uid: "usr_m_11",
    nama: "Kevin Sanjaya",
    umur: 25,
    gender: "Male",
    tinggi: 177,
    ig: "kevinsjy",
    preference: { minUmur: 21, maxUmur: 26, minTinggi: 158, maxTinggi: 172, hobby: ["Olahraga", "Main musik"], loveLanguage: ["Physical touch"] },
    questionnaire: { socialEnergy: "Extrovert", productive: "Morning", communication: "Fast responder", freeTime: "Hangout", foods: ["Western", "Healthy set"], weekend: ["Workout", "Hangout with friends"], loveLanguage: ["Physical touch"], hobby: ["Olahraga", "Main musik"] }
  },
  {
    uid: "usr_m_12",
    nama: "Lukman Hakim",
    umur: 27,
    gender: "Male",
    tinggi: 171,
    ig: "lukmanh",
    preference: { minUmur: 22, maxUmur: 27, minTinggi: 154, maxTinggi: 168, hobby: ["Baca buku"], loveLanguage: ["Words of affirmation"] },
    questionnaire: { socialEnergy: "Introvert", productive: "Morning", communication: "Slow responder", freeTime: "Me time", foods: ["Asian food", "Comfort food"], weekend: ["Cafe Hopping"], loveLanguage: ["Words of affirmation"], hobby: ["Baca buku", "travelling"] }
  },
  {
    uid: "usr_m_13",
    nama: "Muhammad Rizky",
    umur: 23,
    gender: "Male",
    tinggi: 173,
    ig: "mrizkyy",
    preference: { minUmur: 19, maxUmur: 24, minTinggi: 152, maxTinggi: 166, hobby: ["travelling", "Nonton film"], loveLanguage: ["Quality time"] },
    questionnaire: { socialEnergy: "Ambivert", productive: "Night Owl", communication: "Fast responder", freeTime: "Chill at home", foods: ["Indonesian food"], weekend: ["Food Hunting"], loveLanguage: ["Quality time"], hobby: ["travelling", "Nonton film"] }
  },
  {
    uid: "usr_m_14",
    nama: "Naufal Zahran",
    umur: 22,
    gender: "Male",
    tinggi: 167,
    ig: "naufalzhr",
    preference: { minUmur: 19, maxUmur: 23, minTinggi: 150, maxTinggi: 164, hobby: ["Nonton film", "Main musik"], loveLanguage: ["Words of affirmation"] },
    questionnaire: { socialEnergy: "Introvert", productive: "Night Owl", communication: "Fast responder", freeTime: "Me time", foods: ["Comfort food"], weekend: ["Chill at home"], loveLanguage: ["Words of affirmation"], hobby: ["Nonton film", "Main musik"] }
  },
  {
    uid: "usr_m_15",
    nama: "Oki Febrian",
    umur: 26,
    gender: "Male",
    tinggi: 175,
    ig: "okifeb",
    preference: { minUmur: 21, maxUmur: 26, minTinggi: 156, maxTinggi: 170, hobby: ["Olahraga"], loveLanguage: ["Quality time"] },
    questionnaire: { socialEnergy: "Extrovert", productive: "Morning", communication: "Fast responder", freeTime: "Hangout", foods: ["Healthy set", "Western"], weekend: ["Workout"], loveLanguage: ["Quality time"], hobby: ["Olahraga", "travelling"] }
  },
  {
    uid: "usr_m_16",
    nama: "Pandu Wijaya",
    umur: 28,
    gender: "Male",
    tinggi: 172,
    ig: "panduwjy",
    preference: { minUmur: 23, maxUmur: 28, minTinggi: 155, maxTinggi: 168, hobby: ["Memasak", "Baca buku"], loveLanguage: ["Giving gifts"] },
    questionnaire: { socialEnergy: "Ambivert", productive: "Morning", communication: "Slow responder", freeTime: "Chill at home", foods: ["Indonesian food", "Asian food"], weekend: ["Cafe Hopping", "Food Hunting"], loveLanguage: ["Giving gifts"], hobby: ["Memasak", "Baca buku"] }
  },
  {
    uid: "usr_m_17",
    nama: "Qori Ahmad",
    umur: 24,
    gender: "Male",
    tinggi: 170,
    ig: "qoriahmad",
    preference: { minUmur: 20, maxUmur: 25, minTinggi: 152, maxTinggi: 166, hobby: ["Baca buku", "Nonton film"], loveLanguage: ["Words of affirmation"] },
    questionnaire: { socialEnergy: "Introvert", productive: "Morning", communication: "Slow responder", freeTime: "Me time", foods: ["Asian food"], weekend: ["Chill at home"], loveLanguage: ["Words of affirmation"], hobby: ["Baca buku", "Nonton film"] }
  },
  {
    uid: "usr_m_18",
    nama: "Reza Rahardian",
    umur: 29,
    gender: "Male",
    tinggi: 179,
    ig: "rezarah",
    preference: { minUmur: 23, maxUmur: 29, minTinggi: 160, maxTinggi: 175, hobby: ["Nonton film", "Beauty & fashion"], loveLanguage: ["Quality time"] },
    questionnaire: { socialEnergy: "Extrovert", productive: "Night Owl", communication: "Fast responder", freeTime: "Hangout", foods: ["Western", "Asian food"], weekend: ["Hangout with friends"], loveLanguage: ["Quality time"], hobby: ["Nonton film", "Beauty & fashion"] }
  },
  {
    uid: "usr_m_19",
    nama: "Surya Kencana",
    umur: 25,
    gender: "Male",
    tinggi: 173,
    ig: "suryaknc",
    preference: { minUmur: 21, maxUmur: 26, minTinggi: 155, maxTinggi: 168, hobby: ["travelling", "Olahraga"], loveLanguage: ["Quality time"] },
    questionnaire: { socialEnergy: "Ambivert", productive: "Morning", communication: "Fast responder", freeTime: "Chill at home", foods: ["Indonesian food"], weekend: ["Food Hunting", "Workout"], loveLanguage: ["Quality time"], hobby: ["Olahraga", "travelling"] }
  },
  {
    uid: "usr_m_20",
    nama: "Taufik Hidayat",
    umur: 27,
    gender: "Male",
    tinggi: 176,
    ig: "taufikhdy",
    preference: { minUmur: 22, maxUmur: 27, minTinggi: 156, maxTinggi: 170, hobby: ["Olahraga"], loveLanguage: ["Physical touch"] },
    questionnaire: { socialEnergy: "Extrovert", productive: "Morning", communication: "Fast responder", freeTime: "Hangout", foods: ["Healthy set", "Asian food"], weekend: ["Workout"], loveLanguage: ["Physical touch"], hobby: ["Olahraga"] }
  },
  {
    uid: "usr_m_21",
    nama: "Utama Putra",
    umur: 21,
    gender: "Male",
    tinggi: 168,
    ig: "utamaptr",
    preference: { minUmur: 18, maxUmur: 23, minTinggi: 150, maxTinggi: 165, hobby: ["Nonton film", "Main musik"], loveLanguage: ["Words of affirmation"] },
    questionnaire: { socialEnergy: "Introvert", productive: "Night Owl", communication: "Slow responder", freeTime: "Me time", foods: ["Comfort food"], weekend: ["Chill at home"], loveLanguage: ["Words of affirmation"], hobby: ["Nonton film", "Main musik"] }
  },
  {
    uid: "usr_m_22",
    nama: "Vino Bastian",
    umur: 30,
    gender: "Male",
    tinggi: 178,
    ig: "vinobastian",
    preference: { minUmur: 24, maxUmur: 30, minTinggi: 158, maxTinggi: 172, hobby: ["Nonton film", "travelling"], loveLanguage: ["Quality time"] },
    questionnaire: { socialEnergy: "Ambivert", productive: "Night Owl", communication: "Fast responder", freeTime: "Hangout", foods: ["Western", "Comfort food"], weekend: ["Hangout with friends"], loveLanguage: ["Quality time"], hobby: ["Nonton film", "travelling"] }
  },
  {
    uid: "usr_m_23",
    nama: "Wahyu Hidayat",
    umur: 24,
    gender: "Male",
    tinggi: 171,
    ig: "wahyuhdy",
    preference: { minUmur: 20, maxUmur: 25, minTinggi: 153, maxTinggi: 167, hobby: ["Beauty & fashion", "travelling"], loveLanguage: ["Giving gifts"] },
    questionnaire: { socialEnergy: "Introvert", productive: "Morning", communication: "Fast responder", freeTime: "Me time", foods: ["Asian food"], weekend: ["Cafe Hopping"], loveLanguage: ["Giving gifts"], hobby: ["Beauty & fashion", "travelling"] }
  },
  {
    uid: "usr_m_24",
    nama: "Xavier Lorenzo",
    umur: 23,
    gender: "Male",
    tinggi: 181,
    ig: "xavierlrz",
    preference: { minUmur: 19, maxUmur: 24, minTinggi: 160, maxTinggi: 175, hobby: ["Beauty & fashion", "Main musik"], loveLanguage: ["Physical touch"] },
    questionnaire: { socialEnergy: "Extrovert", productive: "Night Owl", communication: "Fast responder", freeTime: "Hangout", foods: ["Western"], weekend: ["Hangout with friends", "Cafe Hopping"], loveLanguage: ["Physical touch"], hobby: ["Beauty & fashion", "Main musik"] }
  },
  {
    uid: "usr_m_25",
    nama: "Yofa Pratama",
    umur: 26,
    gender: "Male",
    tinggi: 174,
    ig: "yofaprtm",
    preference: { minUmur: 21, maxUmur: 26, minTinggi: 155, maxTinggi: 169, hobby: ["Olahraga", "Memasak"], loveLanguage: ["Quality time"] },
    questionnaire: { socialEnergy: "Ambivert", productive: "Morning", communication: "Fast responder", freeTime: "Chill at home", foods: ["Indonesian food", "Comfort food"], weekend: ["Food Hunting"], loveLanguage: ["Quality time"], hobby: ["Olahraga", "Memasak"] }
  },
  {
    uid: "usr_m_26",
    nama: "Zacky Ahmad",
    umur: 22,
    gender: "Male",
    tinggi: 169,
    ig: "zackyahm",
    preference: { minUmur: 18, maxUmur: 23, minTinggi: 150, maxTinggi: 165, hobby: ["Main musik", "Nonton film"], loveLanguage: ["Words of affirmation"] },
    questionnaire: { socialEnergy: "Introvert", productive: "Night Owl", communication: "Slow responder", freeTime: "Me time", foods: ["Comfort food"], weekend: ["Chill at home"], loveLanguage: ["Words of affirmation"], hobby: ["Main musik", "Nonton film"] }
  },
  {
    uid: "usr_m_27",
    nama: "Aditya Roy",
    umur: 28,
    gender: "Male",
    tinggi: 176,
    ig: "adityaroy",
    preference: { minUmur: 22, maxUmur: 28, minTinggi: 158, maxTinggi: 172, hobby: ["Olahraga", "travelling"], loveLanguage: ["Quality time"] },
    questionnaire: { socialEnergy: "Extrovert", productive: "Morning", communication: "Fast responder", freeTime: "Hangout", foods: ["Healthy set", "Asian food"], weekend: ["Workout", "Food Hunting"], loveLanguage: ["Quality time"], hobby: ["Olahraga", "travelling"] }
  },
  {
    uid: "usr_m_28",
    nama: "Bagas Kara",
    umur: 25,
    gender: "Male",
    tinggi: 172,
    ig: "bagaskara",
    preference: { minUmur: 20, maxUmur: 25, minTinggi: 154, maxTinggi: 168, hobby: ["Baca buku", "Memasak"], loveLanguage: ["Giving gifts"] },
    questionnaire: { socialEnergy: "Ambivert", productive: "Morning", communication: "Fast responder", freeTime: "Chill at home", foods: ["Asian food"], weekend: ["Cafe Hopping"], loveLanguage: ["Giving gifts"], hobby: ["Baca buku", "Memasak"] }
  },
  {
    uid: "usr_m_29",
    nama: "Christian Sugiono",
    umur: 29,
    gender: "Male",
    tinggi: 182,
    ig: "christiansug",
    preference: { minUmur: 23, maxUmur: 29, minTinggi: 160, maxTinggi: 175, hobby: ["travelling", "Olahraga"], loveLanguage: ["Quality time"] },
    questionnaire: { socialEnergy: "Extrovert", productive: "Morning", communication: "Fast responder", freeTime: "Hangout", foods: ["Western", "Indonesian food"], weekend: ["Hangout with friends"], loveLanguage: ["Quality time"], hobby: ["travelling", "Olahraga"] }
  },
  {
    uid: "usr_m_30",
    nama: "Dimas Anggara",
    umur: 27,
    gender: "Male",
    tinggi: 173,
    ig: "dimasanggr",
    preference: { minUmur: 22, maxUmur: 27, minTinggi: 155, maxTinggi: 169, hobby: ["Main musik"], loveLanguage: ["Words of affirmation"] },
    questionnaire: { socialEnergy: "Ambivert", productive: "Night Owl", communication: "Fast responder", freeTime: "Chill at home", foods: ["Comfort food"], weekend: ["Chill at home"], loveLanguage: ["Words of affirmation"], hobby: ["Main musik", "Nonton film"] }
  },
  {
    uid: "usr_m_31",
    nama: "Ello Tahitoe",
    umur: 26,
    gender: "Male",
    tinggi: 175,
    ig: "ellotht",
    preference: { minUmur: 21, maxUmur: 26, minTinggi: 156, maxTinggi: 170, hobby: ["Main musik"], loveLanguage: ["Physical touch"] },
    questionnaire: { socialEnergy: "Extrovert", productive: "Night Owl", communication: "Fast responder", freeTime: "Hangout", foods: ["Western"], weekend: ["Hangout with friends"], loveLanguage: ["Physical touch"], hobby: ["Main musik", "travelling"] }
  },
  {
    uid: "usr_m_32",
    nama: "Fero Walandouw",
    umur: 28,
    gender: "Male",
    tinggi: 177,
    ig: "ferowld",
    preference: { minUmur: 22, maxUmur: 28, minTinggi: 158, maxTinggi: 172, hobby: ["Olahraga"], loveLanguage: ["Quality time"] },
    questionnaire: { socialEnergy: "Extrovert", productive: "Morning", communication: "Fast responder", freeTime: "Hangout", foods: ["Healthy set"], weekend: ["Workout"], loveLanguage: ["Quality time"], hobby: ["Olahraga"] }
  },
  {
    uid: "usr_m_33",
    nama: "Gading Marten",
    umur: 30,
    gender: "Male",
    tinggi: 173,
    ig: "gadingmrt",
    preference: { minUmur: 23, maxUmur: 29, minTinggi: 155, maxTinggi: 170, hobby: ["travelling", "Beauty & fashion"], loveLanguage: ["Giving gifts"] },
    questionnaire: { socialEnergy: "Extrovert", productive: "Night Owl", communication: "Fast responder", freeTime: "Hangout", foods: ["Asian food", "Comfort food"], weekend: ["Hangout with friends", "Food Hunting"], loveLanguage: ["Giving gifts"], hobby: ["travelling", "Beauty & fashion"] }
  },
  {
    uid: "usr_m_34",
    nama: "Hamish Daud",
    umur: 31,
    gender: "Male",
    tinggi: 180,
    ig: "hamishdud",
    preference: { minUmur: 24, maxUmur: 30, minTinggi: 160, maxTinggi: 175, hobby: ["travelling", "Olahraga"], loveLanguage: ["Quality time"] },
    questionnaire: { socialEnergy: "Ambivert", productive: "Morning", communication: "Fast responder", freeTime: "Hangout", foods: ["Healthy set", "Indonesian food"], weekend: ["Workout"], loveLanguage: ["Quality time"], hobby: ["travelling", "Olahraga"] }
  },
  {
    uid: "usr_m_35",
    nama: "Iqbaal Ramadhan",
    umur: 22,
    gender: "Male",
    tinggi: 172,
    ig: "iqbaalrmd",
    preference: { minUmur: 18, maxUmur: 23, minTinggi: 152, maxTinggi: 167, hobby: ["Main musik", "Baca buku"], loveLanguage: ["Words of affirmation"] },
    questionnaire: { socialEnergy: "Ambivert", productive: "Morning", communication: "Slow responder", freeTime: "Me time", foods: ["Asian food"], weekend: ["Cafe Hopping"], loveLanguage: ["Words of affirmation"], hobby: ["Main musik", "Baca buku"] }
  },

  // --- USER FEMALE (36 - 70) ---
  {
    uid: "usr_f_36",
    nama: "Anisa Rahma",
    umur: 22,
    gender: "Female",
    tinggi: 160,
    ig: "anisarahma",
    preference: { minUmur: 23, maxUmur: 28, minTinggi: 168, maxTinggi: 180, hobby: ["travelling", "Baca buku"], loveLanguage: ["Words of affirmation"] },
    questionnaire: { socialEnergy: "Introvert", productive: "Morning", communication: "Fast responder", freeTime: "Chill at home", foods: ["Asian food", "Comfort food"], weekend: ["Chill at home"], loveLanguage: ["Words of affirmation", "Quality time"], hobby: ["travelling", "Baca buku"] }
  },
  {
    uid: "usr_f_37",
    nama: "Bella Saphira",
    umur: 25,
    gender: "Female",
    tinggi: 165,
    ig: "bellasph",
    preference: { minUmur: 25, maxUmur: 30, minTinggi: 172, maxTinggi: 185, hobby: ["Olahraga", "Memasak"], loveLanguage: ["Quality time"] },
    questionnaire: { socialEnergy: "Extrovert", productive: "Night Owl", communication: "Fast responder", freeTime: "Hangout", foods: ["Western", "Comfort food"], weekend: ["Food Hunting", "Hangout with friends"], loveLanguage: ["Quality time"], hobby: ["Olahraga", "Memasak"] }
  },
  {
    uid: "usr_f_38",
    nama: "Citra Kirana",
    umur: 24,
    gender: "Female",
    tinggi: 162,
    ig: "citrakrn",
    preference: { minUmur: 24, maxUmur: 29, minTinggi: 170, maxTinggi: 182, hobby: ["Beauty & fashion", "Memasak"], loveLanguage: ["Giving gifts"] },
    questionnaire: { socialEnergy: "Ambivert", productive: "Morning", communication: "Fast responder", freeTime: "Chill at home", foods: ["Asian food", "Indonesian food"], weekend: ["Cafe Hopping"], loveLanguage: ["Giving gifts", "Words of affirmation"], hobby: ["Beauty & fashion", "Memasak"] }
  },
  {
    uid: "usr_f_39",
    nama: "Dian Sastrowardoyo",
    umur: 28,
    gender: "Female",
    tinggi: 164,
    ig: "therealdiansastro",
    preference: { minUmur: 27, maxUmur: 32, minTinggi: 172, maxTinggi: 185, hobby: ["Baca buku", "Olahraga"], loveLanguage: ["Quality time"] },
    questionnaire: { socialEnergy: "Ambivert", productive: "Morning", communication: "Slow responder", freeTime: "Me time", foods: ["Healthy set", "Asian food"], weekend: ["Workout"], loveLanguage: ["Quality time"], hobby: ["Baca buku", "Olahraga"] }
  },
  {
    uid: "usr_f_40",
    nama: "Enzy Storia",
    umur: 23,
    gender: "Female",
    tinggi: 158,
    ig: "enzystoria",
    preference: { minUmur: 23, maxUmur: 28, minTinggi: 168, maxTinggi: 180, hobby: ["travelling", "Memasak"], loveLanguage: ["Words of affirmation"] },
    questionnaire: { socialEnergy: "Extrovert", productive: "Night Owl", communication: "Fast responder", freeTime: "Hangout", foods: ["Indonesian food", "Comfort food"], weekend: ["Food Hunting", "Hangout with friends"], loveLanguage: ["Words of affirmation"], hobby: ["travelling", "Memasak"] }
  },
  {
    uid: "usr_f_41",
    nama: "Febby Rastanty",
    umur: 21,
    gender: "Female",
    tinggi: 159,
    ig: "febbyrst",
    preference: { minUmur: 22, maxUmur: 26, minTinggi: 169, maxTinggi: 180, hobby: ["Olahraga", "Beauty & fashion"], loveLanguage: ["Physical touch"] },
    questionnaire: { socialEnergy: "Ambivert", productive: "Morning", communication: "Fast responder", freeTime: "Chill at home", foods: ["Asian food"], weekend: ["Cafe Hopping", "Workout"], loveLanguage: ["Physical touch"], hobby: ["Olahraga", "Beauty & fashion"] }
  },
  {
    uid: "usr_f_42",
    nama: "Gisella Anastasia",
    umur: 27,
    gender: "Female",
    tinggi: 163,
    ig: "gisel_la",
    preference: { minUmur: 26, maxUmur: 31, minTinggi: 170, maxTinggi: 182, hobby: ["Olahraga", "Main musik"], loveLanguage: ["Quality time"] },
    questionnaire: { socialEnergy: "Extrovert", productive: "Morning", communication: "Fast responder", freeTime: "Hangout", foods: ["Healthy set", "Comfort food"], weekend: ["Workout", "Hangout with friends"], loveLanguage: ["Quality time"], hobby: ["Olahraga", "Main musik"] }
  },
  {
    uid: "usr_f_43",
    nama: "Hania Bintari",
    umur: 20,
    gender: "Female",
    tinggi: 155,
    ig: "haniabntr",
    preference: { minUmur: 21, maxUmur: 25, minTinggi: 165, maxTinggi: 178, hobby: ["Nonton film", "Baca buku"], loveLanguage: ["Words of affirmation"] },
    questionnaire: { socialEnergy: "Introvert", productive: "Night Owl", communication: "Slow responder", freeTime: "Me time", foods: ["Comfort food"], weekend: ["Chill at home"], loveLanguage: ["Words of affirmation"], hobby: ["Nonton film", "Baca buku"] }
  },
  {
    uid: "usr_f_44",
    nama: "Isyana Sarasvati",
    umur: 25,
    gender: "Female",
    tinggi: 161,
    ig: "isyanasarasvati",
    preference: { minUmur: 24, maxUmur: 29, minTinggi: 168, maxTinggi: 180, hobby: ["Main musik", "Nonton film"], loveLanguage: ["Quality time"] },
    questionnaire: { socialEnergy: "Ambivert", productive: "Night Owl", communication: "Slow responder", freeTime: "Me time", foods: ["Asian food", "Western"], weekend: ["Chill at home"], loveLanguage: ["Quality time"], hobby: ["Main musik", "Nonton film"] }
  },
  {
    uid: "usr_f_45",
    nama: "Jessica Mila",
    umur: 26,
    gender: "Female",
    tinggi: 162,
    ig: "jessicamila",
    preference: { minUmur: 25, maxUmur: 30, minTinggi: 170, maxTinggi: 182, hobby: ["Olahraga", "travelling"], loveLanguage: ["Quality time"] },
    questionnaire: { socialEnergy: "Ambivert", productive: "Morning", communication: "Fast responder", freeTime: "Chill at home", foods: ["Healthy set", "Asian food"], weekend: ["Workout", "Cafe Hopping"], loveLanguage: ["Quality time"], hobby: ["Olahraga", "travelling"] }
  },
  {
    uid: "usr_f_46",
    nama: "Kiki Amalia",
    umur: 29,
    gender: "Female",
    tinggi: 160,
    ig: "kikiamalia",
    preference: { minUmur: 28, maxUmur: 33, minTinggi: 170, maxTinggi: 183, hobby: ["Memasak", "Main musik"], loveLanguage: ["Giving gifts"] },
    questionnaire: { socialEnergy: "Extrovert", productive: "Night Owl", communication: "Fast responder", freeTime: "Hangout", foods: ["Indonesian food"], weekend: ["Food Hunting"], loveLanguage: ["Giving gifts"], hobby: ["Memasak", "Main musik"] }
  },
  {
    uid: "usr_f_47",
    nama: "Laudya Cynthia",
    umur: 27,
    gender: "Female",
    tinggi: 160,
    ig: "laudyacyn",
    preference: { minUmur: 26, maxUmur: 31, minTinggi: 168, maxTinggi: 180, hobby: ["Beauty & fashion", "Baca buku"], loveLanguage: ["Words of affirmation"] },
    questionnaire: { socialEnergy: "Introvert", productive: "Morning", communication: "Fast responder", freeTime: "Chill at home", foods: ["Asian food"], weekend: ["Cafe Hopping"], loveLanguage: ["Words of affirmation"], hobby: ["Beauty & fashion", "Baca buku"] }
  },
  {
    uid: "usr_f_48",
    nama: "Maudy Ayunda",
    umur: 24,
    gender: "Female",
    tinggi: 165,
    ig: "maudyayunda",
    preference: { minUmur: 24, maxUmur: 29, minTinggi: 170, maxTinggi: 183, hobby: ["Baca buku", "travelling"], loveLanguage: ["Words of affirmation"] },
    questionnaire: { socialEnergy: "Ambivert", productive: "Morning", communication: "Fast responder", freeTime: "Me time", foods: ["Healthy set", "Asian food"], weekend: ["Chill at home"], loveLanguage: ["Words of affirmation", "Quality time"], hobby: ["Baca buku", "travelling"] }
  },
  {
    uid: "usr_f_49",
    nama: "Nadin Amizah",
    umur: 21,
    gender: "Female",
    tinggi: 156,
    ig: "mellowpanigg",
    preference: { minUmur: 22, maxUmur: 26, minTinggi: 168, maxTinggi: 180, hobby: ["Main musik", "Baca buku"], loveLanguage: ["Words of affirmation"] },
    questionnaire: { socialEnergy: "Introvert", productive: "Night Owl", communication: "Slow responder", freeTime: "Me time", foods: ["Comfort food"], weekend: ["Chill at home"], loveLanguage: ["Words of affirmation"], hobby: ["Main musik", "Baca buku"] }
  },
  {
    uid: "usr_f_50",
    nama: "Olivia Jensen",
    umur: 25,
    gender: "Female",
    tinggi: 166,
    ig: "oliviajensen",
    preference: { minUmur: 25, maxUmur: 30, minTinggi: 172, maxTinggi: 185, hobby: ["Beauty & fashion", "travelling"], loveLanguage: ["Giving gifts"] },
    questionnaire: { socialEnergy: "Ambivert", productive: "Morning", communication: "Fast responder", freeTime: "Chill at home", foods: ["Western", "Asian food"], weekend: ["Cafe Hopping"], loveLanguage: ["Giving gifts"], hobby: ["Beauty & fashion", "travelling"] }
  },
  {
    uid: "usr_f_51",
    nama: "Prilly Latuconsina",
    umur: 23,
    gender: "Female",
    tinggi: 154,
    ig: "prillylatuconsina",
    preference: { minUmur: 23, maxUmur: 28, minTinggi: 168, maxTinggi: 180, hobby: ["Memasak", "Nonton film"], loveLanguage: ["Quality time"] },
    questionnaire: { socialEnergy: "Extrovert", productive: "Morning", communication: "Fast responder", freeTime: "Hangout", foods: ["Indonesian food", "Comfort food"], weekend: ["Food Hunting"], loveLanguage: ["Quality time"], hobby: ["Memasak", "Nonton film"] }
  },
  {
    uid: "usr_f_52",
    nama: "Pevita Pearce",
    umur: 26,
    gender: "Female",
    tinggi: 165,
    ig: "pexitapearce",
    preference: { minUmur: 25, maxUmur: 30, minTinggi: 172, maxTinggi: 185, hobby: ["Olahraga", "Nonton film"], loveLanguage: ["Physical touch"] },
    questionnaire: { socialEnergy: "Ambivert", productive: "Night Owl", communication: "Fast responder", freeTime: "Hangout", foods: ["Western", "Healthy set"], weekend: ["Workout", "Hangout with friends"], loveLanguage: ["Physical touch"], hobby: ["Olahraga", "Nonton film"] }
  },
  {
    uid: "usr_f_53",
    nama: "Raisa Andriana",
    umur: 28,
    gender: "Female",
    tinggi: 169,
    ig: "raisa6690",
    preference: { minUmur: 27, maxUmur: 32, minTinggi: 174, maxTinggi: 188, hobby: ["Main musik", "Memasak"], loveLanguage: ["Quality time"] },
    questionnaire: { socialEnergy: "Ambivert", productive: "Morning", communication: "Fast responder", freeTime: "Chill at home", foods: ["Asian food"], weekend: ["Cafe Hopping"], loveLanguage: ["Quality time"], hobby: ["Main musik", "Memasak"] }
  },
  {
    uid: "usr_f_54",
    nama: "Raline Shah",
    umur: 29,
    gender: "Female",
    tinggi: 171,
    ig: "ralineshah",
    preference: { minUmur: 28, maxUmur: 34, minTinggi: 175, maxTinggi: 190, hobby: ["travelling", "Olahraga"], loveLanguage: ["Quality time"] },
    questionnaire: { socialEnergy: "Extrovert", productive: "Morning", communication: "Fast responder", freeTime: "Hangout", foods: ["Healthy set", "Western"], weekend: ["Workout", "Hangout with friends"], loveLanguage: ["Quality time"], hobby: ["travelling", "Olahraga"] }
  },
  {
    uid: "usr_f_55",
    nama: "Sherina Munaf",
    umur: 27,
    gender: "Female",
    tinggi: 160,
    ig: "sherinasinna",
    preference: { minUmur: 26, maxUmur: 31, minTinggi: 168, maxTinggi: 180, hobby: ["Main musik", "Baca buku"], loveLanguage: ["Words of affirmation"] },
    questionnaire: { socialEnergy: "Introvert", productive: "Night Owl", communication: "Slow responder", freeTime: "Me time", foods: ["Asian food"], weekend: ["Chill at home"], loveLanguage: ["Words of affirmation"], hobby: ["Main musik", "Baca buku"] }
  },
  {
    uid: "usr_f_56",
    nama: "Siti Badriah",
    umur: 25,
    gender: "Female",
    tinggi: 158,
    ig: "sitibadriah",
    preference: { minUmur: 24, maxUmur: 29, minTinggi: 168, maxTinggi: 180, hobby: ["Memasak", "Main musik"], loveLanguage: ["Giving gifts"] },
    questionnaire: { socialEnergy: "Extrovert", productive: "Night Owl", communication: "Fast responder", freeTime: "Hangout", foods: ["Indonesian food"], weekend: ["Food Hunting"], loveLanguage: ["Giving gifts"], hobby: ["Memasak", "Main musik"] }
  },
  {
    uid: "usr_f_57",
    nama: "Tissa Biani",
    umur: 20,
    gender: "Female",
    tinggi: 152,
    ig: "tissabiani",
    preference: { minUmur: 21, maxUmur: 25, minTinggi: 165, maxTinggi: 178, hobby: ["Main musik", "Nonton film"], loveLanguage: ["Quality time"] },
    questionnaire: { socialEnergy: "Ambivert", productive: "Morning", communication: "Fast responder", freeTime: "Chill at home", foods: ["Comfort food"], weekend: ["Chill at home"], loveLanguage: ["Quality time"], hobby: ["Main musik", "Nonton film"] }
  },
  {
    uid: "usr_f_58",
    nama: "Tiara Andini",
    umur: 21,
    gender: "Female",
    tinggi: 163,
    ig: "tiaraandini",
    preference: { minUmur: 21, maxUmur: 26, minTinggi: 168, maxTinggi: 180, hobby: ["Main musik", "Beauty & fashion"], loveLanguage: ["Words of affirmation"] },
    questionnaire: { socialEnergy: "Extrovert", productive: "Night Owl", communication: "Fast responder", freeTime: "Hangout", foods: ["Asian food", "Comfort food"], weekend: ["Hangout with friends"], loveLanguage: ["Words of affirmation"], hobby: ["Main musik", "Beauty & fashion"] }
  },
  {
    uid: "usr_f_59",
    nama: "Unagi Putri",
    umur: 23,
    gender: "Female",
    tinggi: 161,
    ig: "unagiptr",
    preference: { minUmur: 22, maxUmur: 27, minTinggi: 168, maxTinggi: 180, hobby: ["Nonton film", "Baca buku"], loveLanguage: ["Words of affirmation"] },
    questionnaire: { socialEnergy: "Introvert", productive: "Night Owl", communication: "Slow responder", freeTime: "Me time", foods: ["Asian food"], weekend: ["Chill at home"], loveLanguage: ["Words of affirmation"], hobby: ["Nonton film", "Baca buku"] }
  },
  {
    uid: "usr_f_60",
    nama: "Vanesha Prescilla",
    umur: 22,
    gender: "Female",
    tinggi: 160,
    ig: "vaneshaass",
    preference: { minUmur: 22, maxUmur: 27, minTinggi: 168, maxTinggi: 182, hobby: ["Beauty & fashion", "travelling"], loveLanguage: ["Quality time"] },
    questionnaire: { socialEnergy: "Ambivert", productive: "Morning", communication: "Fast responder", freeTime: "Chill at home", foods: ["Asian food", "Comfort food"], weekend: ["Cafe Hopping"], loveLanguage: ["Quality time"], hobby: ["Beauty & fashion", "travelling"] }
  },
  {
    uid: "usr_f_61",
    nama: "Wika Salim",
    umur: 28,
    gender: "Female",
    tinggi: 159,
    ig: "wikasalim",
    preference: { minUmur: 27, maxUmur: 32, minTinggi: 170, maxTinggi: 183, hobby: ["Olahraga"], loveLanguage: ["Physical touch"] },
    questionnaire: { socialEnergy: "Extrovert", productive: "Morning", communication: "Fast responder", freeTime: "Hangout", foods: ["Healthy set", "Indonesian food"], weekend: ["Workout"], loveLanguage: ["Physical touch"], hobby: ["Olahraga"] }
  },
  {
    uid: "usr_f_62",
    nama: "Yura Yunita",
    umur: 27,
    gender: "Female",
    tinggi: 157,
    ig: "yurayunita",
    preference: { minUmur: 26, maxUmur: 31, minTinggi: 168, maxTinggi: 180, hobby: ["Main musik", "Beauty & fashion"], loveLanguage: ["Words of affirmation"] },
    questionnaire: { socialEnergy: "Ambivert", productive: "Morning", communication: "Fast responder", freeTime: "Chill at home", foods: ["Indonesian food"], weekend: ["Hangout with friends"], loveLanguage: ["Words of affirmation"], hobby: ["Main musik", "Beauty & fashion"] }
  },
  {
    uid: "usr_f_63",
    nama: "Ziva Magnolya",
    umur: 21,
    gender: "Female",
    tinggi: 153,
    ig: "zivamagnolya",
    preference: { minUmur: 21, maxUmur: 25, minTinggi: 168, maxTinggi: 178, hobby: ["Main musik", "Memasak"], loveLanguage: ["Giving gifts"] },
    questionnaire: { socialEnergy: "Extrovert", productive: "Night Owl", communication: "Fast responder", freeTime: "Hangout", foods: ["Comfort food", "Asian food"], weekend: ["Food Hunting"], loveLanguage: ["Giving gifts"], hobby: ["Main musik", "Memasak"] }
  },
  {
    uid: "usr_f_64",
    nama: "Alya Rohali",
    umur: 30,
    gender: "Female",
    tinggi: 165,
    ig: "alyarohali",
    preference: { minUmur: 29, maxUmur: 35, minTinggi: 172, maxTinggi: 185, hobby: ["Olahraga", "Baca buku"], loveLanguage: ["Quality time"] },
    questionnaire: { socialEnergy: "Ambivert", productive: "Morning", communication: "Slow responder", freeTime: "Me time", foods: ["Healthy set"], weekend: ["Workout"], loveLanguage: ["Quality time"], hobby: ["Olahraga", "Baca buku"] }
  },
  {
    uid: "usr_f_65",
    nama: "Bunga Citra",
    umur: 28,
    gender: "Female",
    tinggi: 162,
    ig: "bclsinclair",
    preference: { minUmur: 27, maxUmur: 33, minTinggi: 170, maxTinggi: 185, hobby: ["Main musik", "Beauty & fashion"], loveLanguage: ["Quality time"] },
    questionnaire: { socialEnergy: "Extrovert", productive: "Night Owl", communication: "Fast responder", freeTime: "Hangout", foods: ["Western", "Asian food"], weekend: ["Hangout with friends"], loveLanguage: ["Quality time"], hobby: ["Main musik", "Beauty & fashion"] }
  },
  {
    uid: "usr_f_66",
    nama: "Chelsea Islan",
    umur: 24,
    gender: "Female",
    tinggi: 167,
    ig: "chelseaislan",
    preference: { minUmur: 24, maxUmur: 29, minTinggi: 170, maxTinggi: 183, hobby: ["Baca buku", "Nonton film"], loveLanguage: ["Words of affirmation"] },
    questionnaire: { socialEnergy: "Introvert", productive: "Morning", communication: "Fast responder", freeTime: "Me time", foods: ["Western", "Healthy set"], weekend: ["Chill at home"], loveLanguage: ["Words of affirmation"], hobby: ["Baca buku", "Nonton film"] }
  },
  {
    uid: "usr_f_67",
    nama: "Della Dartyan",
    umur: 26,
    gender: "Female",
    tinggi: 168,
    ig: "delladartyan",
    preference: { minUmur: 25, maxUmur: 30, minTinggi: 172, maxTinggi: 185, hobby: ["travelling", "Olahraga"], loveLanguage: ["Quality time"] },
    questionnaire: { socialEnergy: "Ambivert", productive: "Morning", communication: "Fast responder", freeTime: "Hangout", foods: ["Indonesian food"], weekend: ["Workout"], loveLanguage: ["Quality time"], hobby: ["travelling", "Olahraga"] }
  },
  {
    uid: "usr_f_68",
    nama: "Eva Celia",
    umur: 25,
    gender: "Female",
    tinggi: 160,
    ig: "evacelia",
    preference: { minUmur: 24, maxUmur: 29, minTinggi: 168, maxTinggi: 180, hobby: ["Main musik", "Memasak"], loveLanguage: ["Words of affirmation"] },
    questionnaire: { socialEnergy: "Introvert", productive: "Night Owl", communication: "Slow responder", freeTime: "Me time", foods: ["Healthy set", "Asian food"], weekend: ["Chill at home"], loveLanguage: ["Words of affirmation"], hobby: ["Main musik", "Memasak"] }
  },
  {
    uid: "usr_f_69",
    nama: "Freya Jayawardana",
    umur: 19,
    gender: "Female",
    tinggi: 154,
    ig: "freyajtw",
    preference: { minUmur: 20, maxUmur: 24, minTinggi: 168, maxTinggi: 178, hobby: ["Nonton film", "Olahraga"], loveLanguage: ["Quality time"] },
    questionnaire: { socialEnergy: "Ambivert", productive: "Night Owl", communication: "Fast responder", freeTime: "Hangout", foods: ["Comfort food", "Asian food"], weekend: ["Hangout with friends"], loveLanguage: ["Quality time"], hobby: ["Nonton film", "Olahraga"] }
  },
  {
    uid: "usr_f_70",
    nama: "Gita Gutawa",
    umur: 26,
    gender: "Female",
    tinggi: 155,
    ig: "gitagut",
    preference: { minUmur: 25, maxUmur: 30, minTinggi: 168, maxTinggi: 180, hobby: ["Main musik", "Baca buku"], loveLanguage: ["Words of affirmation"] },
    questionnaire: { socialEnergy: "Introvert", productive: "Morning", communication: "Slow responder", freeTime: "Me time", foods: ["Asian food"], weekend: ["Chill at home"], loveLanguage: ["Words of affirmation"], hobby: ["Main musik", "Baca buku"] }
  }
];

export default dummyUsers;