import { useEffect } from "react";

export default function QuizSection4({ handle, formData }) {
  // Fungsi interceptor untuk logika checkbox array dan limitasi
  const handleCheckbox = (e, totalOptions) => {
    const { name, value, checked } = e.target;
    const currentValues = Array.isArray(formData[name]) ? formData[name] : [];
    
    // Jika opsi > 4 maksimal 3, jika tidak (seperti 4 ini) maksimal 2
    const maxLimit = totalOptions > 4 ? 3 : 2;

    if (checked) {
      if (currentValues.length < maxLimit) {
        handle({
          target: {
            name,
            value: [...currentValues, value],
          },
        });
      }
    } else {
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
        <p className="question">What's your love language?</p>

        <div className="label-container">
          <label className="radio-option calc">
            Words of affirmation
            <input
              type="checkbox"
              name="loveLanguage"
              value="Words of affirmation"
              checked={formData.loveLanguage?.includes("Words of affirmation") || false}
              onChange={(e) => handleCheckbox(e, 4)}
            />
          </label>

          <label className="radio-option calc">
            Giving a gift
            <input
              type="checkbox"
              name="loveLanguage"
              value="Giving a gift"
              checked={formData.loveLanguage?.includes("Giving a gift") || false}
              onChange={(e) => handleCheckbox(e, 4)}
            />
          </label>

          <label className="radio-option calc">
            Quality Time
            <input
              type="checkbox"
              name="loveLanguage"
              value="Quality Time"
              checked={formData.loveLanguage?.includes("Quality Time") || false}
              onChange={(e) => handleCheckbox(e, 4)}
            />
          </label>

          <label className="radio-option calc">
            Physical touch
            <input
              type="checkbox"
              name="loveLanguage"
              value="Physical touch"
              checked={formData.loveLanguage?.includes("Physical touch") || false}
              onChange={(e) => handleCheckbox(e, 4)}
            />
          </label>
        </div>
      </section>

      <section className="section-container">
        <p className="question">What's your hobbies?</p>

        <div className="label-container">
          <label className="radio-option calc">
            Traveling
            <input
              type="checkbox"
              name="hobbies"
              value="Traveling"
              checked={formData.hobbies?.includes("Traveling") || false}
              onChange={(e) => handleCheckbox(e, 4)}
            />
          </label>

          <label className="radio-option calc">
            Olahraga
            <input
              type="checkbox"
              name="hobbies"
              value="Olahraga"
              checked={formData.hobbies?.includes("Olahraga") || false}
              onChange={(e) => handleCheckbox(e, 4)}
            />
          </label>

          <label className="radio-option calc">
            Memasak
            <input
              type="checkbox"
              name="hobbies"
              value="Memasak"
              checked={formData.hobbies?.includes("Memasak") || false}
              onChange={(e) => handleCheckbox(e, 4)}
            />
          </label>

          <label className="radio-option calc">
            Baca buku
            <input
              type="checkbox"
              name="hobbies"
              value="Baca buku"
              checked={formData.hobbies?.includes("Baca buku") || false}
              onChange={(e) => handleCheckbox(e, 4)}
            />
          </label>
          <label className="radio-option calc">
            Musik
            <input
              type="checkbox"
              name="hobbies"
              value="Musik"
              checked={formData.hobbies?.includes("Musik") || false}
              onChange={(e) => handleCheckbox(e, 4)}
            />
          </label>
          <label className="radio-option calc">
            Watching Movie
            <input
              type="checkbox"
              name="hobbies"
              value="Watching Movie"
              checked={formData.hobbies?.includes("Watching Movie") || false}
              onChange={(e) => handleCheckbox(e, 4)}
            />
          </label>
          <label className="radio-option calc">
            Beauty and fashion
            <input
              type="checkbox"
              name="hobbies"
              value="Beauty and fashion"
              checked={formData.hobbies?.includes("Beauty and fashion") || false}
              onChange={(e) => handleCheckbox(e, 4)}
            />
          </label>
        </div>
      </section>
    </>
  );
}