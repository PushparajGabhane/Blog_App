import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login(props) {
    const { setLogin } = props.setLogin;
    const [formInput, setFormInput] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    return (
        <div className="sign-up">
            <h3>LOGIN</h3>
            <form>
                <label htmlFor="email">Email-Address</label><br />
                <input type={"email"} name="email" onChange={(e) => { setFormInput({ ...formInput, email: e.target.value }) }} /><br />

                <label htmlFor="password">Password</label><br />
                <input type={"password"} name="password" onChange={(e) => { setFormInput({ ...formInput, password: e.target.value }) }} /><br />

                <button 
                className="btn"
                onClick={() => {
                    alert("Login Successfully !");
                    navigate("/home");
                }}>Login</button>
            </form>
            <p>Don't have account ?</p>
            <Link to={"/"} className="signup-btn">Sign Up</Link>
        </div>
    )
}

export default Login;