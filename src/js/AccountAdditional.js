import React, {useState} from 'react';
import "../css/AccountAdditional.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";


const AccountAdditional = () => {

    const [company, setCompany] = useState("")
    const [identification, setIdentification] = useState("")
    const [about, setAbout] = useState("")


    function handleAdditional(event) {
        event.preventDefault();
        // connect to database here
        console.log(`updating additional info with: ${event}`)
    }

    return (
        <div className='AccountAdditional_body'>
            <div className = 'Account__additional'>
                <h3>Additional Info</h3>
                <TextField
                    variant="standard"
                    placeholder="Company Name"
                    margin="normal"
                    required
                    onChange={(e) => setCompany(e.target.value)}
                    value={company}
                />
                <TextField
                    variant="standard"
                    placeholder="Real-estate broker, Property Developer, First-time home buyer"
                    margin="normal"
                    required
                    // type="password"
                    onChange={(e) => setIdentification(e.target.value)}
                    value={identification}
                />
                <TextField
                    variant="standard"
                    placeholder="Write a few words about yourself. People like to know who they're dealing with."
                    margin="normal"
                    required
                    // type="password"
                    onChange={(e) => setAbout(e.target.value)}
                    value={about}
                />

                <div className="Account__AdditionalSubmitButton">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAdditional}
                >Save changes</Button>
                </div>
            </div>
            
        </div>
    )
}

export default AccountAdditional