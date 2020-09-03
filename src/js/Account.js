// think about breaking up this file
import React, {useState} from 'react';
import "../css/Account.css"
import { grabUserImg, grabUserType } from "./grab.js"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Checkbox from '@material-ui/core/Checkbox';

function Account() {
    // const history = useHistory();
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        console.log("Reflect this change in database")
      };
    const [state, setState] = useState({
        checkedA: true
      });

    const [p1, setP1] = useState("");
    const [p2, setP2] = useState("");
    const [company, setCompany] = useState("")
    const [identification, setIdentification] = useState("")
    const [about, setAbout] = useState("")
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [cell, setCell] = useState("")
    const [email, setEmail] = useState("")

    function handlePasswordChange(event) {
        event.preventDefault();
        // connect to database here
        if (p1.length > 0 && p1===p2) {console.log("good password change, updated db")}
        else {console.log("bad password change, retry")}
    }

    function handleAdditional(event) {
        event.preventDefault();
        // connect to database here
        console.log(`updating additional info with: ${event}`)
    }

    function handlePhoto(event) {
        // connect to database here (update and re-render)
        console.log(`updating additional info with: ${event}`)
    }

    function handlePersonal(event) {
        // connect to database here
        console.log(`updating additional info with: ${event}`)
    }

    return (

        <div className='account'>
            <h2>This is the account page</h2>

            <div className = 'Account__PersonalInfo'>
                <h3>Personal Info</h3>
                <div>Providing more information about yourself will increase the number of inquiries and responses from other users.</div>
                <div className = "Account__imageLabel">Profile photo</div>
                <div className = 'Account__imageContainer'>
                    <img src={grabUserImg()} className="profile__image" alt="propic" />
                    <p>Upload image</p>
                </div>
                <div className="Account__PersonalFirstRow">
                    <TextField
                        variant="standard"
                        placeholder="Ex: David"
                        margin="normal"
                        required
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                    />
                    <TextField
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
                        variant="standard"
                        placeholder="Ex: 2186789090"
                        margin="normal"
                        required
                        onChange={(e) => setCell(e.target.value)}
                        value={cell}
                    />
                    <TextField
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

            <div className = 'Account__AdditionalInfo'>
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
                
            <div className="Account__password">
                <h3>Login & Security</h3>
                <TextField
                    variant="standard"
                    placeholder="New Password"
                    margin="normal"
                    required
                    type="password"
                    onChange={(e) => setP1(e.target.value)}
                    value={p1}
                />
                <TextField
                    variant="standard"
                    placeholder="Confirm Password"
                    margin="normal"
                    required
                    type="password"
                    onChange={(e) => setP2(e.target.value)}
                    value={p2}
                />

            <div className="Account__PasswordSubmitButton">
              <Button
                variant="contained"
                color="primary"
                onClick={handlePasswordChange}
              >Update</Button>
            </div>
          </div>
            <div className = 'Account__Notifications'>
                <h3>Notifications</h3>
                <p>Response rate and speed have a significant effect on your profile rating and chances to secure a booking. We highly recommend keeping text notifications on.</p>
                <FormControlLabel
                control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                label="Send chat response to your cell phone"
                />
            </div>
        </div>

    )
}

export default Account