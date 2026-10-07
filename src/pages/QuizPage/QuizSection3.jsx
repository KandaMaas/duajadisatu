import { useEffect } from "react";

export default function QuizSection3({ handle, formData }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  // Fungsi untuk menangani batasan klik dan mengubah data menjadi Array
  const handleCheckbox = (e, totalOptions) => {
    const { name, value, checked } = e.target;
    // Pastikan nilai default adalah array jika belum ada
    const currentValues = Array.isArray(formData[name]) ? formData[name] : [];
    
    // Logika limitasi
    const maxLimit = totalOptions > 4 ? 3 : 2;

    if (checked) {
      if (currentValues.length < maxLimit) {
        // Kirim event buatan ke fungsi handle parent
        handle({
          target: {
            name,
            value: [...currentValues, value],
          },
        });
      }
    } else {
      // Hapus data dari array jika di-uncheck
      handle({
        target: {
          name,
          value: currentValues.filter((item) => item !== value),
        },
      });
    }
  };

  return (
    <>
      <section className="section-container next-pages">
        <p className="question">Your food preference</p>

        <div className="label-container">
          <label className="radio-option calc">
            Asian food
            <input
              type="checkbox"
              name="foods"
              value="Asian food"
              onChange={(e) => handleCheckbox(e, 5)}
              checked={formData.foods?.includes("Asian food") || false}
            />
          </label>

          <label className="radio-option calc">
            Western
            <input
              type="checkbox"
              name="foods"
              value="Western"
              onChange={(e) => handleCheckbox(e, 5)}
              checked={formData.foods?.includes("Western") || false}
            />
          </label>

          <label className="radio-option calc">
            Indonesian food
            <input
              type="checkbox"
              name="foods"
              value="Indonesian food"
              onChange={(e) => handleCheckbox(e, 5)}
              checked={formData.foods?.includes("Indonesian food") || false}
            />
          </label>

          <label className="radio-option calc">
            Comfort food
            <input
              type="checkbox"
              name="foods"
              value="Comfort food"
              onChange={(e) => handleCheckbox(e, 5)}
              checked={formData.foods?.includes("Comfort food") || false}
            />
          </label>

          <label className="radio-option calc">
            Healthy set
            <input
              type="checkbox"
              name="foods"
              value="Healthy set"
              onChange={(e) => handleCheckbox(e, 5)}
              checked={formData.foods?.includes("Healthy set") || false}
            />
          </label>
        </div>
      </section>

      <section className="section-container">
        <p className="question">Your ideal weekend looks like?</p>

        <div className="label-container">
          <label className="radio-option">
            Chill at home
            <input
              type="checkbox"
              name="weekend"
              value="Chill at home"
              checked={formData.weekend?.includes("Chill at home") || false}
              onChange={(e) => handleCheckbox(e, 5)}
            />
          </label>

          <label className="radio-option calc">
            Hangout with friends
            <input
              type="checkbox"
              name="weekend"
              value="Hangout with friends"
              checked={formData.weekend?.includes("Hangout with friends") || false}
              onChange={(e) => handleCheckbox(e, 5)}
            />
          </label>

          <label className="radio-option calc">
            Cafe hopping
            <input
              type="checkbox"
              name="weekend"
              value="Cafe Hopping"
              checked={formData.weekend?.includes("Cafe Hopping") || false}
              onChange={(e) => handleCheckbox(e, 5)}
            />
          </label>

          <label className="radio-option calc">
            Food hunting
            <input
              type="checkbox"
              name="weekend"
              value="Food Hunting"
              checked={formData.weekend?.includes("Food Hunting") || false}
              onChange={(e) => handleCheckbox(e, 5)}
            />
          </label>

          <label className="radio-option calc">
            Workout
            <input
              type="checkbox"
              name="weekend"
              value="Workout"
              checked={formData.weekend?.includes("Workout") || false}
              onChange={(e) => handleCheckbox(e, 5)}
            />
          </label>
        </div>
      </section>
    </>
  );
}