import React, { useState } from 'react'
import "../css/ChatScreen.css"
import Avatar from "@material-ui/core/Avatar"

const ChatScreen = () => {
    // keep track of input
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: "Ellen",
            image: "...",
            message: "what's up"
        },
        {
            name: "Ellen",
            image: "...",
            message: "How's it going"
        },
        {
            message: "Yo"
        },
    ]);

    const handleSend = e => {
        e.preventDefault(); //prevents refreshing upon hitting enter key

        // add new message to messages array
        setMessages([...messages, { message: input}]);
        // reset input
        setInput('');
    }

    return (
        <div className ="chatScreen">
            <h2>Chat screen</h2>
            <p className = "chatScreen__timestamp">You matched with Ellen on 10/08/20</p>
            {messages.map(message => (
                // logic to render messages differently depending on sender
                message.name ? (
                    <div className = "chatScreen__message">
                        <Avatar
                        className="chatScreen__image"
                        alt={message.name}
                        src={message.image}
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div className = "chatScreen__message">
                    <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )

            ))}
            {/* connect form to database */}
            <form className ="chatScreen__input">
                <input
                // input value is equivalent to input state
                value = {input}
                // everytime we type in input field, it will render
                onChange = {(e) => setInput(e.target.value)}
                className ="chatScreen__inputField"
                placeholder="Type a message..."
                type="text"
                />
                <button onClick={handleSend} type="submit" className ="chatScreen__inputButton">SEND</button>
            </form>
        </div>
    )
}

export default ChatScreen
