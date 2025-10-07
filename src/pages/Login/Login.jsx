import { useState } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
export default function Login() {
    const navigate = useNavigate()
    const [Login, setLogin] = useState({
        username: '',
        password: ''
    })
    const notify = ()=>toast('Invalid credentials')
    const handleInput = (e) => {
        const { name, value } = e.target
        setLogin({ ...Login, [name]: value })
        console.log('Login', Login);

    }

    const handleLogin = (e) => {
        e.preventDefault();
        if (Login.username === 'admin' && Login.password === 'admin') {
            localStorage.setItem('token', 'abcd1234')
            navigate('/')
            return;
        }
        notify()
    }
    return <>
        <div className="login">
            <h1>Login</h1>
            <div className="login-item">
                <input type="text"
                    nameplaceholder='Username'
                    name='username'
                    value={Login.username || ''}
                    autoComplete="username"
                    onChange={handleInput} />
                <input type="password"
                    name="password"
                    placeholder='Password'
                    value={Login.password || ''}
                    autoComplete="new-password"
                    onChange={handleInput} />
                <input type="button"
                    value="Sign In"
                    onClick={handleLogin} />
                    <ToastContainer/>
            </div>
            <p>Don't have an account <Link to='/register'>Register</Link></p>

        </div>
    </>
}

// <input type="submit"
//       value="Sign In" />