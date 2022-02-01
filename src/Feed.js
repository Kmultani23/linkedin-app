import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import InputOption from "./InputOption";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";
import { db } from "./firebase";
import firebase from 'firebase/compat/app'
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";

function Feed() {
    const user = useSelector(selectUser)
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([]);
 
// whenever the posst changes we update it 
useEffect(() => {
    db.collection("posts")
    //orders by the recent timestamp given in an desecnding order
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
    
  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
            name: user.displayName,
            desc: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("")
    } 

    

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input 
                        onChange={e => setInput(e.target.value)}
                        value={input} 
                        type="text" />
                        
                        <button onClick={sendPost}type="submit ">send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                 <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E"/>
                </div>
            </div>

            <FlipMove>
            {posts.map(({ id, data: { name, desc, message, photoUrl } }) => (
         
         <Post
            key={id}
            name={name}
            desc={desc}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
        </FlipMove>
            
        </div>
    )
}

export default Feed