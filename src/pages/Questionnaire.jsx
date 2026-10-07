import { useState } from "react"
import "../assets/style/questionnaire.css"
import QuizSection1 from "./QuizPage/QuizSection1"
import QuizSection2 from "./QuizPage/QuizSection2"
import QuizSection3 from "./QuizPage/QuizSection3"
import QuizSection4 from "./QuizPage/QuizSection4"
function Questionnaire({ setData, dataUser, hasDone }) {

  const [formData, setFormData] = useState({
    socialEnergy: "Introvert",
    productive: "Morning",
    communication: "Fast responder",
    freeTime: "Me time",
    foods: ["Asian food"],             
    weekend: ["Chill at home"],        
    loveLanguage: ["Words of affirmation"], 
    hobbies: ["Travelling"] 
  })

  const [pageQuest, setPageQuest] = useState(1)

function nextPage() {

  if (pageQuest < 4) {
    setPageQuest((prev) => prev + 1);
    
    
    return;
  }
  else{
    handleSubmit();
    hasDone(true)

  }
}
  function handleChange(event) {

    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value
    })

  }

  function handleSubmit(event) {
    event?.preventDefault()
    setData({
      ...dataUser,
      questionnaire: formData
    })

  }

  return (
    <form onSubmit={handleSubmit}>
      {pageQuest==1 && <QuizSection1 
        handle={handleChange}
        formData={formData}
      ></QuizSection1>
    }
     
    {
      pageQuest===2 && <QuizSection2 
          handle={handleChange} 
          formData={formData} ></QuizSection2>
    }

    {
        pageQuest===3 && <QuizSection3
          handle={handleChange}
          formData={formData}
        ></QuizSection3>
    }
    {
        pageQuest===4 && <QuizSection4
          handle={handleChange}
          formData={formData}
        ></QuizSection4>
    } 

     
      <div
        
        className="bottom-btn-container"
        
        >
          <button 
            className="bottom-button"
            type="button" 
            onClick={nextPage}>Lanjut </button>
        
      </div>
    </form>
  )
}

export default Questionnaire