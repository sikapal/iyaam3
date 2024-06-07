import React from 'react';
import Layouts from './components/Layouts';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Wishlists from './pages/Wishlists';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import Signup from './pages/Signup';
import Resetpassword from './pages/Resetpassword';
import SingleProduct from './pages/SingleProduct';
import Test from './pages/Test';
import Userprofile from './pages/Userprofile';
import Chatpage from "./chatComponents/Chatpage";
import Chat from "./chatComponents/Chat";
import Detail from "./chatComponents/Detail";
import List from "./chatComponents/List";
import NewPost from "./pages/NewPost/NewPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product" element={<OurStore />} />
          <Route path="wishlists" element={<Wishlists />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<Forgotpassword />} />
          <Route path="signup" element={<Signup />} />
          <Route path="reset-password" element={<Resetpassword />} />
          <Route path="product/:id" element={<SingleProduct />}></Route>
          <Route path="test" element={<Test />} />
          <Route path="user-profile" element={<Userprofile />} />

          <Route path="chatpage" element={<Chatpage />} />
          <Route path="chat" element={<Chat />} />
          <Route path="detail" element={<Detail />} />
          <Route path="list" element={<List />} />
          <Route path="post" element={<NewPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
