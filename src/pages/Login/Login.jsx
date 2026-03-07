import { useState, useEffect } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai";

export default function Login() {
    //  const usernameRegex = /^[A-Za-z]{5,}$/; // only letters, min 5
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{6,}$/;

    const navigate = useNavigate()
    useEffect(() => {
        const token = sessionStorage.getItem('token')
        if (token) navigate('/')
    }, [navigate])
    const [Login, setLogin] = useState({
        username: '',
        password: ''
    })
    const[show,setShow]=useState(false);

    const notify = () => toast('Invalid credentials')
    const handleInput = (e) => {
        const { name, value } = e.target
    console.log(name, value);
        setLogin({ ...Login, [name]: value })

    }

    const handleLogin = (e) => {
        e.preventDefault();
        // if(!usernameRegex.test(Login.username)){
        //     toast.error('Username must be at least 5 letters long and contain only letters');
        //     return;
        // }
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
            .then((data) => {
                console.log("data",data);
                
                if(data.status == 200){
                    sessionStorage.setItem('token',data.accessToken)
                    navigate('/')
                    return
                }else notify()
            })
            .catch((err) => console.log(err));
    }
    return <>
        <div className="login">
            <h1>Login</h1>
            <form action="" onSubmit={handleLogin}>
            <div className="login-item">
                <input type="text"
                    placeholder='Username'
                    name='username'
                    value={Login.username || ''}
                    autoComplete="username"
                    onChange={handleInput} 
                    required/>
                 <div style={{position:'relative'}}>
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
                    </div>
                <input type="submit"
                    value="Sign In"
                    // onClick={handleLogin}
                     />
                <ToastContainer />
            </div>
            <p>Don't have an account <Link to='/register' style={{textDecoration:'none',color:'rgb(25, 204, 145)'}}>Register</Link></p>
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
