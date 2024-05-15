import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./componetns/Index";
import Login from "./componetns/Login";
import Signup from "./componetns/Signup";
import WatchMovie from "./componetns/WatchMovie";
import Admin from "./componetns/Admin";
import './App.css'
import axios from "axios";
import { useEffect, useState } from "react";
import SingleMovie from "./componetns/SingleMovie";

function App() {
  const [boxofficeMovies, setBoxofficeMovies] = useState();
  const[popularMovies,setPopularMovies]=useState();
  const[trendingMovies,setTrendingMovies]=useState();
  const[newSesonActionMovies,setNewSeasonActionMovies]=useState()
  const[newSesonDramaMovies,setNewSeasonDramaMovies]=useState()
  const[newSesonRomanceMovies,setNewSeasonRomanceMovies]=useState()

  useEffect(() => {
    async function getData() {
      const res = await axios.get("http://localhost:5000/getboxofficemovies");
      // const data=res.data
      setBoxofficeMovies(res.data);

      const respop=await axios.get('http://localhost:5000/popularmovies')
      setPopularMovies(respop.data)

      const restrend=await axios.get("http://localhost:5000/trendingmovies")
      setTrendingMovies(restrend.data)

      const resNewSeasonAction=await axios.get("http://localhost:5000/newseasonactionmovies")
      setNewSeasonActionMovies(resNewSeasonAction.data)

      const resNewASeasonDrama=await axios.get("http://localhost:5000/newseasondramamovies")
      setNewSeasonDramaMovies(resNewASeasonDrama.data)

      const resNewSeasonRomance=await axios.get("http://localhost:5000/newseasonromancemovies")
      setNewSeasonRomanceMovies(resNewSeasonRomance.data)



    }
    getData()
  }, []);
  console.log("action",newSesonActionMovies)
  console.log("drama",newSesonDramaMovies);
  console.log("romance",newSesonRomanceMovies)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index boxofficeMovies={boxofficeMovies} popularMovies={popularMovies} trendingMovies={trendingMovies} newSesonActionMovies={newSesonActionMovies} newSesonDramaMovies={newSesonDramaMovies} newSesonRomanceMovies={newSesonRomanceMovies} />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/watchmovie/:id/:movieType" element={<WatchMovie/>} />
          <Route path="/singlemovie/:id/:movieType" element={<SingleMovie/>}/>
          <Route path="/admin" element={<Admin/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
