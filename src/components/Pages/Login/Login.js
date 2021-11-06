import { faFacebookF, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory, useLocation } from 'react-router';

import useAuth from '../../../hooks/useAuth';

import './Login.css'

const Login = () => {
    // font awesome brand icon 
    const googleIcon = <FontAwesomeIcon icon={faGoogle} />
    const githubIcon = <FontAwesomeIcon icon={faGithub} />
    const facebookIcon = <FontAwesomeIcon icon={faFacebookF} />

    const { handleFirstName, handleSecondName, handleEmailSignUp, handlePassword, handleToggle, user, error, verify, reset, isLogin, handleGoogleSignIn, handleGithubSignIn, handleFacebookSignIn, handleResetPassword,
        setIsLoading, handleRegistrationConfirm,
        handleLogin,
        password, email, setError,
        setVerify,
        setReset, emailVerification,
        updateUserName } = useAuth();
    // redirect after login 
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/';
    // login with app
    const handleGoogleLogin = () => {
        handleGoogleSignIn()
            .then(result => {
                history.push(redirect_url)
                console.log(result.user)
            })
            .finally(() => setIsLoading(false))
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleGithubLogin = () => {
        handleGithubSignIn()
            .then(result => {
                history.push(redirect_url)
            })
            .finally(() => setIsLoading(false))
            .catch(error => {
                console.log(error.message)
            })
    }
    const handleFacebookLogIn = () => {
        handleFacebookSignIn()
            .then(result => {
                history.push(redirect_url)
            })
            .finally(() => setIsLoading(false))
            .catch(error => {
                console.log(error.message)
            })
    }
    // log in or sign up with email password 
    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must contain at least six characters')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must contain two upper case letter')
            return;
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('Password must contain one special case letter');
            return;
        }
        if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Password must contain two digits.');
            return;
        }
        if (!/(?=.*[a-z].*[a-z].*[a-z])/.test(password)) {
            setError('Password must contain three lowercase letters.');
            return;
        }

        isLogin ? handleUserLogin(email, password) : handleUserRegistration(email, password);
    }

    const handleUserLogin = (email, password) => {
        handleLogin(email, password)
            .then(() => {
                history.push(redirect_url)
                setVerify('');
                setReset('');
            })
            .finally(() => setIsLoading(false))
            .catch(error => {
                setError(error.message);
            })

    }

    const handleUserRegistration = (email, password) => {
        handleRegistrationConfirm(email, password)
            .then(() => {
                history.push(redirect_url)
                updateUserName();
                setError('');
                emailVerification();

            })
            .finally(() => setIsLoading(false))
            .catch(error => {
                setError(error.message);
            })


    }

    return (
        <div id="loginForm" className="App container-fluid bg-light rounded my-3 mx-auto">
            {
                (!user.email && !user.displayName) && <form onSubmit={handleRegistration}>
                    <h2 className="fs-3 fw-bolder lh-lg font-monospace text-primary">{isLogin ? 'Login' : 'Create an account'}</h2>
                    {
                        !isLogin && <div className="row mb-3">
                            <div className="col">
                                <input onBlur={handleFirstName} type="text" className="form-control" placeholder="First name" aria-label="First name" required />
                            </div>
                            <div className="col">
                                <input onBlur={handleSecondName} type="text" className="form-control" placeholder="Last name" aria-label="Last name" required />
                            </div>
                        </div>
                    }
                    <div className="row mb-3">

                        <div className="col-sm-12">
                            <input onBlur={handleEmailSignUp} type="email" className="form-control" id="inputEmail3" placeholder="your email" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-12">
                            <input onBlur={handlePassword} type="password" className="form-control" id="inputPassword3" placeholder="password" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-12">
                            <div className="form-group form-check d-flex justify-content-start">
                                <input onChange={handleToggle} type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label ms-2" htmlFor="exampleCheck1">Already Registered?</label>
                            </div>
                        </div>
                    </div>
                    <p className="text-danger">{error}</p>
                    {
                        verify && <p className="text-success">{verify}</p>
                    }
                    {
                        reset && <p className="text-success">{reset}</p>
                    }
                    <button type="submit" className="btn btn-primary mb-2"> {isLogin ? 'Login' : 'Sign up with email'} </button><br />

                    <p>or use one of these options</p>
                    <div className="d-flex justify-content-evenly p-3">
                        <span onClick={handleGoogleLogin} className="border border-dark p-2" style={{ cursor: "pointer" }}>{googleIcon}</span>
                        <span onClick={handleGithubLogin} className="border border-dark p-2" style={{ cursor: "pointer" }}>{githubIcon}</span>
                        <span onClick={handleFacebookLogIn} className="border border-dark p-2" style={{ cursor: "pointer" }}>{facebookIcon}</span>
                    </div>

                    <button onClick={handleResetPassword} type="button" className="btn btn-outline-primary">Forget your password? Reset password</button>
                </form>
            }
        </div>
    );
};

export default Login;