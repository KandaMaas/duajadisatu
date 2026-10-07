export default function PreferenceSection2({ handle, formData }) {
  // Fungsi untuk menangani batasan klik dan mengubah data menjadi Array
  const handleCheckbox = (e, totalOptions) => {
    const { name, value, checked } = e.target;
    // Pastikan nilai default adalah array jika belum ada
    const currentValues = Array.isArray(formData[name]) ? formData[name] : [];

    // Logika limitasi: jika opsi > 4 maksimal 3, jika 4 ke bawah maksimal 2
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
      <section className="section-container">
        <p className="question">What hobby catches your attention?</p>
        <div className="label-container">
          <label className="radio-option calc">
            Travelling
            <input
              type="checkbox"
              name="hobby"
              value="Travelling"
              checked={formData.hobby?.includes("Travelling") || false}
              onChange={(e) => handleCheckbox(e, 7)}
            />
          </label>

          <label className="radio-option calc">
            Olahraga
            <input
              type="checkbox"
              name="hobby"
              value="Olahraga"
              checked={formData.hobby?.includes("Olahraga") || false}
              onChange={(e) => handleCheckbox(e, 7)}
            />
          </label>

          <label className="radio-option calc">
            Memasak
            <input
              type="checkbox"
              name="hobby"
              value="Memasak"
              checked={formData.hobby?.includes("Memasak") || false}
              onChange={(e) => handleCheckbox(e, 7)}
            />
          </label>

          <label className="radio-option calc">
            Baca buku
            <input
              type="checkbox"
              name="hobby"
              value="Baca buku"
              checked={formData.hobby?.includes("Baca buku") || false}
              onChange={(e) => handleCheckbox(e, 7)}
            />
          </label>

          <label className="radio-option calc">
            Main musik
            <input
              type="checkbox"
              name="hobby"
              value="Main musik"
              checked={formData.hobby?.includes("Main musik") || false}
              onChange={(e) => handleCheckbox(e, 7)}
            />
          </label>

          <label className="radio-option calc">
            Nonton Film
            <input
              type="checkbox"
              name="hobby"
              value="Nonton Film"
              checked={formData.hobby?.includes("Nonton Film") || false}
              onChange={(e) => handleCheckbox(e, 7)}
            />
          </label>

          <label className="radio-option calc">
            Beauty & fashion
            <input
              type="checkbox"
              name="hobby"
              value="Beauty & fashion"
              checked={formData.hobby?.includes("Beauty & fashion") || false}
              onChange={(e) => handleCheckbox(e, 7)}
            />
          </label>
        </div>
      </section>

      <section className="section-container">
        <p className="question">Love language ideal pasangan kamu</p>

        <div className="label-container">
          <label className="radio-option calc">
            Words of affirmation
            <input
              type="checkbox"
              name="loveLanguage"
              value="Words of affirmation"
              checked={formData.loveLanguage?.includes("Words of affirmation") || false}
              onChange={(e) => handleCheckbox(e, 5)}
            />
          </label>

          <label className="radio-option calc">
            Giving gifts
            <input
              type="checkbox"
              name="loveLanguage"
              value="Giving gifts"
              checked={formData.loveLanguage?.includes("Giving gifts") || false}
              onChange={(e) => handleCheckbox(e, 5)}
            />
          </label>

          <label className="radio-option calc">
            Quality time
            <input
              type="checkbox"
              name="loveLanguage"
              value="Quality time"
              checked={formData.loveLanguage?.includes("Quality time") || false}
              onChange={(e) => handleCheckbox(e, 5)}
            />
          </label>

          <label className="radio-option calc">
            Acts of service
            <input
              type="checkbox"
              name="loveLanguage"
              value="Acts of service"
              checked={formData.loveLanguage?.includes("Acts of service") || false}
              onChange={(e) => handleCheckbox(e, 5)}
            />
          </label>

          <label className="radio-option calc">
            Physical touch
            <input
              type="checkbox"
              name="loveLanguage"
              value="Physical touch"
              checked={formData.loveLanguage?.includes("Physical touch") || false}
              onChange={(e) => handleCheckbox(e, 5)}
            />
          </label>
        </div>
      </section>
    </>
  );
}