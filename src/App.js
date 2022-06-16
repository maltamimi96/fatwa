import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ApiTest from "./ApiTest";
import Layout from "./Components/Layout";
import SignIn from "./Auth/SignIn";
import Register from "./Auth/Register";


import Ask from "./pages/Ask";
import AllArticles from "./Components/AllArticles";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import MyProfile from "./pages/MyProfile";


function App() {
  return (

<Router>
<NavBar></NavBar>
  <Layout>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/articles" element={<AllArticles/>}/>
      <Route path="/sign-up" element={<Register/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/ask" element={<Ask/>}/>
      <Route path="/my-profile" element={<MyProfile/>}/>
    </Routes>
</Layout>
<Footer/>
</Router>
   
  );
}

export default App;
