import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const navigate = useNavigate();

    const [formInput, setFormInput] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });

    async function handleSignup() {

        await fetch("http://localhost:5000/user", {
            method: "POST",
            body: {
                email: formInput.email,
                password: formInput.password
            }
        });

        navigate("/login")
    }


    return (
        <div className="sign-up">
            <h3>SIGN UP</h3>
            <form>
                <label htmlFor="email">Email-Address</label><br />
                <input type={"email"} name="email" onChange={(e) => { setFormInput({ ...formInput, email: e.target.value }) }} /><br />

                <label htmlFor="password">Password</label><br />
                <input type={"password"} name="password" onChange={(e) => { setFormInput({ ...formInput, password: e.target.value }) }} />

                <p className="password-warn">Password should contain atleast 1 number and 1 special character</p>

                <label htmlFor="confirm-password">Confirm-Password</label><br />
                <input type={"password"} name="confirm-password" onChange={(e) => { setFormInput({ ...formInput, confirmPassword: e.target.value }) }} />

                {!(formInput.password === formInput.confirmPassword) &&
                    <p className="password-warn">Password and Confirm-Password must be same</p>}

               <br /> <button onClick={() => handleSignup()} disabled={!(formInput.password === formInput.confirmPassword)} className="btn">Sign Up</button>

            </form>
        </div>
    )
}

export default SignUp;