import { useState } from "react"
import "../assets/style/user.css"

function UserData({ setData, hasDone }) {

  const [formData, setFormData] = useState({
    gender: "male"
  })


  function handleChange(event) {

    const name = event.target.name
    const value = event.target.value

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))

  }


  function handleSubmit(event) {

    event.preventDefault()

    setData({
      nama: formData.nama,
      umur: Number(formData.umur),
      gender: formData.gender,
      tinggi: Number(formData.tinggi),
      instagram: formData.instagram
    })

    hasDone(true)

  }


  return (
    <div className="container">

      <div className="progress">
        1/2
      </div>


      <div className="header">

        <h1>
          Let your future match get to
          <br />
          know you!
        </h1>

        <p>
          Ini yang bakal dikenal calon match kamu
        </p>

      </div>


      <div className="photo-section">

        <div className="profile-photo"></div>

        <div className="camera-button">
          📷
        </div>

      </div>


      <form onSubmit={handleSubmit}>

        <div className="form-group">

          <label>
            Gender
          </label>

          <div className="gender-container">

            <label className="gender">

              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
                required
              />

              Male

            </label>
            <label className="gender">
              <input
                type="radio"
                id="wanita"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                  onChange={handleChange}
              />
              <span>
                Female
              </span>

            </label>

          </div>

        </div>


        <div className="form-group">

          <label htmlFor="nama">
            Nama
          </label>

          <input
            type="text"
            id="nama"
            name="nama"
            placeholder="Nama kamu"
            onChange={handleChange}
            required
          />

        </div>


        <div className="form-group">

          <label htmlFor="umur">
            Umur
          </label>

          <input
            type="number"
            id="umur"
            name="umur"
            placeholder="Contoh : 25"
            value={formData.umur ?? ""}
            min={18}
            onChange={handleChange}
            required
          />

        </div>


        <div className="form-group">

          <label htmlFor="tinggi">
            Tinggi Badan
          </label>

          <div className="input-with-unit">

            <input
              type="number"
              id="tinggi"
              name="tinggi"
              placeholder="175"
              value={formData.tinggi ?? ""}
              onChange={handleChange}
              required
              min={140}
            />

            <span>
              CM
            </span>

          </div>

        </div>


        <div className="form-group">
          <label htmlFor="instagram">
            Username Instagram
          </label>
          <div className="instagram-input">

            <span>
              @
            </span>

            <input
              type="text"
              id="instagram"
              name="instagram"
              placeholder="username_kamu"
              value={formData.instagram ?? ""}
              onChange={handleChange}
            />

          </div>

        </div>


        <button
          type="submit"
          className="next-button"
        >
          Lanjut
        </button>

      </form>

    </div>
  )
}

export default UserData