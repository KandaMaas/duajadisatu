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
import OutputMatch from './pages/OutputMatch'

import MatchEngine from "../src/assets/formula/secondformula";
import dummyUsers from './assets/formula/dummy.js';

import {
  doc,
  getDoc,
  getFirestore,
  setDoc
} from "firebase/firestore"

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "firebase/auth"

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

  // States
  const [isStart, SetisStart] = useState(false)

  const [userData, SetUserData] = useState({})

  const [hasUserData, SethasUserData] = useState(false)

  const [hasPreference, SethasPreference] = useState(false)

  const [userState, SetuserState] = useState(null)

  const [hasQuestionnare, SetHasQuestionnare] = useState(false)

  const [isCheckingUser, setIsCheckingUser] = useState(true)

  const [currentPage, setCurrentPage] = useState(null)


  function switchStart() {
    SetisStart(true)
  }


  async function loginBygoogle() {

    try {

      const result = await signInWithPopup(auth, googleProvider)

      console.log(result.user)

    } catch (error) {

      console.log("CODE:", error.code)
      console.log("MESSAGE:", error.message)

    }

  }


  async function handleSignout() {

    try {

      await signOut(auth)

      SetuserState(null)
      SetUserData({})
      SethasUserData(false)
      SetHasQuestionnare(false)
      SethasPreference(false)
      setCurrentPage(null)

    } catch (error) {

      console.error(error)

    }

  }


  async function addUserToDB(userDB) {

    try {

      await setDoc(doc(db, "users", userState.uid), {

        nama: userDB.nama,
        umur: userDB.umur,
        gender: userDB.gender,
        tinggi: userDB.tinggi,
        ig: userDB.instagram,
        preference: userDB.preference,
        uid: userState.uid,
        questionnaire: userDB.questionnaire

      });

      console.log("User berhasil disimpan")

      // Setelah data berhasil disimpan,
      // langsung masuk ke Output
      setCurrentPage("output")

    } catch (error) {

      console.error("Error menyimpan user:", error)

    }

  }


  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, async (user) => {

      SetuserState(user)

      if (!user) {

        SethasUserData(false)
        setIsCheckingUser(false)
        setCurrentPage(null)

        return

      }

      setIsCheckingUser(true)

      const userRef = doc(db, "users", user.uid)

      const userSnapshot = await getDoc(userRef)


      if (userSnapshot.exists()) {

        // User sudah memiliki data di Firebase

        const firebaseUserData = userSnapshot.data()

        SetUserData(firebaseUserData)

        SethasUserData(true)
        SetHasQuestionnare(true)
        SethasPreference(true)

        // Langsung ke Output
        setCurrentPage("output")

      } else {

        // User belum memiliki data di Firebase

        SetUserData({})

        SethasUserData(false)
        SetHasQuestionnare(false)
        SethasPreference(false)

        // Mulai dari UserData
        setCurrentPage("userData")

      }

      setIsCheckingUser(false)

    })

    return () => unsubscribe()

  }, [])


  return (
    <>

      {/* LANDING PAGE */}

      {!isStart &&
        <LandingPage click={switchStart}>
          Start
        </LandingPage>
      }


      {/* LOGIN PAGE */}

      {isStart &&
        !userState &&
        !isCheckingUser &&
        <LoginPage
          loginGoogle={loginBygoogle}
        />
      }


      {/* CHECKING FIREBASE */}

      {isStart &&
        userState &&
        isCheckingUser &&
        <div>
          Checking user...
        </div>
      }


      {/* USER DATA */}

      {isStart &&
        userState &&
        !isCheckingUser &&
        currentPage === "userData" &&
        <UserData
          setData={SetUserData}
          hasDone={(value) => {

            SethasUserData(value)

            if (value) {
              setCurrentPage("questionnaire")
            }

          }}
        />
      }


      {/* QUESTIONNAIRE */}

      {isStart &&
        userState &&
        !isCheckingUser &&
        currentPage === "questionnaire" &&
        <Questionnaire
          setData={SetUserData}
          dataUser={userData}
          hasDone={(value) => {

            SetHasQuestionnare(value)

            if (value) {
              setCurrentPage("preference")
            }

          }}
        />
      }


      {/* PREFERENCE PASANGAN */}

      {isStart &&
        userState &&
        !isCheckingUser &&
        currentPage === "preference" &&
        <PreferenceUser
          setData={SetUserData}
          dataUser={userData}
          hasPreference={(value) => {

            SethasPreference(value)

            if (value) {
              setCurrentPage("review")
            }

          }}
        />
      }


      {/* REVIEW DATA */}

      {isStart &&
        userState &&
        !isCheckingUser &&
        currentPage === "review" &&
        <ReviewData
          srcData={userData}
          setData={SetUserData}
          submitting={addUserToDB}
        />
      }


      {/* OUTPUT MATCH */}

      {isStart &&
        userState &&
        !isCheckingUser &&
        currentPage === "output" &&
        <OutputMatch
          data={dummyUsers}
          engine={MatchEngine}
          currentUserId={userState.uid}
          handleLogout={handleSignout}
        />
      }


      {/* COUNTDOWN
      {isStart &&
        userState &&
        !isCheckingUser &&
        currentPage === "countdown" &&
        <CountDown
          db={db}
        />
      }
      */}


    </>
  )

}

export default App