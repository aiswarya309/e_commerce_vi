import { useState } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { useEffect } from 'react'
export default function Login() {
    const navigate = useNavigate()
    const [Login, setLogin] = useState({
        username: '',
        password: ''
    })
    const [auth, setAuth] = useState({})
    useEffect(()=>{
        console.log("auth changed",auth);
    },[auth])
    const notify = () => toast('Invalid credentials')
    const handleInput = (e) => {
        const { name, value } = e.target
        setLogin({ ...Login, [name]: value })

    }

    const handleLogin = (e) => {
        e.preventDefault();
        const user = fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Login)
        }).then((res) => res.json())
            .then((data) => setAuth(data))
            .catch((err) => console.log(err));

        console.log("response",auth);
        if(auth.status == 200){
            navigate('/')
            return
        }else
            notify()

        // if (Login.username === 'admin' && Login.password === 'admin') {
        //     localStorage.setItem('token', 'abcd1234')
        //     navigate('/')
        //     return;
        // }
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
                <ToastContainer />
            </div>
            <p>Don't have an account <Link to='/register'>Register</Link></p>

        </div>
    </>
}

// <input type="submit"
//       value="Sign In" />

//  const user = fetch('http://localhost:5000/api/login', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(Login)
//         }).then((res) => res.json())
//             .then((data) => setAuth(data))
//             .catch((err) => console.log(err));
            
//         console.log("response", user,auth);
//         ✅ This also works — but console.log must be inside the .then() callback, not after fetch().
//         why it like that
