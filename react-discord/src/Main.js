import React, { useState } from "react";
import messages from "./Message.json";
export default function Main() {
  var[value,setValue]=useState("bonjour2");
  

  function handleSubmit(e) {
    console.log(e.target.value);
    setValue(e.target.value);
  }

  return (
    <>
      <div className="message">
        <div class="message-padding">
          {messages.map((user) => (
            <div class="body-message">
              <img src={user.image} alt=""></img>
              <div class="main-message">
                <div class="header-message">
                  <h4>{user.utilisateur}</h4>
                  <p>{user.Date}</p>
                </div>
                <div class="bottom-message">
                  <p>{user.Message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <form>
          <textarea class="text-area" value={value} onChange={handleSubmit} />
          <button class="btn-float" type="submit" onClick={handleSubmit}>
            Send
          </button>
        </form>
      </div>
    </>
  );
}


