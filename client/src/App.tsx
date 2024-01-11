import { useEffect } from 'react'
import Header from './components/Header'
import SideBar from './components/SideBar'
import { Outlet } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from './firebase-config'
import CookieConsent from "react-cookie-consent";

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (!user) {
        navigate('/login')
      }
    })

    return () => unsubscribe()
  }, [navigate])
  return (
    <div className="grid grid-cols-5 gap-4 bg-slate-200">
      <Header />
      <SideBar />
      <Outlet />
      <CookieConsent
       location="bottom"
       buttonText="I Understand"
       cookieName="myAwesomeCookieName"
       style={{ background: "#2B373B" }}
       buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
       expires={150}
     >
       This website uses cookies to enhance the user experience. By continuing to use this website, you agree to the use of cookies.{" "}
     </CookieConsent>
    </div>
  )
}

export default App
