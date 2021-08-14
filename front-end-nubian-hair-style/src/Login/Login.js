import React, {useState, useEffect} from 'react'
import APIService from '../hooks/yelp-api/APIService';
// import {useCookies} from 'react-cookie'
// import {useHistory} from 'react-router-dom';
import './Login.css';
import TopNav from '../LandingPage/TopNav/TopNav';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // const [token, setToken] = useCookies(["mytoken"])
    // const [isLogin, setLogin] = useState(true)

    // let history = useHistory()



    const loginBtn = () => {
        APIService.LoginUser({username, password})
        .then(resp => {console.log(resp)
            // setToken('mytoken',resp.token)
            // setLogin(true)
            // history.push('/')
        })
        
        .catch(error => console.log(error))

    }

    // const RegisterBtn = () => {
    //     APIService.RegisterUser({username, password})
    //     .then(() =>  loginBtn())
    //     .catch(error =>console.log(error))

    // }

    return (
        <div>

            <TopNav/>
            <div className="background-color">
                <div className="container-login">
                    {/* {isLogin ? <h1>Please Login </h1> : <h1>Please Register </h1>} */}
                <form>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label">Username</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter your username" value = {username} onChange = {e => setUsername(e.target.value)}/>
                </div>
            {/* <div className="form-control">
                <label htmlFor="Email" className="form-label">Username</label>
                <input type="text"  className="login-input" id="inputText" value = {username} onChange = {e => setUsername(e.target.value)} placeholder="Enter your username" required/>
            </div>  */}
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter your password" value = {password} onChange = {e => setPassword(e.target.value)}/>
                </div>

            {/* <div className="form-control">
                <label htmlFor="Password" className="form-label">Password</label>
                <input type="password" className="login-input" id="inputPassword" value = {password} onChange = {e => setPassword(e.target.value)} placeholder="Enter your password" required/>
            </div> */}
                <button className="btn primary"  onClick = {loginBtn}>Login</button>
            {/* {isLogin ?  
            :  <button className="btn primary" onClick = {RegisterBtn} >Register</button>
            } */}

           
            {/* {isLogin ? <p className="text">If You Don't Have Account, Please <button className="btn secondary" onClick = {() => setLogin(false)}>Register</button>Here</p>
                
            :  <p>If You Have Account, Please <button className="btn secondary" onClick = {() => setLogin(true)} href="a">Login</button>Here</p>
                } */}
            </form>
        </div>
        </div>
        </div>

    )
}

export default Login