export default function PreferenceSection2({ handle, formData }) {

  return (
    <>

      <section className="section-container">

        <p className="question">
          What hobby catches your attention?
        </p>
        <div className="label-container">

        
            <label className="radio-option calc">
            Travelling

            <input
                type="radio"
                name="hobby"
                value="Travelling"
                checked={formData.hobby === "Travelling"}
                onChange={handle}
                required
            />
            </label>


            <label className="radio-option calc">
            Olahraga

            <input
                type="radio"
                name="hobby"
                value="Olahraga"
                checked={formData.hobby === "Olahraga"}
                onChange={handle}
            />
            </label>


            <label className="radio-option calc">
            Memasak

            <input
                type="radio"
                name="hobby"
                value="Memasak"
                checked={formData.hobby === "Memasak"}
                onChange={handle}
            />
            </label>


            <label className="radio-option calc">
            Baca buku

            <input
                type="radio"
                name="hobby"
                value="Baca buku"
                checked={formData.hobby === "Baca buku"}
                onChange={handle}
            />
            </label>


            <label className="radio-option calc">
            Main musik

            <input
                type="radio"
                name="hobby"
                value="Main musik"
                checked={formData.hobby === "Main musik"}
                onChange={handle}
            />
            </label>


            <label className="radio-option calc">
            Culinary

            <input
                type="radio"
                name="hobby"
                value="Culinary"
                checked={formData.hobby === "Culinary"}
                onChange={handle}
            />
            </label>


            <label className="radio-option calc">
            Beauty & fashion

            <input
                type="radio"
                name="hobby"
                value="Beauty & fashion"
                checked={formData.hobby === "Beauty & fashion"}
                onChange={handle}
            />
            </label>
        </div>
      </section>


      <section className="section-container">

        <p className="question">
          Love language ideal pasangan kamu
        </p>

        <div className="label-container">
            <label className="radio-option calc">
            Words of affirmation

            <input
                type="radio"
                name="loveLanguage"
                value="Words of affirmation"
                checked={formData.loveLanguage === "Words of affirmation"}
                onChange={handle}
                required
            />
            </label>


            <label className="radio-option calc">
            Giving gifts

            <input
                type="radio"
                name="loveLanguage"
                value="Giving gifts"
                checked={formData.loveLanguage === "Giving gifts"}
                onChange={handle}
            />
            </label>


            <label className="radio-option calc">
            Quality time

            <input
                type="radio"
                name="loveLanguage"
                value="Quality time"
                checked={formData.loveLanguage === "Quality time"}
                onChange={handle}
            />
            </label>


            <label className="radio-option calc">
            Acts of service

            <input
                type="radio"
                name="loveLanguage"
                value="Acts of service"
                checked={formData.loveLanguage === "Acts of service"}
                onChange={handle}
            />
            </label>


            <label className="radio-option calc">
            Physical touch

            <input
                type="radio"
                name="loveLanguage"
                value="Physical touch"
                checked={formData.loveLanguage === "Physical touch"}
                onChange={handle}
            />
            </label>
        </div>
      </section>

    </>
  )
}