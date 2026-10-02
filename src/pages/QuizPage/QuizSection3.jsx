import { useEffect } from "react";
export default function QuizSection3({handle,formData}){
     useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "instant",
        });
      }, []);
    return(<>
    <section className="section-container next-pages">

        <p className="question">
          Your food preference
        </p>

        <div className="label-container">

          <label className="radio-option calc">
            Asian food

            <input
              type="radio"
              name="foods"
              value="Asian food"
              onChange={handle}
              checked={formData.foods === "Asian food"}
            />
          </label>

          <label className="radio-option calc">
            Western

            <input
              type="radio"
              name="foods"
              value="Western"
              onChange={handle}
              checked={formData.foods === "Western"}
            />
          </label>

          <label className="radio-option calc">
            Indonesian food

            <input
              type="radio"
              name="foods"
              value="Indonesian food"
              onChange={handle}
              checked={formData.foods === "Indonesian food"}
            />
          </label>

          <label className="radio-option calc">
            Comfort food

            <input
              type="radio"
              name="foods"
              value="Comfort food"
              onChange={handle}
              checked={formData.foods === "Comfort food"}
            />
          </label>

          <label className="radio-option calc">
            Healthy set

            <input
              type="radio"
              name="foods"
              value="Healthy set"
              onChange={handle}
              checked={formData.foods === "Healthy set"}
            />
          </label>

        </div>

      </section> 

 
      <section className="section-container">

        <p className="question">
          Your ideal weekend looks like?
        </p>

        <div className="label-container">

          <label className="radio-option">
            Chill at home

            <input
              type="radio"
              name="weekend"
              value="Chill at home"
              checked={formData.weekend === "Chill at home"}
              onChange={handle}
            />
          </label>

          <label className="radio-option calc">
            Hangout with friends

            <input
              type="radio"
              name="weekend"
              value="Hangout with friends"
              checked={formData.weekend === "Hangout with friends"}
              onChange={handle}
            />
          </label>

          <label className="radio-option calc">
            Cafe hopping

            <input
              type="radio"
              name="weekend"
              value="Cafe Hopping"
              checked={formData.weekend === "Cafe Hopping"}
              onChange={handle}
            />
          </label>

          <label className="radio-option calc">
            Food hunting

            <input
              type="radio"
              name="weekend"
              value="Food Hunting"
              checked={formData.weekend === "Food Hunting"}
              onChange={handle}
            />
          </label>

          <label className="radio-option calc">
            Workout

            <input
              type="radio"
              name="weekend"
              value="Workout"
              checked={formData.weekend === "Workout"}
              onChange={handle}
            />
          </label>

        </div>

      </section> 

    </>)
}