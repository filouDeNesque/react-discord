import { useState } from "react";
export default function TextField(props) {
    var [msg, setMsg] = useState("");
    function update(e) {
        setMsg(e.target.value);
    }

    function send() {
        props.add(msg);
        setMsg("");
    }

    return (
        <>
            <textarea className="text-area" value={msg} onChange={update} />
            <button className="btn-float" onClick={send}>
                Send
            </button>
        </>
    );
}
