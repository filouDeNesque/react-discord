import chats from "./Chat.json";

function Subsaloon(props) {
  return (
    <>
      {props.title.map((salon) => (
        <li>{salon.name}</li>
      ))}
    </>
  );
}

function Salon(props) {
  return (
    <>
      <ul>
        {props.title.map((salon) => (
          <li>
            {salon.name}

            <ul>
              <Subsaloon title={salon.salon} />
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function NavBarLeft() {
  return (
    <div className="NavleftBar">
      <Salon title={chats} />
    </div>
  );
}
