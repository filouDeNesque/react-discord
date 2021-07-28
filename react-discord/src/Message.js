export default function Message(props) {
  return (
    <div className="body-message">
      <img src={props.message.image} alt=""></img>
      <div className="main-message">
        <div className="header-message">
          <h4>{props.message.utilisateur}</h4>
          <p>{props.message.Date}</p>
        </div>
        <div className="bottom-message">
          <p>{props.message.Message}</p>
        </div>
      </div>
    </div>
  );
}
