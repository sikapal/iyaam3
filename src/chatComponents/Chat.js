import React, { useState,useEffect,useRef } from "react";
import "./chat.css";
import info from "../images/info.png";
import video from "../images/video.png";
import phone from "../images/phone.png";
import avatar from "../images/avatar.png";
import emoji from "../images/emoji.png";
import img from "../images/img.png";
import camera from "../images/camera.png";
import microphone from "../images/mic.png";
//import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  //const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

 // const handleEmoji = (e) => {
  //  setText((prev) => (prev = e.emoji));
   // setOpen(false);
    // };
    
    const endRef = useRef(null)
    
    useEffect(() => { 
        endRef.current?.scrollIntoView({behavior:'smooth'})
    },[])
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src={avatar} alt="avatar" />
          <div className="texts">
            <span>Tizi Bienvenue</span>
            <p>Lorem ipsum dolor, sit amet</p>
          </div>
        </div>
        <div className="icons">
          <img src={phone} alt="phone" />
          <img src={video} alt="video" />
          <img src={info} alt="info" />
        </div>
      </div>
          <div className="center">
              
             
              <div className="message">
                  <img src={avatar} alt="avatar" />
                  <div className="text">
                      <p>
                          Cet ouvrage, très populaire pendant la Renaissance,
                          est un traité sur la théorie de l'éthique. Les premières
                          lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...",
                          proviennent des sections 1.10.32 et 1.10.33 du
                          "De Finibus Bonorum et Malorum" de Cicéron.
                      </p>
                      <span> 1 min ago</span>
                  </div>
              </div>
              <div className="message own">
                  
                  <div className="text">
                      <p>
                          Cet ouvrage, très populaire pendant la Renaissance,
                          est un traité sur la théorie de l'éthique. Les premières
                          lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet.
                      </p>
                      <span> 1 min ago</span>
                  </div>
              </div>

              <div className="message">
                  <img src={avatar} alt="avatar" />
                  <div className="text">
                      <p>
                          Cet ouvrage, très populaire pendant la Renaissance,
                          est un traité sur la théorie de l'éthique. Les premières
                          lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet.
                      </p>
                      <span> 1 min ago</span>
                  </div>
              </div>
              <div className="message own">
                  
                  <div className="text">
                      <p>
                          Cet ouvrage, très populaire pendant la Renaissance,
                          est un traité sur la théorie de l'éthique. Les premières
                          lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet.
                      </p>

                      <img className='img-text' src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="pho"/>
                      <span> 1 min ago</span>
                  </div>
              </div>
              
              <div className="message">
                  <img src={avatar} alt="avatar" />
                  <div className="text">
                      <p>
                          Cet ouvrage, très populaire pendant la Renaissance,
                          est un traité sur la théorie de l'éthique. Les premières
                          lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet..
                      </p>
                      <span> 1 min ago</span>
                  </div>
              </div>
              
              
           
           <div ref={endRef}></div>  

      </div>
      <div className="bottom">
        <div className="icons">
          <img src={img} alt="img" />
          <img src={camera} alt="img" />
          <img src={microphone} alt="img" />
        </div>
        <input
          type="text"
          placeholder="Type your message here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src={emoji}
            alt="emoji"
           // onClick={() => setOpen((prev) => !prev)}
          />
                 { /*   <div className="picker">
                  
                     <EmojiPicker open={open} onEmojiClick={handleEmoji} />  
                  </div>
                  */}  
        </div>
        <button className="send">Send</button>
      </div>
    </div>
  );
};

export default Chat;
