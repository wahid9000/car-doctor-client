import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  }

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser && currentUser.email) {
        const user = {
          email: currentUser.email
        }
        fetch('http://localhost:5000/jwt', {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(user)
        })
          .then(res => res.json())
          .then(data => {
            console.log('jwt response', data);
            //Warning: localstorage use is not recommended
            localStorage.setItem("car-doctor-access-token", data.token);
          })

      }
      else{
        localStorage.removeItem("car-doctor-access-token");
      }
    })
    return () => {
      return unsubscribe();
    }
  }, [])



  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    logout,
    googleSignIn,
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;