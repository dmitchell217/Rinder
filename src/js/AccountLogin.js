import React, {useState} from 'react';
import "../css/AccountLogin.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const AccountLogin = () => {
    const [p1, setP1] = useState("");
    const [p2, setP2] = useState("");

    function handlePasswordChange(event) {
        event.preventDefault();
        // connect to database here
        if (p1.length > 0 && p1===p2) {console.log("good password change, updated db")}
        else {console.log("bad password change, retry")}
    }
    return (
        <div className="AccountLogin__body">
            <div className="Account__login">
                <h3>Login & Security</h3>
                <div>
                <TextField
                    variant="standard"
                    placeholder="New Password"
                    margin="normal"
                    required
                    type="password"
                    onChange={(e) => setP1(e.target.value)}
                    value={p1}
                />
                </div>
                <div>
                <TextField
                    variant="standard"
                    placeholder="Confirm Password"
                    margin="normal"
                    required
                    type="password"
                    onChange={(e) => setP2(e.target.value)}
                    value={p2}
                />
                </div>

                <div className="Account__PasswordSubmitButton">
                    <Button
                    variant="contained"
                    color="primary"
                    onClick={handlePasswordChange}
                    >Update</Button>
                </div>
            </div>
        </div>
    )

}

export default AccountLogin