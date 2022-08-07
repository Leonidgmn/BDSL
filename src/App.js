import React, {useState} from "react";
import MainPage from "./components/mainPage";
import Header from "./components/header";
import Footer from "./components/footer";
import Team from "./components/team";
import { Routes, Route, Link } from "react-router-dom";
import Schedule from "./components/schedule";
import News from "./components/news";
import Contacts from "./components/contacts";
import Respond from "./components/respond";
function App() {
    const[modal, setModal]=useState(false);

    return (
        <div className="App">
            <Header setModal={setModal}/>
            <Respond modal={modal} setModal={setModal}/>
            <Routes>
                <Route path="/" element={<MainPage />}/>
                <Route path="/schedule" element={<Schedule />}/>
                <Route path="/team" element={<Team />}/>
                <Route path="/news" element={<News />}/>
                <Route path="/contacts" element={<Contacts />}/>
            </Routes>

            <Footer/>
        </div>
    );
}

export default App;

//Alex 2 test commit