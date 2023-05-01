import "./App.css";
import Header from "./Components/Header/Header";
import Layout from "./Components/Layout/Layout";
import Post from "./Components/Post/Post";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<Post />} />

      <Route path={"/login"} element={<div>login page</div>} />
      {/* </Route> */}
    </Routes>
  );
}

export default App;
