import React, {useState, useEffect} from "react";
import MainPage from "./components/mainPage/mainPage";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Team from "./components/team/team";
import {Routes, Route, Link} from "react-router-dom";
import Schedule from "./components/schedule/schedule";
import News from "./components/news/news";
import Contacts from "./components/contacts/contacts";
import Respond from "./components/modals/respond";
import Dance from "./components/dance/dance";
import jwt_decode from "jwt-decode"


function App() {

    const [user, setUser] = useState({})

    function handleCallbackResponse(response) {
        console.log("Encoded JDT ID token: " + response.credential)
        let userObject = jwt_decode(response.credential)
        console.log(userObject)
        setUser(userObject)
        document.getElementById("signInDiv").hidden = true;

    }

    useEffect(() => {
        /* global google*/
        google.accounts.id.initialize({
            client_id: "649976560125-i5k6ng1hi6kkv2i2e9lrchqa4979mvia.apps.googleusercontent.com",
            callback: handleCallbackResponse
        })
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme: "outline", size: "large"}
        )
    }, [])
    const [modal, setModal] = useState(false);


    return (
        <div className="App">
            <Header setModal={setModal}/>
            <Respond modal={modal} setModal={setModal}/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/dance" element={<Dance/>}/>
                <Route path="/schedule" element={<Schedule/>}/>
                <Route path="/team" element={<Team/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
            </Routes>

            <Footer/>
        </div>
    );
}

export default App;

//Alex 2 test commit