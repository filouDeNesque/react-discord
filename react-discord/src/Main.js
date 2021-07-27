import messages from "./Message.json";
export default function Main() {
  return (
    <><div className="message">
      <div>
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
      <TextField />
    </div></>
  );
}

function TextField(){
  return <textarea class="text-area" />;
}
