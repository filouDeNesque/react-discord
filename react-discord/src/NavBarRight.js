import users from "./User.json";

function OnlineUsers(props) {
  return (
    <>
      {props.elements.map((element) => (
        <>
          {element.status === "online" ? (
            <div class="online-user">
              <img src={element.photo} alt="" class="online-user-photo"></img>
              <span class="online-badge"></span>
              <p class="user-name">{element.name}</p>
            </div>
          ) : null}
        </>
      ))}
    </>
  );
}

function OfflineUsers(props) {
  return (
    <>
      {props.elements.map((element) => (
        <>
          {element.status === "offline" ? (
            <div class="offline-user">
              <img src={element.photo} class="offline-user-photo" alt=""></img>
              <span class="offline-badge"></span>
              <p class="user-name">{element.name}</p>
            </div>
          ) : null}
        </>
      ))}
    </>
  );
}

function OnlineNb(props) {
  var nb = 0;
  props.elements.forEach((element) => (
    element.status === "online" ? nb++ : 1
  ));
  return (
    <>
      <div class="online-user-nb">
        <p>{"Online - " + nb}</p>
      </div>
    </>
  )
}

function OfflineNb(props) {
  var nb = 0;
  props.elements.forEach((element) => (
    element.status === "offline" ? nb++ : 1
  ));
  return (
    <>
      <div class="online-user-nb">
        <p>{"Offline - " + nb}</p>
      </div>
    </>
  )
}

function NavBarRight() {
  return (
    <>
      <div class="Main-right">
        <OnlineNb elements={users} />
        <OnlineUsers elements={users} />
        <OfflineNb elements={users} />
        <OfflineUsers elements={users} />
      </div>
    </>
  );
}

export default NavBarRight;
