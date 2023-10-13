import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Post from "./components/post/Post";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SinglePost from "./pages/singlepost/SinglePost";

export default function App() {
  const currentUser = true;
  return (
    <Router>
      <TopBar />

      <Routes>
        {/* <Route path="/singlepost/:id" element={<Single />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Post />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/post/:id" element={<Single />} />
        <Route path="/post/write/:id" element={<Write />} />

        <Route
          path="/register"
          element={currentUser ? <Home /> : <Register />}
        />
        <Route path="/login" element={currentUser ? <Home /> : <Login />} />
        <Route path="/write" element={currentUser ? <Write /> : <Login />} />
        <Route
          path="/settings"
          element={currentUser ? <Settings /> : <Login />}
        />

        <Route path="/single" element={<Single />} />
      </Routes>
    </Router>
  );
}
