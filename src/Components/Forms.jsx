import React from 'react'
import '../Forms.css'


const Forms = () => {
    return (
        <>
            <div class="login-box" id='Register'>
                <h2>Register</h2>
                <form>
                    <div class="user-box">
                        <input type="text" name="" required="" />
                        <label>Username</label>
                    </div>
                    <div class="user-box">
                        <input type="password" name="" required="" />
                        <label>Password</label>
                    </div>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Register
                    </a>
                </form>
            </div>
        </>
    )
}

export default Forms;