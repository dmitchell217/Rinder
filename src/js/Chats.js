import React from 'react'
import "../css/Chats.css"
import Chat from "./Chat"

const Chats = () => {
    return (
        <div className ="Chats">
            <Chat 
            name = "Mark"
            message = "Really interested in your property, would love to take a look!"
            timestamp="420 seconds ago"
            profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/440px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
            />
            <Chat 
            name = "Elon"
            message = "What a steal at that price. Let's meet."
            timestamp="69 days ago"
            profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/440px-Elon_Musk_Royal_Society.jpg"
            />
            <Chat 
            name = "Meg"
            message = "Hi I'm interested in your property, let me buy you a coffee?"
            timestamp="5 months ago"
            profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Meg_Whitman_crop.jpg/440px-Meg_Whitman_crop.jpg"
            />


        </div>
    )
}

export default Chats
