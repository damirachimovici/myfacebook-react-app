import React, {useState} from 'react'
import { Button } from '@material-ui/core';
import "./Login.css"
import {auth, provider} from "../firebase";
import {useStateValue} from "./StateProvider";
import {actionTypes} from "./reducer";

function Login () {
    const [state, dispatch] = useStateValue()
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message))
    }
    return(
        <div className='login'>
            <div className='login-logo'>
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png'
                    alt="FB"
                />
                <img
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="FB wine" />
            </div>

            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
            <div className='login-desc'>
                <h5>from</h5>
                <h4>Youtube ffs @clever programmer</h4>
            </div>
        </div>
    )
}


export default Login
