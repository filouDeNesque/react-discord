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

function NavBarRight() {
  return (
    <>
    <div class="Main-right">
      <OnlineUsers elements={users}></OnlineUsers>
      <OfflineUsers elements={users}></OfflineUsers>
    </div>
    </>
  );
}

export default NavBarRight;
