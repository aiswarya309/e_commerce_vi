import { useState } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { useEffect } from 'react'
import { AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai";

export default function Login() {
     const usernameRegex = /^[A-Za-z]{5,}$/; // only letters, min 5
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{6,}$/;

    const navigate = useNavigate()
    const [Login, setLogin] = useState({
        username: '',
        password: ''
    })
    const [auth, setAuth] = useState({})
    const[show,setShow]=useState(false);

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
        if(!usernameRegex.test(Login.username)){
            toast.error('Username must be at least 5 letters long and contain only letters');
            return;
        }
           if(!passwordRegex.test(Login.password)){
            toast.error('password must contain letters, numbers, special characters and be at least 6 characters long');
            return;
        }
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
            localStorage.setItem('token', 'abcd1234')
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
            <form action="" onSubmit={handleLogin}>

            <div className="login-item">
                <input type="text"
                    nameplaceholder='Username'
                    name='username'
                    value={Login.username || ''}
                    autoComplete="username"
                    onChange={handleInput} 
                    required/>
                <input type={show ? "text":"password"}
                    name="password"
                    placeholder='Password'
                    value={Login.password || ''}
                    autoComplete="new-password"
                    onChange={handleInput} 
                    required/>
                    <span onClick={()=>setShow(!show)} className='hide-show'>
                        {show?<AiOutlineEye/>:<AiOutlineEyeInvisible/>}
                        </span>
                <input type="submit"
                    value="Sign In"
                    // onClick={handleLogin}
                     />
                <ToastContainer />
            </div>
            <p>Don't have an account <Link to='/register'>Register</Link></p>
            </form>

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
