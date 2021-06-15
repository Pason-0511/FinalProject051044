import React, { Component } from "react"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"



firebase.initializeApp({
    apiKey: "AIzaSyAn_rcxd-3UNLgZZZeG5HJMWuqC3OYf1pY",
    authDomain: "webfinalproject-119b1.firebaseapp.com",
    databaseURL: "https://webfinalproject-119b1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "webfinalproject-119b1",
    storageBucket: "webfinalproject-119b1.appspot.com",
    messagingSenderId: "174057768052",
    appId: "1:174057768052:web:bec7b1a8e83cfdd791bd21",
    measurementId: "G-3EZDSS6K9C"
})


class App extends Component {
    state = { isSignedIn: false }
    uiConfig = {
      signInFlow: "popup",
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        signInSuccess: () => false
      }
    }
  
    componentDidMount = () => {
      firebase.auth().onAuthStateChanged(user => {
        this.setState({ isSignedIn: !!user })
        console.log("user", user)
      })
    }
  
    render() {
      return (
        <div className="App">
          {this.state.isSignedIn ? (
            <span>
              
              
              <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
              <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            </span>
          ) : (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )}

        </div>
      )
    }
  }
  
  export default App
