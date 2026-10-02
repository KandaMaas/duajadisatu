export default function PreferenceSection1({ handle, formData }) {

  const umurMinPosition =
    ((formData.minUmur - 18) / (45 - 18)) * 100

  const umurMaxPosition =
    ((formData.maxUmur - 18) / (45 - 18)) * 100

  const tinggiMinPosition =
    ((formData.minTinggi - 140) / (200 - 140)) * 100

  const tinggiMaxPosition =
    ((formData.maxTinggi - 140) / (200 - 140)) * 100


  // =====================================================
  // HANDLE UMUR MIN
  // =====================================================

  function changeMinUmur(event) {

    const value = Number(event.target.value)

    if (value > formData.maxUmur) {
      return
    }

    handle({
      target: {
        name: "minUmur",
        value: value
      }
    })
  }


  // =====================================================
  // HANDLE UMUR MAX
  // =====================================================

  function changeMaxUmur(event) {

    const value = Number(event.target.value)

    if (value < formData.minUmur) {
      return
    }

    handle({
      target: {
        name: "maxUmur",
        value: value
      }
    })
  }


  // =====================================================
  // HANDLE TINGGI MIN
  // =====================================================

  function changeMinTinggi(event) {

    const value = Number(event.target.value)

    if (value > formData.maxTinggi) {
      return
    }

    handle({
      target: {
        name: "minTinggi",
        value: value
      }
    })
  }


  // =====================================================
  // HANDLE TINGGI MAX
  // =====================================================

  function changeMaxTinggi(event) {

    const value = Number(event.target.value)

    if (value < formData.minTinggi) {
      return
    }

    handle({
      target: {
        name: "maxTinggi",
        value: value
      }
    })
  }


  return (
    <div className="bg-black preference-container">

      <header className="header-preference">

        <h1>
          What's You’re Looking For
        </h1>

        <p className="preference-font-sub-header">
          First step to finding your kind of connection
        </p>

      </header>


      {/* =========================
          RANGE UMUR
      ========================= */}

      <div className="range-section">

        <label className="preference-label">
          Range umur Pasangan Ideal Kamu
        </label>

        <div className="range-box">

          <div className="range-track">

            <div
              className="range-active"
              style={{
                left: `${umurMinPosition}%`,
                width: `${umurMaxPosition - umurMinPosition}%`
              }}
            />


            {/* SLIDER MIN UMUR */}

            <input
              type="range"
              name="minUmur"
              min="18"
              max="45"
              value={formData.minUmur}
              onChange={changeMinUmur}
            />


            {/* SLIDER MAX UMUR */}

            <input
              type="range"
              name="maxUmur"
              min="18"
              max="45"
              value={formData.maxUmur}
              onChange={changeMaxUmur}
            />


            {/* ANGKA MIN */}

            <div
              className="range-value min"
              style={{
                left: `${umurMinPosition}%`
              }}
            >
              {formData.minUmur}
            </div>


            {/* ANGKA MAX */}

            <div
              className="range-value max"
              style={{
                left: `${umurMaxPosition}%`
              }}
            >
              {formData.maxUmur}
            </div>

          </div>


          <div className="range-labels">

            <span className="value-preference">
              18 thn
            </span>

            <span className="value-preference">
              45 thn
            </span>

          </div>

        </div>

      </div>


      {/* =========================
          RANGE TINGGI
      ========================= */}

      <div className="range-section">

        <label className="preference-label">
          Range Tinggi Badan ideal kamu
        </label>

        <div className="range-box">

          <div className="range-track">

            <div
              className="range-active"
              style={{
                left: `${tinggiMinPosition}%`,
                width: `${tinggiMaxPosition - tinggiMinPosition}%`
              }}
            />


            {/* SLIDER MIN TINGGI */}

            <input
              type="range"
              name="minTinggi"
              min="140"
              max="200"
              value={formData.minTinggi}
              onChange={changeMinTinggi}
            />


            {/* SLIDER MAX TINGGI */}

            <input
              type="range"
              name="maxTinggi"
              min="140"
              max="200"
              value={formData.maxTinggi}
              onChange={changeMaxTinggi}
            />


            {/* ANGKA MIN */}

            <div
              className="range-value min"
              style={{
                left: `${tinggiMinPosition}%`
              }}
            >
              {formData.minTinggi}
            </div>


            {/* ANGKA MAX */}

            <div
              className="range-value max"
              style={{
                left: `${tinggiMaxPosition}%`
              }}
            >
              {formData.maxTinggi}
            </div>

          </div>


          <div className="range-labels">

            <span className="value-preference">
              140cm
            </span>

            <span className="value-preference">
              200 cm
            </span>

          </div>

        </div>

      </div>

    </div>
  )
}