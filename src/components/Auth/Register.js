import { useState } from 'react';
import './Register.scss'
import { useNavigate } from 'react-router-dom';
import { postLogin, postRegister } from '../../services/apiServices';
import { ToastContainer, toast } from 'react-toastify';
const Register = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")
    const [userName, setUserName] = useState("")

    const navigate = useNavigate();

    const handleRegister = async () => {
        if (password !== rePassword) {
            var span = document.getElementById("re-password");
            span.innerHTML = 'Password not same'
            return;
        }
        let data = await postRegister(email, userName, password)
        if (data && data.EC === "0") {
            toast.success(data.EM)
            navigate('/login')
        }
        if (data && data.EC !== "0") {
            toast.error(data.EM)
        }
    }

    const handleRePassword = (event) => {
        setRePassword(event.target.value)
        var span = document.getElementById("re-password"),
            text = document.createTextNode('' + "Password not same");
        if (password !== event.target.value) {
            span.innerHTML = ''
            span.appendChild(text);
        }
        else {
            span.innerHTML = ''
        }
    }

    return (
        <div className="login-container">
            <div className='header'>
                <span class="">Already have account?</span>
                <button onClick={() => navigate('/login')}>Login</button>
            </div>
            <div className='title col-4 mx-auto'>
                Register account
            </div>
            <div className='welcome col-4  mx-auto'>
                Hello
            </div>
            <div className='content-form col-4 mx-auto'>
                <div className='form-group '>
                    <label>Email</label>
                    <input type={'email'} className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>

                <div className='form-group '>
                    <label>Username</label>
                    <input type={'text'} className='form-control'
                        value={userName}
                        onChange={(event) => setUserName(event.target.value)}
                    />
                </div>

                <div className='form-group '>
                    <label>Password</label>
                    <input type={'password'} className='form-control'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div className='form-group '>
                    <label>Confirm Password</label>
                    <input type={'password'} className='form-control'
                        value={rePassword}
                        onChange={(event) => handleRePassword(event)}

                    />
                </div>
                <span id='re-password' style={{ color: "red" }} ></span>
                <div>
                    <button className='btn-submit'
                        onClick={() => handleRegister()}
                    >Sign up</button>
                </div>
                <div className='text-center'>
                    <span className='back' onClick={() => { navigate('/') }}> &#60;&#60; Go back home</span>
                </div>

            </div>
        </div >
    )
}
export default Register;