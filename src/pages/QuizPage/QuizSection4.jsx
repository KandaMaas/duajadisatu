import { useEffect } from "react";

export default function QuizSection4({handle,formData}){
    return(<>
    
        <section className="section-container next-pages  " >

            <p className="question">
            What's your love language?
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
                    />
                </label>

                <label className="radio-option calc">
                    Giving a gift

                    <input
                    type="radio"
                    name="loveLanguage"
                    value="Giving a gift"
                    checked={formData.loveLanguage === "Giving a gifts"}
                    onChange={handle}
                    />
                </label>

                <label className="radio-option calc">
                    Quality Time

                    <input
                    type="radio"
                    name="loveLanguage"
                    value="Quality Time"
                    checked={formData.loveLanguage === "Quality Time"}
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

        <section className="section-container">

            <p className="question">
            What's your go-to genre?
            </p>

            <div className="label-container">

                <label className="radio-option calc">
                    Drama & Romance

                    <input
                    type="radio"
                    name="entertainment"
                    value="Drama & Romance"
                    checked={formData.entertainment === "Drama & Romance"}
                    onChange={handle}
                    />
                </label>

                <label className="radio-option calc">
                    Comedy

                    <input
                    type="radio"
                    name="entertainment"
                    value="Comedy"
                    checked={formData.entertainment === "Comedy"}
                    onChange={handle}
                    />
                </label>

                <label className="radio-option calc">
                    Horror & Thriller

                    <input
                    type="radio"
                    name="entertainment"
                    value="Horror & Thriller"
                    checked={formData.entertainment === "Horror & Thriller"}
                    onChange={handle}
                    />
                </label>

                <label className="radio-option calc">
                    Music & Concerts

                    <input
                    type="radio"
                    name="entertainment"
                    value="Music & Concerts"
                    checked={formData.entertainment === "Music & Concerts"}
                    onChange={handle}
                    />
                </label>

            </div>

        </section> 

    </>)
}