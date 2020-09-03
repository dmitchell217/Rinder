import React, {useState} from 'react';
import "../css/AccountPersonal.css";
import { grabUserImg } from "./grab.js";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";


const AccountPersonal = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [cell, setCell] = useState("")
    const [email, setEmail] = useState("")


    function handlePersonal(event) {
        // connect to database here
        console.log(`updating additional info with: ${event}`)

    }

    return (
        <div className='AccountPersonal_body'>
            <div className = 'Account__PersonalInfo'>
                <h3>Personal Info</h3>
                <div>Providing more information about yourself will increase the number of inquiries and responses from other users.</div>
                <div className = 'Account__imageContainer'>
                    <div className = "Account__imageLabel">Profile photo</div>
                    <div className = "Account__image">
                        <img src={grabUserImg()} className="profile__image" alt="propic" />
                        <p>Upload image</p>
                    </div>
                </div>
                <div className="Account__PersonalFirstRow">
                    <TextField className = "first"
                        variant="standard"
                        placeholder="Ex: David"
                        margin="normal"
                        required
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                    />
                    <TextField
                        className = "second"
                        variant="standard"
                        placeholder="Ex: Mitchell"
                        margin="normal"
                        required
                        // type="password"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                    />
                </div>
                <div className="Account__PersonalSecondRow">
                    <TextField
                        className = "first"
                        variant="standard"
                        placeholder="Ex: 2186789090"
                        margin="normal"
                        required
                        onChange={(e) => setCell(e.target.value)}
                        value={cell}
                    />
                    <TextField
                        className = "second"
                        variant="standard"
                        placeholder="Ex: dmitch@aol.com"
                        margin="normal"
                        required
                        // type="password"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className="Account__PersonalSubmitButton">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handlePersonal}
                    >Save changes</Button>
                </div>
            </div>
        </div>
    )
}

export default AccountPersonal