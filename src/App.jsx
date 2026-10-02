import { useEffect, useState } from 'react'
import './App.css'
import { initializeApp } from "firebase/app";
import LoginPage from './pages/LoginPage'
import UserData from './pages/UserData'
import CountDown from './pages/CountDown'
import PreferenceUser from './pages/PreferenceUser'
import LandingPage from './pages/LandingPage'
import Questionnaire from './pages/Questionnaire'
import ReviewData from './pages/ReviewData'
import MatchEngine from "../src/assets/formula/secondformula";
// import OutputMatch from './pages/OutputMatch';
import { dummyUsers } from './assets/formula/dummy';
import  { 
  collection ,
  doc,
  getFirestore,
  setDoc,
  addDoc   
} from "firebase/firestore"
//import firebase 
import { 
  getAuth ,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged
} from "firebase/auth" 
import OutputMatch from './pages/OutputMatch';
function App() {  
const firebaseConfig = {
  apiKey: "AIzaSyCtRla_F4L-Xnx6HDd0rNLjdTVlqWbdMPo",
  authDomain: "duajadisatu-65767.firebaseapp.com",
  projectId: "duajadisatu-65767",
  storageBucket: "duajadisatu-65767.firebasestorage.app",
  messagingSenderId: "460638294015", 
  appId: "1:460638294015:web:0c2a4e6f0212514e1fe1ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const googleProvider = new GoogleAuthProvider()
//States
  const [isStart,SetisStart] = useState(false)
  const [isUserSendData,SetisUserSendData] = useState(false)
  const [userData, SetUserData] = useState({})
  const [hasUserData,SethasUserData] = useState(false)
  const [hasPreference,SethasPreference] = useState(false)
  const [userState,SetuserState] = useState(null)
  const [hasQuestionnare,SetHasQuestionnare]=useState(false)
  const [questionnaire, SetQuestionnaire] = useState({})
  function switchStart (){
    SetisStart(true)
  }
  
  async function loginBygoogle(){
        try {
        const result = await signInWithPopup(auth, googleProvider)
        console.log(result.user)

    } catch (error) {
        console.log("CODE:", error.code)
        console.log("MESSAGE:", error.message)
    }
  }
  async function addUserToDB(userDB){
    try {
      const docRef = await addDoc(collection(db, "users"), {
        nama: userDB.nama,
        umur: userDB.umur,
        gender: userDB.gender,
        tinggi: userDB.tinggi,
        ig: userDB.instagram,
        preference: userDB.preference,
        uid: userState.uid,
        questionnaire: userDB.questionnaire
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
    console.error("Error adding document: ",e );
    }
    }
  console.log(userData)
  // main 
useEffect(() => {

  const unsubscribe = onAuthStateChanged(auth, (user) => {
    SetuserState(user)
  })

  return () => unsubscribe()

}, [])
console.log(MatchEngine)
  return (
    <>
      
      {!isStart &&
      <LandingPage click={switchStart}>Start</LandingPage>
      } 
      {isStart && !userState && isStart &&
      <LoginPage
       loginGoogle= {loginBygoogle}></LoginPage> 
      }
      {!hasUserData && isStart && userState &&
        <UserData setData={SetUserData} hasDone={SethasUserData}></UserData> 
      }
      {hasUserData && !hasQuestionnare &&
        <Questionnaire 
          setData={SetUserData}
          dataUser={userData}
          hasDone={SetHasQuestionnare}>
        </Questionnaire> 
      }
        {/* PREFERENCE PASANGAN */}
      {hasQuestionnare && !hasPreference &&hasUserData &&
        <PreferenceUser 
          setData={SetUserData}
          dataUser={userData}
          hasPreference={SethasPreference}
          addToDB = {addUserToDB}>
        </PreferenceUser>
      }
      {hasPreference && hasPreference &&
        <ReviewData srcData = {userData} setData={SetUserData} submitting={addUserToDB}></ReviewData>
      }
      {hasPreference && 
      <OutputMatch
        data={dummyUsers}
        engine={MatchEngine}
      ></OutputMatch>
        // <CountDown db={db}></CountDown>
      }
    </>
        )
      
      }
export default App
