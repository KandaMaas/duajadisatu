import { useEffect } from "react";
export default function QuizSection1({handle, formData}){
    return(<>
    <div className="header">
            <h1>Tell us a little about you!</h1>
    
            <p>
              Nggak ada jawaban salah, jujur aja santai.
            </p>
          </div>
    
    
          <section className="section-container">
    
            <p className="question">
              So, what's your social vibe?
            </p>
    
            <div className="label-container">
    
              <label className="radio-option">
                Introvert
    
                <input
                  type="radio"
                  name="socialEnergy"
                  value="Introvert"
                  onChange={handle}
                  checked={formData.socialEnergy === "Introvert"}
                />
              </label>
    
              <label className="radio-option">
                Ambivert
    
                <input
                  type="radio"
                  name="socialEnergy"
                  value="Ambivert"
                  onChange={handle}
                  checked={formData.socialEnergy === "Ambivert"}
                />
              </label>
    
              <label className="radio-option">
                Extrovert
    
                <input
                  type="radio"
                  name="socialEnergy"
                  value="Extrovert"
                  onChange={handle}
                  checked={formData.socialEnergy === "Extrovert"}
                />
              </label>
    
            </div>
    
          </section>
    
    
          {/* PRODUCTIVE */}
    
          <section className="section-container">
    
            <p className="question">
              Your Daily Style?
            </p>
    
            <div className="label-container">
    
              <label className="radio-option">
                Morning Person
    
                <input
                  type="radio"
                  name="productive"
                  value="Morning Person"
                  onChange={handle}
                  checked={formData.productive === "Morning"}
                />
              </label>
    
              <label className="radio-option">
                Night Owl
    
                <input
                  type="radio"
                  name="productive"
                  value="Night Owl"
                  onChange={handle}
                  checked={formData.productive === "Night Owl"}
                />
              </label>
    
            </div>
    
          </section>
          </>
    
    
    )
}
