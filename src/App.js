import React from "react";
import MainPage from "./components/mainPage";
import Header from "./components/header";
import Footer from "./components/footer";
import Team from "./components/team";
import { Routes, Route, Link } from "react-router-dom";
import Schedule from "./components/schedule";
import News from "./components/news";
import Contacts from "./components/contacts";
function App() {
    function Home() {
        return (
            <>
                <main>
                    <h2>Welcome to the homepage!</h2>
                    <p>You can do this, I believe in you.</p>
                </main>
                <nav>
                    <Link to="/about">About</Link>
                </nav>
            </>
        );
    }

    function About() {
        return (
            <>
                <main>
                    <h2>Who are we?</h2>
                    <p>
                        That feels like an existential question, don't you
                        think?
                    </p>
                </main>
                <nav>
                    <Link to="/">Home</Link>
                </nav>
            </>
        );
    }

  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path="/mainPage" exact element={<MainPage />}/> 
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
