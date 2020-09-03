import React from 'react';

class Message extends React.Component {
    constructor(props){
        super(props)
        this.message = 'something'
        console.log(props.message)
    }

    render() {
        let value = 'hey this is a message'
        return (
             <div>
                 <div>{this.props.message}</div>
                 <div>{this.props.message2}</div>
                 <div>{value}</div>
            </div> 
        )
    }

}




export default Message;