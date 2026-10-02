import "../assets/style/login.css"
export default function LandingPage({loginGoogle}){
    return (
    <>
            <div className="login-container">
                <div className="header-login">
                    <h1>Almost There!</h1>
                    <p>Cukup login tanpa buat email dan password baru</p>
                </div>
                <div onClick={loginGoogle} className="button-login">
                    <img className="g-logo" src="src/assets/google_icon.png"/>
                    <p>Continue with Google </p> 
                </div>
                <div className="footer">
                    <p>No worries! Data kamu hanya digunakan untuk keperluan event ini</p>
                </div>
            </div>
        </>)
}