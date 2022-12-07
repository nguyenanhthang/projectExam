import './Login.css'
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Login() {
    return ( 
        <div class="login-container">
        <div class="aside-right">
            <div className='img-header'>
                <div className="header">
                </div>
            </div>
            <form id="login-form">
                <div className="input-wrapper">
                    <div className='input'>
                        <FontAwesomeIcon className='icon' icon={faUser} />
                        <input type="text" placeholder="User Name" name="email"></input>
                    </div>
                    <div className="error" id="email-error"></div>
                </div>
                <div className="input-wrapper">
                    <div className='input'>
                    <FontAwesomeIcon className='icon' icon={faKey} />
                        <input type="password" placeholder="Password" name="password"/>
                        <div className="error" id="password-error"></div>
                    </div>
                </div>
                <div className="form-action">
                    <span className="cursor-pointer" id="redirect-to-register">
                        <input type="checkbox" /> Remember me
                    </span>
                    <button className="btn" type="submit" id="login">
                        Login
                    </button>
                </div>
            </form>
        </div>
        </div>
    );
}

export default Login;