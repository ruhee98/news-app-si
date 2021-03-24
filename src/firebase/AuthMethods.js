import firebase from 'firebase';



export const AuthMethods = {
    // firebase helper methods go here... 
    signup: (email, password, setErrors) => {
        firebase.auth().createUserWithEmailAndPassword(email,password) 
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          setErrors(prev => ([...prev, err.message]))
        })
      },
    signin: (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
        });      
      },
    signout: (email, password) => {
  
      },
    }