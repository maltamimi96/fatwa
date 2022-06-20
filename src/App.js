import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Components/Layout";
import SignIn from "./Auth/SignIn";
import Signup from "./Auth/Signup";

import Register from "./Auth/Register";


import Ask from "./pages/Ask";
import AllArticles from "./Components/AllArticles";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import MyProfile from "./pages/MyProfile";
import Question from "../src/pages/Question";


function App() {
  return (
<Router>
<NavBar></NavBar>
  <Layout>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/articles" element={<AllArticles/>}/>
      <Route path="/sign-up" element={<Signup/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/ask" element={<Ask/>}/>
      <Route path="/question/:id" element={<Question/>}/>
      <Route path="/my-profile" element={<MyProfile/>}/>
    </Routes>
</Layout>
<Footer/>
</Router>
   
  );
}

export default App;
