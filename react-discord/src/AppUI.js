import NavBarLeft from "./NavBarLeft";
import UsersBar from "./UsersBar";
import Message from "./Message";
import Writer from "./Writer";
import { useRef, useEffect } from "react";

export default function AppUI(props) {
    var scroller = useRef();
    useEffect(() => {
        scroller.current.scrollTop = scroller.current.scrollHeight;
    });
    return (
        <div className="App">
            <div className="main">
                <NavBarLeft rooms={props.chats} />
                <div className="header-main-right">
                    <div className="header-bottom">
                        <div className="messages" ref={scroller}>
                            <div className="messages-padding">
                                {props.messages.map(message => (
                                    <Message message={message} key={message.uid} />
                                ))}
                            </div>
                            <Writer add={props.addMessage} />
                        </div>
                        <UsersBar users={props.users} />
                    </div>
                </div>
            </div>
        </div>
    );
}