import { useState } from "react";
import "./App.css";
import messagesJson from "./Message.json";
import usersJson from "./User.json";
import chatsJson from "./Chat.json";
import AppUI from "./AppUI";

for (let i = 0; i < usersJson.length; i++)
  usersJson[i].uid = i + 1;
for (let i = 0; i < chatsJson.length; i++) {
  for (let j = 0; j < chatsJson[i].salon.length; j++) {
    chatsJson[i].salon[j].uid = j + 1;
  }
  chatsJson[i].uid = i + 1;
}
for (let i = 0; i < messagesJson.length; i++)
  messagesJson[i].uid = i + 1;

function App() {
  var [messages, setMessages] = useState(messagesJson);
  var [users] = useState(usersJson);
  var [chats] = useState(chatsJson);
  function addMessage(message) {
    setMessages(messages.concat([{
      utilisateur: "Nicolas",
      Date: Date.now,
      Message: message,
      image:
        "https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116__340.jpg",
    }]));
  }
  return <AppUI chats={chats} messages={messages} users={users} addMessage={addMessage} />
}

export default App;
