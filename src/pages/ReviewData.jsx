import { useState } from "react";
import "../assets/style/review.css";

export default function ReviewData({ srcData, setData, submitting }) {

  const [editDiri, setEditDiri] = useState(false);
  const [editTentang, setEditTentang] = useState(false);

  /* =========================
     OPTION QUESTIONNAIRE
  ========================= */

  const socialVibeOptions = [
    "Introvert",
    "Extrovert",
    "Ambivert"
  ];

  const activityOptions = [
    "Hangout",
    "Me time",
    "Olahraga",
    "Travelling",
    "Nonton film"
  ];

  const dailyStyleOptions = [
    "Morning person",
    "Night owl"
  ];

  const textingStyleOptions = [
    "Fast responder",
    "Slow responder",
    "Sometimes disappear"
  ];

  /* =========================
     DATA DIRI
  ========================= */

  function handleEditDiri() {

    if (editDiri) {

      if (
        !srcData.nama?.trim() ||
        !srcData.umur ||
        !srcData.tinggi ||
        !srcData.instagram?.trim()
      ) {
        alert("Semua data diri harus diisi.");
        return;
      }

    }

    setEditDiri(!editDiri);
  }

  function handleChange(event) {

    const { name, value } = event.target;

    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  /* =========================
     QUESTIONNAIRE
  ========================= */

  function handleQuestionnaireChange(event) {

    const { name, value } = event.target;

    setData((prev) => ({
      ...prev,
      questionnaire: {
        ...prev.questionnaire,
        [name]: value
      }
    }));
  }

  return (
    <div className="review-container">

      <h1>
        One last check before we find
        <br />
        your match!
      </h1>


      {/* =========================
          DATA DIRI
      ========================= */}

      <section className="review-section">

        <h2>Data diri</h2>

        <div className="review-data">

          <div className="review-row">

            <span>NAMA</span>

            <input
              type="text"
              name="nama"
              value={srcData.nama || ""}
              onChange={handleChange}
              disabled={!editDiri}
            />

          </div>


          <div className="review-row">

            <span>UMUR</span>

            <div className="review-value">

              <input
                type="number"
                name="umur"
                value={srcData.umur || ""}
                onChange={handleChange}
                disabled={!editDiri}
              />

              <span className="units">th</span>

            </div>

          </div>


          <div className="review-row">

            <span>TINGGI BADAN</span>

            <div className="review-value">

              <input
                type="number"
                name="tinggi"
                value={srcData.tinggi || ""}
                onChange={handleChange}
                disabled={!editDiri}
              />

              <span className="units">cm</span>

            </div>

          </div>


          <div className="review-row">

            <span>USERNAME IG</span>

            <input
              type="text"
              name="instagram"
              value={srcData.instagram || ""}
              onChange={handleChange}
              disabled={!editDiri}
            />

          </div>

        </div>


        <button
          className="review-edit-button"
          onClick={handleEditDiri}
        >
          {editDiri ? "selesai" : "ubah"}
        </button>

      </section>


      {/* =========================
          TENTANG KAMU
      ========================= */}

      <section className="review-section tentang-section">

        <h2>Tentang Kamu</h2>

        <div className="review-data">


          {/* SOCIAL VIBE */}

          <div className="review-row">

            <span>SOCIAL VIBE</span>

            {editTentang ? (

              <select
                name="socialEnergy"
                value={
                  srcData.questionnaire?.socialEnergy || ""
                }
                onChange={handleQuestionnaireChange}
              >

                {socialVibeOptions.map((option) => (
                  <option
                    key={option}
                    value={option}
                  >
                    {option}
                  </option>
                ))}

              </select>

            ) : (

              <span className="review-answer">
                {srcData.questionnaire?.socialEnergy || ""}
              </span>

            )}

          </div>


          {/* YOUR GO TO ACTIVITY */}

          <div className="review-row">

            <span>YOUR GO TO ACTIVITY</span>

            {editTentang ? (

              <select
                name="freeTime"
                value={
                  srcData.questionnaire?.freeTime || ""
                }
                onChange={handleQuestionnaireChange}
              >

                {activityOptions.map((option) => (
                  <option
                    key={option}
                    value={option}
                  >
                    {option}
                  </option>
                ))}

              </select>

            ) : (

              <span className="review-answer">
                {srcData.questionnaire?.freeTime || ""}
              </span>

            )}

          </div>


          {/* DAILY STYLE */}

          <div className="review-row">

            <span>DAILY STYLE</span>

            {editTentang ? (

              <select
                name="productive"
                value={
                  srcData.questionnaire?.productive || ""
                }
                onChange={handleQuestionnaireChange}
              >

                {dailyStyleOptions.map((option) => (
                  <option
                    key={option}
                    value={option}
                  >
                    {option}
                  </option>
                ))}

              </select>

            ) : (

              <span className="review-answer">
                {srcData.questionnaire?.productive || ""}
              </span>

            )}

          </div>


          {/* TEXTING STYLE */}

          <div className="review-row">

            <span>TEXTING STYLE</span>

            {editTentang ? (

              <select
                name="communication"
                value={
                  srcData.questionnaire?.communication || ""
                }
                onChange={handleQuestionnaireChange}
              >

                {textingStyleOptions.map((option) => (
                  <option
                    key={option}
                    value={option}
                  >
                    {option}
                  </option>
                ))}

              </select>

            ) : (

              <span className="review-answer">
                {srcData.questionnaire?.communication || ""}
              </span>

            )}

          </div>

        </div>


        <button
          className="review-edit-button"
          onClick={() => setEditTentang(!editTentang)}
        >
          {editTentang ? "selesai" : "ubah"}
        </button>

      </section>


      {/* =========================
          SUBMIT
      ========================= */}

      <button
        onClick={() => submitting(srcData)}
        className="review-submit"
      >
        submit
      </button>

    </div>
  );
}