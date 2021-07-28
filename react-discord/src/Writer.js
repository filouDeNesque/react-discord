import { useState } from "react";
export default function TextField(props) {
    var [msg, setMsg] = useState("");
    function update(e) {
        setMsg(e.target.value);
    }

    function send() {
        return props.add(msg);
    }

    return (
        <>
            <textarea class="text-area" value={msg} onChange={update} />
            <button class="btn-float" onClick={send}>
                Send
            </button>
        </>
    );
}
