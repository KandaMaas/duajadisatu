import { useEffect } from "react";
import "../assets/style/output.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faComments } from "@fortawesome/free-regular-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
export default function OutputMatch({data,engine}){
useEffect(() => {
    const results = engine.generateMatching(data);
    console.log("Hasil Match Engine:", results);
  }, []);
  return (<>
    <main>
      <header>
        <h1>Meet Your Top Matches!</h1>
        <FontAwesomeIcon icon={faCommentDots} className="chat-icon"/>

      </header>
      <section className="card-container">
        <span className="title">Kirana, 26th . 162 cm</span>
        <div className="details">
          <div className="user-photo">

          </div>
          <div className="traits-label">
            <div className="trait">
              <p className="trait-text"> Chill</p>
            </div>
            <div className="trait">
              <p className="trait-text">introvert</p>
            </div>
          </div>
        </div>
        <div className="instagram">
          <FontAwesomeIcon icon={faInstagram} /> <span>@kirana..x</span>
        </div>  
      </section>
      <section className="card-container">
        <span className="title">Kirana, 26th . 162 cm</span>
        <div className="details">
          <div className="user-photo">

          </div>
          <div className="traits-label">
            <div className="trait">
              <p className="trait-text"> Chill</p>
            </div>
            <div className="trait">
              <p className="trait-text">introvert</p>
            </div>
          </div>
        </div>
        <div className="instagram">
          <FontAwesomeIcon icon={faInstagram} /> <span>@kirana..x</span>
        </div>  
      </section>
    </main>

  </>)
}