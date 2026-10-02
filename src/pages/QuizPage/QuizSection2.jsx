import { useEffect } from "react";
export default function QuizSection2({handle,formData}){
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "instant",
        });
      }, []);
    return (<>
        <section className="section-container next-pages">

        <p className="question">
          Kalau lagi chat sama orang baru, kamu...
        </p>

        <div className="label-container">

          <label className="radio-option">
            Fast responder

            <input
              type="radio"
              name="communication"
              value="Fast responder"
              onChange={handle}
              checked={formData.communication === "Fast responder"}
            />
          </label>

          <label className="radio-option">
            Slow responder

            <input 
              type="radio"
              name="communication"
              value="Slow responder"
              onChange={handle}
              checked={formData.communication === "Slow responder"}
            />
          </label>

        </div>

      </section>


      {/* FREE TIME */}

      <section className="section-container">

        <p className="question">
          Your go-to activity kalau lagi free?
        </p>

        <div className="label-container">

          <label className="radio-option calc">
            Me time

            <input
              type="radio"
              name="freeTime"
              value="Me time"
              onChange={handle}
              checked={formData.freeTime === "Me time"}
            />
          </label>

          <label className="radio-option calc">
            Hangout

            <input
              type="radio"
              name="freeTime"
              value="Hangout"
              onChange={handle}
              checked={formData.freeTime === "Hangout"}
            />
          </label>

          <label className="radio-option calc">
            Chill at Home
            <input
              type="radio"
              name="freeTime"
              value="Chill at Home"
              onChange={handle}
              checked={formData.freeTime === "Chill at Home"}
            />
          </label>

        </div>

      </section>


    </>)
}