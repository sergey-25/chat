import React, {useState} from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import signinImage from '../assets/signup.jpg';
import {initialState} from "stream-chat-react/dist/components/Channel/channelState";


const Auth = () => {

    const initialState = {
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        avatarURL: '',
    }


    const [isSignUp, setIsSignUp] = useState(true);
    const [form, setForm] = useState(initialState);

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});

        // console.log(form)
    };

    const handleSubmit =(e) =>{
        e.preventDefault()
        console.log(form)
    };

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp)
    };

    return (
        <div className="auth__form-container">
            <div className="auth__form-container_fields">
                <div className="auth__form-container_fields-content">
                    <p>
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </p>
                    <form
                        onSubmit={handleSubmit}
                    >
                        {isSignUp && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="fullName">Full Name</label>
                                <input
                                    name="fullName"
                                    type="text"
                                    placeholder="Full Name"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="username">Username</label>
                            <input
                                name="username"
                                type="text"
                                placeholder="Username"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {isSignUp && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="phoneNumber">Phone Number</label>
                                <input
                                    name="phoneNumber"
                                    type="text"
                                    placeholder="Phone Number"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        {isSignUp && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="avatarURL">Avatar URL</label>
                                <input
                                    name="avatarURL"
                                    type="text"
                                    placeholder="Avatar URL"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="password">Password</label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {isSignUp && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="Confirm Password"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_button">
                                <button>{isSignUp ? 'Sign Up' : 'Sign In'}</button>
                        </div>
                    </form>
                    <div className="auth__form-container_fields-account">
                        <p>
                            {isSignUp
                                ? 'Already have an account '
                                : 'Don`t have an account?'
                            }
                            <span onClick={switchMode}>
                                    {isSignUp ? ' Sign In' : 'Sign Up'}
                                </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="auth__form-container_image">
                <img src={signinImage} alt="sign in"/>
            </div>
        </div>
    );
};

export default Auth;
