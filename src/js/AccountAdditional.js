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
            <div className = 'Account__additional1'>
                <h3>Additional Info</h3>
                <TextField
                    variant="standard"
                    placeholder="Company Name"
                    margin="normal"
                    fullWidth = "true"
                    required
                    onChange={(e) => setCompany(e.target.value)}
                    value={company}
                />
            </div>
            <div className = 'Account__additional2'>
                <TextField
                    variant="standard"
                    placeholder="Real-estate broker, Property Developer, First-time home buyer"
                    margin="normal"
                    fullWidth = "true"
                    required
                    // type="password"
                    onChange={(e) => setIdentification(e.target.value)}
                    value={identification}
                />
            </div>
            <div className = 'Account__additional3'>
                <TextField
                    variant="standard"
                    placeholder="Write a few words about yourself. People like to know who they're dealing with."
                    margin="normal"
                    fullWidth = "true"
                    required
                    // type="password"
                    onChange={(e) => setAbout(e.target.value)}
                    value={about}
                />
            </div>
            <div className="Account__AdditionalSubmitButton">
            <Button
                variant="contained"
                color="primary"
                onClick={handleAdditional}
            >Save changes</Button>
            </div>
        </div>
    )
}

export default AccountAdditional