import React from "react";
import "../styles/Signup.css";


function Signup() {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [passwordConfirm, setPasswordConfirm] = React.useState("")
    const [joinNewsletter, setJoinNewsletter] = React.useState("")

    function handleEmail(event) {
        setEmail(event.target.value)
    }

    function handlePassword(event) {
        setPassword(event.target.value)
    }

    function handlePasswordConfirm(event) {
        setPasswordConfirm(event.target.value)
    }

    function handleNewsletter(event) {
        setJoinNewsletter(event.target.checked)
    }

    function handleSubmit(event) {
        if (password === passwordConfirm) {
            alert("succesfully registered");
        } else {
            alert("Password do not match")
        }
    }

    return (

        <div className="form-container">
            <form className="form" onSubmit="">
                <input
                    type="email"
                    placeholder="Email adress"
                    className="form--input"
                    value={email}
                    onChange="{handleEmail}"
                    name="email"

                />

                <input
                    type="password"
                    placeholder="password"
                    className="form--input"
                    value={password}
                    onChange={handlePassword}
                />

                <input
                    type="password"
                    placeholder="password Confirm"
                    className="form--input"
                    value={passwordConfirm}
                    onChange={handlePasswordConfirm}
                />

                <input
                    type="checkbox"
                    placeholder="newsletter"
                    className="form--input"
                    checked={joinNewsletter}
                    onChange={handleNewsletter}
                />
                <label>i want to join newsletter</label>
                <br />
                <br />

                <button className="form--submit">Submit</button>


            </form>
        </div>
    )
}

export default Signup