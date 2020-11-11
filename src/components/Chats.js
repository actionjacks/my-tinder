import React from "react";
import "../styles/Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Jacek"
        message="nice butt"
        timestamp="40 seconds ago"
        profilePic="../avatar1.jpg"
      />
      <Chat
        name="Margaret"
        message="nice butt"
        timestamp="3 days ago"
        profilePic="../avatar2.png"
      />
      <Chat
        name="Natsha Kornikova"
        message="nice butt :**"
        timestamp="10 seconds ago"
        profilePic="../avatar3.jpg"
      />
    </div>
  );
}

export default Chats;
