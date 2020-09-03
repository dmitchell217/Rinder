import React from 'react'
import "../css/Chats.css"
import Chat from "./Chat"

const Chats = () => {
    return (
        <div className ="Chats">
            <Chat 
            name = "Mark"
            message = "Test msg"
            timestamp="40 seconds ago"
            profilePic="..."
            />


        </div>
    )
}

export default Chats
