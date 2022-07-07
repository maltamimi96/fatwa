import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Components/Layout";
import SignIn from "./Auth/SignIn";
import Signup from "./Auth/Signup";


import Ask from "./pages/Ask";
import AllArticles from "./Components/AllArticles";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import MyProfile from "./pages/MyProfile";
import Question from "../src/pages/Question";
import Appbar from "./Components/Appbar";
import AdminDashboard from "./pages/AdminDashboard";


function App() {
  return (
    <>
   <Appbar/>
   <Layout>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/articles" element={<AllArticles/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/ask" element={<Ask/>}/>
        <Route path="/question/:id" element={<Question/>}/>
        <Route path="/my-profile" element={<MyProfile/>}/>
        <Route path="/admin" element={<AdminDashboard/>}/>
      </Routes>
    </Router>
   </Layout>
  </>
  );
}

export default App;

