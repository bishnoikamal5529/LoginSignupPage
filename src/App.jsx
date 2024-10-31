
import { useState } from "react"
import  Login  from "./Components/Login"
import Signup from "./Components/Signup"
import "./Styles/App.css"
import "./Styles/logosvg.css"
import Container from "react-bootstrap/Container"
import LogoSvg from "./Components/LogoSvg"

function App() {
  const [isLoginVisible, setLoginVisible] = useState(true);

  return (
    <Container className="main-container ps-lg-5 ps-2 mt-4 pt-4 pb-4 pe-5 bg-light-subtle flex-column flex-md-row justify-content-between align-items-center"> 
      <section className={isLoginVisible?"login-page":"login-page login-hide"}>
        <Login />
        <p className="mt-5 d-block">
          Don't have an account.
        <a href="#" className="text-black" onClick={()=> {setLoginVisible(false)}}>Signup here?</a>
        </p>
      </section>

      <section className={isLoginVisible?"middleIcon middleIcon-login":"middleIcon middleIcon-signup"}>
          <LogoSvg />
      </section>

      <section className={isLoginVisible?"signup-page signup-hide":"signup-page"} >
        <Signup />
        <p  className="mt-5 d-block">
          Already have an account.
        <a href="#" className="text-black" onClick={()=> {setLoginVisible(true)}}> Login</a>
        </p>
      </section>
    </Container>

  )
}

export default App
