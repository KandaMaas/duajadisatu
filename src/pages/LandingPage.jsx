import logo from "../assets/images/logo.png"
import "../app.css"
import "../assets/style/landing.css"
export default function LandingPage({click}){
    return (<>
        <div className="landing-container">
            <div className="landing-body-container">
                <div className="header">
                    <img className="logo-hero" src={logo} alt="logo" />
                    <h1 className="header-landing">Make a new connection naturally</h1>
                </div>
                
                <div className="bottom-btn-container" >      
                            <button className="bottom-button" onClick={click}> Get Started</button>
                </div>
            </div>

        </div>
    </>)
}