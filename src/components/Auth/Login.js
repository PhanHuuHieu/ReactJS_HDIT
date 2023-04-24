import { useState } from 'react';
import './Login.scss'
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/apiServices';
import { ToastContainer, toast } from 'react-toastify';
import { VscEye, VscEyeClosed } from "react-icons/vsc"

import { useDispatch } from 'react-redux';
import { doLogin } from '../../redux/action/userAction';
import { ImSpinner10 } from "react-icons/im"


const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isShowPassword, setIsShowPassword] = useState(false)

    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate();
    const dispath = useDispatch();

    const handleLogin = async () => {
        setIsLoading(true)
        let data = await postLogin(email, password)
        if (data && data.EC === "0") {
            dispath(doLogin(data))
            toast.success(data.EM)
            setIsLoading(false)
            navigate('/')
        }
        if (data && data.EC !== "0") {
            setIsLoading(false)
            toast.error(data.EM)
        }
    }
    return (
        <div className="login-container">
            <div className='header'>
                <span class="">Dont have account yet?</span>
                <button onClick={() => navigate('/register')}>Sign up </button>
            </div>
            <div className='title col-4 mx-auto'>
                TITLE
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
                <div className='form-group pass-group'>
                    <label>Password</label>
                    <input type={isShowPassword ? "text" : "password"} className='form-control'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    {isShowPassword ? <span className='icon-eye'
                        onClick={() => setIsShowPassword(false)}
                    > <VscEye />
                    </span> :
                        <span className='icon-eye'
                            onClick={() => setIsShowPassword(true)}

                        > <VscEyeClosed />
                        </span>}

                </div>
                <span className='forgot-password'>Forgot password</span>
                <div>
                    <button className='btn-submit'
                        onClick={() => handleLogin()}

                        disabled={isLoading}
                    >
                        {isLoading === true && <ImSpinner10 className='loader-icon' />}
                        <span className="">Login</span>
                    </button>
                </div>
                <div className='text-center'>
                    <span className='back' onClick={() => { navigate('/') }}> &#60;&#60; Go back home</span>
                </div>

            </div>
        </div >
    )
}
export default Login;