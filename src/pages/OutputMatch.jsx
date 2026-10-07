import { useEffect, useState } from "react";
import "../assets/style/output.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

export default function OutputMatch({ data, engine, currentUserId , handleLogout}) {
  // State untuk menyimpan daftar rekomendasi user aktif
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    if (!data || !engine) return;

    // 1. Jalankan proses matching
    const results = engine.generateMatching(data);
    console.log("Hasil Match Engine:", results);

    // 2. Cari hasil match milik user yang sedang login (berdasarkan currentUserId).
    // Jika tidak ditemukan/testing dummy, gunakan hasil user pertama (results[0])
    const currentUserMatch = results.find(
      (item) => item.user.uid === currentUserId
    ) || results[0];

    if (currentUserMatch) {
      setRecommendations(currentUserMatch.recommendations);
    }
  }, [data, engine, currentUserId]);

  return (
    <main>
      <header>
        <h1>Meet Your Top Matches!</h1>
        <div>
          <FontAwesomeIcon icon={faCommentDots} className="chat-icon" />

        </div>
      </header>

      {/* 3. Looping rekomendasi pasangan */}
      {recommendations.length > 0 ? (
        recommendations.map((matchUser) => (
          <section className="card-container" key={matchUser.uid}>
            <span className="title">
              {matchUser.nama}, {matchUser.umur}th . {matchUser.tinggi} cm
            </span>

            <div className="details">
              <div className="user-photo">
                {/* Tempat foto jika ada */}
              </div>

              {/* Looping Alasan Match / Traits */}
              <div className="traits-label">
                {matchUser.reason && matchUser.reason.length > 0 ? (
                  matchUser.reason.map((trait, index) => (
                    <div className="trait" key={index}>
                      <p className="trait-text">{trait}</p>
                    </div>
                  ))
                ) : (
                  <div className="trait">
                    <p className="trait-text">Compatible</p>
                  </div>
                )}
              </div>
            </div>

            <div className="instagram">
              <FontAwesomeIcon icon={faInstagram} />{" "}
              <span>{matchUser.ig || "@instagram"}</span>
            </div>
          </section>
        ))
      ) : (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Belum ada pasangan yang cocok ditemukan.
        </p>
      )}
      <button className="signOut-btn" onClick={handleLogout}>signout</button>
    </main>
  );
}