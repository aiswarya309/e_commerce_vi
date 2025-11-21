import { Link, useNavigate } from 'react-router-dom'
import './register.css'
import { useState, useEffect } from 'react'
export default function Register() {
    // const [userName, setUserName] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    })
    const [auth, setAuth] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem('token')
        if (token) navigate('/')
    }, [navigate])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
        console.log('user', user);
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch('http://localhost:5000/api/register', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            const data = await res.json();
            console.log(data);

            setAuth(data)

            navigate('/login')
        } catch (err) {
            console.log("err", err);

        }

    }
    return <>
        <div className="register">
            <h1>Register Page</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className="register-item">
                    <input type="text"
                        value={user.username || ''}
                        name='username'
                        placeholder='Username'
                        autoComplete="username"
                        onChange={handleChange} />
                    <input type="email"
                        value={user.email || ''}
                        name='email'
                        placeholder='Email'
                        autoComplete="email"
                        onChange={handleChange} />
                    <input type="password"
                        value={user.password || ''}
                        name="password"
                        placeholder='Password'
                        autoComplete="new-password"
                        onChange={handleChange} />
                    <input type="submit"
                        value="Sign Up" />
                </div>
            </form>
            <p>Already have an accout <Link to='/login'>Login</Link></p>
        </div>
    </>
}