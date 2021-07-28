export default function Message(props) {
  return (
    <div class="body-message">
      <img src={props.user.image} alt=""></img>
      <div class="main-message">
        <div class="header-message">
          <h4>{props.user.utilisateur}</h4>
          <p>{props.user.Date}</p>
        </div>
        <div class="bottom-message">
          <p>{props.user.Message}</p>
        </div>
      </div>
    </div>
  );
}
