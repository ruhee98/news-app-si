import React, {useContext, useState, useEffect} from 'react';
import {auth} from './firebase';

//tool that allows u to propogate data
export const AuthContext = React.createContext();


export function useAuth() {
    return useContext(AuthContext)
}
    
// stores user's authentication status
export function AuthProvider({children}){
    const [loading, setLoading] = useState(false);
    const [currentUser, setCurrentUser] = useState()

    // runs only once 
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)

        });
        return unsubscribe
    }, [])

    function signup(email,password){
       return auth.createUserWithEmailAndPassword(email,password) 
      }

    function login(email,password){
        return auth.signInWithEmailAndPassword(email,password) 
    }

    function logout(){
        return auth.signOut()
    }

    function resetPassword(email){
        return auth.sendPasswordResetEmail(email);

    }

    function updateEmail(email){
        return currentUser.updateEmail(email);
    }

    function updatePassword(password){
        return currentUser.updatePassword(password);
    }

      const value = {
          currentUser, signup, login, logout, resetPassword,
          updateEmail, updatePassword,
      }
    
    return (
        //pass our current user in every change
        <AuthContext.Provider
        value={value}
        >
        {!loading && children}
        </AuthContext.Provider>
    )
}

