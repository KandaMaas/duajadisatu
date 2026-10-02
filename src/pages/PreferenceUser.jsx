import { useState, useEffect } from "react"
import PreferenceSection1 from "./PreferencePage/PreferenceSection1"
import PreferenceSection2 from "./PreferencePage/PreferenceSection2"
import "../assets/style/preference.css"

export default function PreferenceUser({
  dataUser,
  setData,
  hasPreference,
  addToDB
}) {

  const [formData, setFormData] = useState({
    minUmur: 18,
    maxUmur: 30,
    minTinggi: 140,
    maxTinggi: 180,
    hobby: "Travelling",
    loveLanguage: "Words of affirmation"
  })

  const [pagePreference, setPagePreference] = useState(1)


  function handleChange(event) {

    const { name, value } = event.target
    const numberValue = Number(value)

    setFormData((prev) => {

      if (name === "minUmur") {

        if (numberValue >= prev.maxUmur) {
          return prev
        }

        return {
          ...prev,
          minUmur: numberValue
        }

      }


      if (name === "maxUmur") {

        if (numberValue <= prev.minUmur) {
          return prev
        }

        return {
          ...prev,
          maxUmur: numberValue
        }

      }


      if (name === "minTinggi") {

        if (numberValue >= prev.maxTinggi) {
          return prev
        }

        return {
          ...prev,
          minTinggi: numberValue
        }

      }


      if (name === "maxTinggi") {

        if (numberValue <= prev.minTinggi) {
          return prev
        }

        return {
          ...prev,
          maxTinggi: numberValue
        }
        

      }
         if (name === "hobby") {

      return {
        ...prev,
        hobby: value
      }
    }


    if (name === "loveLanguage") {

      return {
        ...prev,
        loveLanguage: value
      }
    }

      return prev
    })
  }


  function nextPage(event) {

    event.preventDefault()

    if (pagePreference < 2) {

      setPagePreference((prev) => prev + 1)

      return
    }
    else {

      handleSubmit()
    }

  }


  function handleSubmit() {

    const updatedFormData = {
      ...formData
    }

    setFormData(updatedFormData)

    const dataFinal = {
      ...dataUser,

      preference: updatedFormData
    }

    setData(dataFinal)

    hasPreference(true)

    addToDB(dataFinal)

  }


  useEffect(() => {

    window.scrollTo({
      top: 0,
      behavior: "instant"
    })

  }, [])


  return (
    <form onSubmit={nextPage}>

      {pagePreference === 1 && (
        <PreferenceSection1
          handle={handleChange}
          formData={formData}
        />
      )}


      {/* NANTI SECTION 2 DI SINI */}

      
      {pagePreference === 2 && 
        <PreferenceSection2
          handle={handleChange}
          formData={formData}
        />
      }
     


      <div className="bottom-btn-container">

        <button
          className="preference-btn"
          type="submit"
        >
          Lanjut
        </button>

      </div>

    </form>
  )
}