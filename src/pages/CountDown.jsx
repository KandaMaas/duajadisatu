import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";

function CountDown({ db }) {

  const [count, setCount] = useState(null);

  useEffect(() => {

    async function getAnnouncementTime() {

      console.log("db:", db);

      const announcementRef = doc(
        db,
        "setting",
        "announcetime"
      );

      console.log("Mengambil data...");

      const announcementSnapshot = await getDoc(announcementRef);

      console.log(
        "Document ada:",
        announcementSnapshot.exists()
      );

      if (!announcementSnapshot.exists()) {
        console.log("Document tidak ditemukan"); 
        return;
      }

      const data = announcementSnapshot.data();

      console.log("Data Firebase:", data);

      const targetTime = data["waktu deadline"].toMillis(); 

      console.log("Target time:", targetTime);

      const interval = setInterval(() => {

        const now = Date.now();

        const difference = targetTime - now;

        console.log("Countdown:", difference);

        setCount(difference);

        if (difference <= 0) {
          clearInterval(interval);
          setCount(0);
        }

      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }

    getAnnouncementTime();

  }, [db]);

  if (count === null) {
    return <h1>Loading...</h1>;
  }

  const totalSeconds = Math.max(
    0,
    Math.floor(count / 1000)
  );

  const minutes = Math.floor(totalSeconds / 60);

  const seconds = totalSeconds % 60;

  return (
    <div>
      <h1>
        {minutes}:{seconds.toString().padStart(2, "0")}
      </h1>
    </div>
  );
}

export default CountDown;