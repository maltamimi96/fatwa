import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Auth/SignUp";
import Header from "./Components/Header";
import Home from "./pages/Home";
import ApiTest from "./ApiTest";
import Layout from "./Components/Layout";
import SignIn from "./Auth/SignIn";

import Ask from "./pages/Ask";
import Article from "./pages/Article";
import AllArticles from "./Components/AllArticles";
import NavBar from "./Components/NavBar";


function App() {
  return (

<Router>
<NavBar></NavBar>
  <Layout>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/articles" element={<AllArticles/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/ask" element={<Ask/>}/>
      <Route path="/api" element={<ApiTest/>}/>
    </Routes>
</Layout>
</Router>
   
  );
}

export default App;
