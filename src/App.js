import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Auth/SignUp";
import Header from "./Components/Header";
import Home from "./pages/Home";
import ApiTest from "./ApiTest";
import Layout from "./Components/Layout";
import SignIn from "./Auth/SignIn";
import Login from "./Auth/Login";

import Ask from "./pages/Ask";

function App() {
  return (

<Router>
<Header></Header>
  <Layout>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/sign-in" element={<Login/>}/>
      <Route path="/ask" element={<Ask/>}/>
      <Route path="/api" element={<ApiTest/>}/>
    </Routes>
</Layout>
</Router>
   
  );
}

export default App;
