import React from "react";
import MainPage from "./components/mainPage";
import Header from "./components/header";
import Footer from "./components/footer";
import Team from "./components/team";
function App() {


  return (
    <div className="App">
        <Header/>
      <MainPage/>
<Team/>
      <Footer/>
    </div>
  );
}

export default App;
