function User(props) {
  return (
    <div class={"user " + props.user.status}>
      <img src={props.user.photo} class="photo" alt=""></img>
      <span class="badge"></span>
      <p class="user-name">{props.user.name}</p>
    </div>
  );
}

function StatusCount(props) {
  return (
    <>
      <div class="online-user-nb">
        <p>{props.status + " - " + props.users.length}</p>
      </div>
    </>
  )
}

function filterOnline(users) {
  return users.filter(user => user.status === "online");
}

function filterOffline(users) {
  return users.filter(user => user.status === "offline");
}

function UsersBar(props) {
  return (
    <>
      <div class="Main-right">
        <StatusCount status="Online" users={filterOnline(props.users)} />
        {filterOnline(props.users).map((element) => (<User user={element} />))}
        <StatusCount status="Offline" users={filterOffline(props.users)} />
        {filterOffline(props.users).map((element) => (<User user={element} />))}
      </div>
    </>
  );
}

export default UsersBar;
