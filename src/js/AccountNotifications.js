import React, {useState} from 'react';
import "../css/AccountNotifications.css";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const AccountNotifications = () => {
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        console.log("Reflect this change in database")
      };
    const [state, setState] = useState({
        checkedA: true
      });

    

    return (
        <div className = 'Account__notifications'>
            <h3>Notifications</h3>
            <p>Response rate and speed have a significant effect on your profile rating and chances to secure a booking. We highly recommend keeping text notifications on.</p>
            <FormControlLabel
            control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
            label="Send chat response to your cell phone"
            />
        </div>
    )
}

export default AccountNotifications