function User(props) {
  return (
    <div className={"user " + props.user.status}>
      <img src={props.user.photo} className="photo" alt=""></img>
      <span className="badge"></span>
      <p className="user-name">{props.user.name}</p>
    </div>
  );
}

function StatusCount(props) {
  return (
    <>
      <div className="online-user-nb">
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
      <div className="Main-right">
        <StatusCount status="Online" users={filterOnline(props.users)} />
        {filterOnline(props.users).map((element) => (<User user={element} key={element.uid} />))}
        <StatusCount status="Offline" users={filterOffline(props.users)} />
        {filterOffline(props.users).map((element) => (<User user={element} key={element.uid} />))}
      </div>
    </>
  );
}

export default UsersBar;
