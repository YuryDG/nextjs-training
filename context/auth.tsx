import React, { useContext, useEffect, useState } from 'react';
import {
    User,
    signInWithPopup,
    signOut,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
} from 'firebase/auth';

// import app to be initialized
import firebaseApp from '../services/firebase';

// type for the value of the context
type AuthContextProps = {
    currentUser: User | null;
    login: () => Promise<void>;
    logout: () => Promise<void>;
}

// default value for the context
const authContextDefaultValue: AuthContextProps = {
    login: async () => { },
    logout: async () => { },
    currentUser: null,
}

// context typed properly
const AuthContext = React.createContext(authContextDefaultValue);

// our custom hook to get the context
export const useAuth = () => {
    return useContext(AuthContext);
}

const auth = getAuth(firebaseApp);

// context provider
export const AuthProvider: React.FC = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
        });

        return unsubscribe;
    }, [])

    const login = async () => {
        try {
            await signInWithPopup(auth, new GoogleAuthProvider());
        } catch (error) {
            console.error(error);
        }
    }

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error(error);
        }
    }


    // value for the context
    const value = {
        login,
        logout,
        currentUser
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}