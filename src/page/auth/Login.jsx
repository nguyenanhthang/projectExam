import './Login.css'
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState} from 'react';
import { dataPeople } from '../../Data/Data';
import { useNavigate,Navigate, json } from 'react-router-dom';
import { useEffect } from 'react';
function Login() {
    const [getLogin,setGetLogin]=useState({
        userName:'',
        password:''
    })
    const navigate = useNavigate();
    const getDataLogin=(e)=>{
        let name = e.target.name
        let value = e.target.value
        setGetLogin({...getLogin,[name]:value})
    }
    const handleLogin=()=>{
        dataPeople.map((el,i)=>{
            if(el.userName===getLogin.userName&&el.password===getLogin.password){
                localStorage.setItem('user',getLogin.userName)
                localStorage.setItem('DataUser',JSON.stringify(el))
                navigate('/login/dashboard')
            }
            else{
                return alert('password is not correct!')
            }
        })
        
    }
    // useEffect(()=>{
        if(localStorage.getItem('user')){
            return <Navigate to={'/login/dashboard'}/>
        }
    // },[])
    return ( 
            <div className="login-container">
            <div className="form-container">
                <div className='img-header'>
                    <div className="header">
                    </div>
                </div>
                <div id="login-form">
                    <div className="input-wrapper">
                        <div className='input'>
                            <FontAwesomeIcon className='icon' icon={faUser} />
                            <input onChange={getDataLogin} type="text" placeholder="User Name" name="userName"></input>
                        </div>
                        <div className="error" id="email-error"></div>
                    </div>
                    <div className="input-wrapper">
                        <div className='input'>
                        <FontAwesomeIcon className='icon' icon={faKey} />
                            <input onChange={getDataLogin} type="password" placeholder="Password" name="password"/>
                            <div className="error" id="password-error"></div>
                        </div>
                    </div>
                    <div className="form-action">
                        <span className="cursor-pointer" id="redirect-to-register">
                            <input type="checkbox" /> Remember me
                        </span>
                        <button onClick={handleLogin} className="btn" id="login">
                            Login
                        </button>
                    </div>
                </div>
            </div>
            </div>
        
    );
}

export default Login;