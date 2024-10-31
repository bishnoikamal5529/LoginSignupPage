import { useState } from "react"
import "../Styles/signup-page.css"

function Signup(){
    
    const [signupInput, setSignupinput] = useState({
        username: "",
        email:"",
        password: ""
    });

    function handleSubmit(e){
        e.preventDefault();
        console.log(signupInput);
    }
    return <div>
        <section className="signup-center">
             <h1>Signup</h1>
             <section className="signup-underline"></section>
        </section>
        

        <form className="form-container d-grid g-4">
            <input 
            className="username-input bg-light-subtle" 
            type="text" name="signup-username" 
            id="signup-username" 
            autoComplete="username"
            placeholder="User Name"
            onChange={(e) => {setSignupinput({
                ...signupInput,
                username: e.target.value
                });
            }} />

            <input 
            className="email-input bg-light-subtle" 
            type="email" name="signup-email" 
            id="signup-email" 
            autoComplete="email"
            placeholder="Email"
            onChange={(e) => {setSignupinput({
                ...signupInput,
                email: e.target.value
                });
            }}

            />

            <input 
            className="signup-password-input bg-light-subtle" 
            type="password" 
            name="userpassword" 
            id="signup-password" 
            autoComplete="create password"
            placeholder="Password"
            onChange={(e) => {setSignupinput({
                ...signupInput,
                password: e.target.value
                });
            }}
            />

            <input 
            className="btn btn-dark mt-5 text-white rounded-5" 
            type="button" value="submit" 
            onClick={(e) => {handleSubmit(e)}}
            />
        </form>
    </div>
}

export default Signup