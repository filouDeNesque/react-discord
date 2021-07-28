

function Subsaloon(props) {
  return (
    <>
      {props.room.map((salon) => (
        <li>{salon.name}</li>
      ))}
    </>
  );
}

function Salon(props) {
  return (
    <>
      <ul>
        {props.rooms.map((salon) => (
          <li>
            {salon.name}

            <ul>
              <Subsaloon room={salon.salon} />
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function NavBarLeft(props) {
  return (
    <div className="NavleftBar">
      <Salon rooms={props.rooms} />
    </div>
  );
}
