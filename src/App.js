import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./componetns/Index";
import Login from "./componetns/Login";
import Signup from "./componetns/Signup";
import WatchMovie from "./componetns/WatchMovie";
import Admin from "./componetns/Admin";
import './App.css'
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [boxofficeMovies, setBoxofficeMovies] = useState();

  useEffect(() => {
    async function getData() {
      const res = await axios.get("http://localhost:5000/getboxofficemovies");
      // const data=res.data
      setBoxofficeMovies(res.data);
    }
    getData()
  }, []);
  console.log("box office",boxofficeMovies)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index boxofficeMovies={boxofficeMovies}/>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/watchmovie/:id" element={<WatchMovie/>} />
          <Route path="/admin" element={<Admin/>}></Route>
          <Route path="/watchmovie" element={<Index boxofficeMovies={boxofficeMovies}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
