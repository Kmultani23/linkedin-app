import React,{ useState } from 'react'
import "./Login.css"
import {auth} from "./firebase"
import Post from './Post'
import { login } from "./features/userSlice"
import { useDispatch } from 'react-redux'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [profilePic, setProfilePic] = useState("")
    const dispatch = useDispatch()
    
    const register = () => {
        if(!name){
            return alert("Please enter a fullname")
        }
        //create auth using firebase 
        auth.createUserWithEmailAndPassword(email, password)
        //once this is successful, once the user is created
        .then((userAuth) => {
            // were going to update the user 
          userAuth.user.updateProfile({
              //these are keys refereing to firebase, and the name, profile pic is our local state
              displayName: name,
              photoURL: profilePic,
            })
            //now we need to push the user into the store , by using dispatch
            .then(() => {
              dispatch(
                  // this is filling our login reducer payload with all this data
                login({
                  email: userAuth.user.email,
                  uid: userAuth.user.uid,
                  displayName: name,
                  photoUrl: profilePic,
                })
              );
            });
        })
        .catch((error) => alert(error));
    };
    
   
    //import auth from firebase
    const loginToApp = (e) => {
        e.preventDefault();
        
        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL
            })
            )
        }) .catch((error) => alert(error))
    };
    
    

    return (
        <div className="login">        
          <img
           src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
             alt=""
            />

            <form >
             <input 
             value = {name}
             onChange={e => setName(e.target.value)}
             placeholder="Full Name (required if regestiring)" 
             type="text" 
             />
            
            <input 
              value = {profilePic}
              onChange={e => setProfilePic(e.target.value)} 
              placeholder="Profile Pic URL (optional)"
              type="text"/>
            
             <input  
             value = {email}
             onChange={e => setEmail(e.target.value)} 
             placeholder="Email" 
             type="text"
             />

             <input 
             value= {password} 
             onChange={e => setPassword(e.target.value)}
             placeholder="Password" 
             type="Password"
             />
             
             <button type="submit" onClick={loginToApp}> Sign in </button>
            </form>
                <p>Not a member? {" "}
                <span className="login__register"
                 onClick={register}>
                     Register Now
                     </span>
                </p>
        </div>
    )
}

export default Login
