import React, { useEffect, useState } from 'react'
import '../css/App.css';
import Header from './Header'
import Profile from './Profile'
import Preferences from './Preferences'
import Account from './Account'
import Help from './Help'
import SwipeButtons from './SwipeButtons'
import TinderCards from './TinderCards'
import Chats from './Chats'
import ChatScreen from "./ChatScreen"
import { BrowserRouter as Router, Switch, Route }
from "react-router-dom";
import AllListings from './AllListings';
import ListingNav from './ListingNav';
import AccountNav from './AccountNav';
import AccountPersonal from './AccountPersonal'
import AccountAdditional from './AccountAdditional'
import AccountLogin from './AccountLogin'
import AccountNotifications from './AccountNotifications'

function App() {
// class App extends React.Component { 

  // Prepare state hook for welcome message
  const [welcomeMessage, setWelcomeMessage] = useState('')

  // Create async function for fetching welcome message
  const fetchMessage = async () => {
    // Use Fetch API to fetch '/api' endpoint
    const message = await fetch('/api')
      .then(res => res.text()) // process incoming data
    // Update welcomeMessage state
    setWelcomeMessage(message)
  }
  // Use useEffect to call fetchMessage() on initial render and only then
  useEffect(() => {
    fetchMessage()
  }, [])

  return (
      <div className="App">
        <Router>
        {/* {Header} */}
          <Switch>
          <Route path="/login">
            {/* Display welcome message */}
            <p>{welcomeMessage}</p>
            {/* <Login /> */}
          </Route>
            <Route path="/chat/:person">
              <Header />
              <ChatScreen />
            </Route>
            <Route path="/myProfile/">
                <Header />
                <Profile />
            </Route>
            <Route path="/preferences/">
                <Header />
                <Preferences />
            </Route>
            <Route path="/account/personal">
                <Header />
                <AccountNav active = 'personal'/>
                <AccountPersonal />
            </Route>
            <Route path="/account/additional">
                <Header />
                <AccountNav active = 'additional'/>
                <AccountAdditional />
            </Route>
            <Route path="/account/login">
                <Header />
                <AccountNav active = 'login'/>
                <AccountLogin />
            </Route>
            <Route path="/account/notifications">
                <Header />
                <AccountNav active = 'notifications'/>
                <AccountNotifications />
            </Route>
            <Route path="/help/">
                <Header />
                <Help />
            </Route>
            <Route path="/chat">
              {/* <Header backbutton="/"/> */}
              <Header />
              <Chats/>
            </Route>
            <Route path="/all-listings">
              <Header />
              <ListingNav active = "all" />
              <AllListings />
            </Route>
            <Route path="/new-listing">
              <Header />
            </Route>
            <Route path="/active-listings">
              <Header />
              <ListingNav active = "active" />
            </Route>
            <Route path="/inReview-listings">
              <Header />
              <ListingNav active = "inReview" />
            </Route>
            <Route path="/unPublished-listings">
              <Header />
              <ListingNav active = "unPublished" />
            </Route>
            <Route path="/edit-listing">
              <Header />
            </Route>
            <Route path="/edit-price">
              <Header />
            </Route>
            {/* default route needs to go at bottom of switch */}
            <Route path="/"> 
              <Header />
              <TinderCards/>
              <SwipeButtons/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
}

export default App;

  // {/* {Tinder Cards} */}
  // {/* {Butons below tinder cards} */}
  // {/* {Tinder Cards} */}

  // {/* {Chats screen} */}
  // {/* {Individual chat screen} */}