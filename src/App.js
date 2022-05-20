import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Auth/Signup";
import Header from "./Header";
import ApiTest from "./ApiTest";
import Navbar from "./Components/Navbar";
import Login from "./Auth/Login";

function App() {
  return (



<Router>
  <Navbar></Navbar>
  <Routes>
    <Route path="/" element={<Header/>}/>
    <Route path="/sign-up" element={<Signup/>}/>
    <Route path="/sign-in" element={<Login/>}/>
    <Route path="/api" element={<ApiTest/>}/>
  </Routes>
</Router>
   


  );
}

export default App;
