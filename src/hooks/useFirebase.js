import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, sendEmailVerification, FacebookAuthProvider, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import initializeAuthentication from "../components/Firebase/firebase.init";

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const useFirebase = () => {
    // hook 
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [verify, setVerify] = useState('');
    const [reset, setReset] = useState('');
    const [firstname, setFirstName] = useState('');
    const [secondname, setSecondName] = useState('');
    const [isLoading, setIsLoading] = useState(true);


    // auth 
    const auth = getAuth();
    const handleGoogleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const handleGithubSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

    const handleFacebookSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, facebookProvider)
    }

    const handleSignOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
                setIsLogin(false);
            })
            .finally(() => setIsLoading(false))
            .catch(error => {
                setError(error.message);
            })
    }

    const handleEmailSignUp = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }



    const handleRegistrationConfirm = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const handleLogin = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleToggle = e => {
        setIsLogin(e.target.checked);
    }
    const emailVerification = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                setVerify('Verification email sent to your address');
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setReset('Check your email for reset your password');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const updateUserName = () => {
        updateProfile(auth.currentUser, { displayName: firstname + " " + secondname })
            .then(() => {

            })
            .catch(error => {
                setError(error.message);
            })
    }
    const handleFirstName = e => {
        setFirstName(e.target.value);
    }
    const handleSecondName = e => {
        setSecondName(e.target.value);
    }
    //observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, []);

    return {

        handleFirstName,
        handleSecondName,
        handleEmailSignUp,
        handlePassword,
        handleToggle,
        user,
        error,
        verify,
        reset,
        isLogin,
        handleGoogleSignIn,
        handleGithubSignIn,
        handleFacebookSignIn,
        handleResetPassword,
        handleSignOut,
        isLoading,
        setIsLoading,
        handleRegistrationConfirm,
        handleLogin,
        password,
        email,
        setError,
        setUser,
        setVerify,
        setReset,
        emailVerification,
        updateUserName

    }

}

export default useFirebase;