import NavBarLeft from "./NavBarLeft";
import UsersBar from "./UsersBar";
import Message from "./Message";
import Writer from "./Writer";
import { useRef, useEffect } from "react";

export default function AppUI(props) {
    var scroller = useRef();
    useEffect(() => {
        scroller.current.scrollTop = scroller.current.scrollHeight;
        console.log(scroller.current);
    });
    return (
        <div className="App">
            <div class="main">
                <NavBarLeft rooms={props.chats} />
                <div class="header-main-right">
                    <div class="header-bottom">
                        <div className="messages" ref={scroller}>
                            <div class="messages-padding">
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