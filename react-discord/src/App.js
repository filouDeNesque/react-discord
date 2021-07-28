import { useState } from "react";
import "./App.css";
import NavBarLeft from "./NavBarLeft";
import UsersBar from "./UsersBar";
import Message from "./Message";
import Writer from "./Writer";
import messagesJson from "./Message.json";
import users from "./User.json";
import chats from "./Chat.json";

function App() {
  var [messages, setMessages] = useState(messagesJson);
  function addMessage(message) {
    setMessages(messages.concat([{
      utilisateur: "Nicolas",
      Date: Date.now,
      Message: message,
      image:
        "https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116__340.jpg",
    }]));
  }
  return (
    <div className="App">
      <div class="main">
        <NavBarLeft rooms={chats} />
        <div class="header-main-right">
          <div class="top-header"></div>
          <div class="header-bottom">
            <div className="message">
              <div class="message-padding">
                {messages.map((user) => (
                  <Message user={user} />
                ))}
              </div>
              <Writer add={addMessage} />
            </div>
            <UsersBar users={users} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
