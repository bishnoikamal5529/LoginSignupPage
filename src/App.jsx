
import { useState } from "react"
import  Login  from "./Components/Login"
import Signup from "./Components/Signup"
import "./Styles/App.css"
import Container from "react-bootstrap/Container"

function App() {
  const [isLoginVisible, setLoginVisible] = useState(true);

  return (
    <Container className="main-container p-4 bg-light-subtle"> 
      <section className={isLoginVisible?"login-page":"login-page login-hide"}>
        <Login />
        <p className="mt-5 d-block">
          Don't have an account.
        <a href="#" className="text-black" onClick={()=> {setLoginVisible(false)}}>Signup here?</a>
        </p>
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
