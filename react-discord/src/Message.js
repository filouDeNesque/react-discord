export default function Message(props) {
  return (
    <div class="body-message">
      <img src={props.message.image} alt=""></img>
      <div class="main-message">
        <div class="header-message">
          <h4>{props.message.utilisateur}</h4>
          <p>{props.message.Date}</p>
        </div>
        <div class="bottom-message">
          <p>{props.message.Message}</p>
        </div>
      </div>
    </div>
  );
}
