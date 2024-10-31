import { useState } from "react"
import "../Styles/styledinput.css"
import "../Styles/login-page.css"

function Login(){
    
    const [loginInput, setLogininput] = useState({
        name: "",
        password: ""
    });

    function handleSubmit(e){
        e.preventDefault();
        console.log(loginInput);
    }
    return <div>
        <section className="login-center">
                <h1>Login</h1>
                <span className="login-underline"> </span>
        </section>

        <form className="form-container d-grid g-4">

            <input 
            className="username-input bg-light-subtle" 
            type="text" name="username" 
            id="name" 
            autoComplete="username"
            placeholder="User Name"
            onChange={(e) => {setLogininput({
                ...loginInput,
                name: e.target.value
                });
            }}

            />

            <input 
            className="password-input bg-light-subtle" 
            type="password" 
            name="userpassword" 
            id="password" 
            autoComplete="password"
            placeholder="Password"
            onChange={(e) => {setLogininput({
                ...loginInput,
                password: e.target.value
                });
            }}
            />

            <input 
            className="btn btn-dark mt-5 text-white rounded-5" 
            type="button" value="Login" 
            onClick={(e) => {handleSubmit(e)}}
            />
        </form>
    </div>
}

export default Login