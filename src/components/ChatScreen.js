import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "../styles/ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    // fake database
    {
      name: "Angelina",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Angelina_Jolie_March_2017.jpg/220px-Angelina_Jolie_March_2017.jpg",
      message: "whats Up",
    },
    {
      name: "Angelina",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Angelina_Jolie_March_2017.jpg/220px-Angelina_Jolie_March_2017.jpg",
      message: "you like lorem ipsum?",
    },
    {
      message: "kiss me !",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHEED WITH JACEK ON 11/11/20
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__avatar"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <div>
        <form className="chatScreen__input">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="chatScreen__inputField"
            type="text"
            placeholder="type msg"
          />
          <button
            type="submit"
            onClick={handleSend}
            className="chatScreen__inputButton"
          >
            SEND !
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
