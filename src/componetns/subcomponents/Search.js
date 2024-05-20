import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const Navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const search = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5000/search/${searchValue}`
      );
      setSearchResult(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const watch = async (i, mType) => {
    if (!sessionStorage.getItem("user")) {
      Navigate("/signup");
    } else {
      const res = await axios.put(`http://localhost:5000/viewsincrement/${i}`);
      Navigate(`/watchmovie/${i}/${mType}`);
    }
  };
  console.log("search value", searchValue);
  return (
    <div>
      <div class="nav-search">
        <input
          type="text"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          value={searchValue}
          name="search-text"
          className="search-text-box"
        />
        <a
          class="nav-link modal-popup"
          data-toggle="collapse"
          href="#search-result"
          style={{
            position: "absolute",
            top: "-4px",
            color: "red",
            right: "0",
            bottom: "5px",
          }}
          onClick={search}
        >
          <i class="icofont-ui-search"></i>
        </a>
      </div>
      {searchValue.length>=1&&<div
        style={{
        //   display: "flex",
        //   justifyContent: "center",
          position: "absolute",
          top: "87%",
          zIndex: "3435",
          backgroundColor:"whitesmoke",
          width:"177px",
          color:"black",
          textAlign:"start",
          borderRadius:"5px",
        }}
      >
        <div class="collapse search-collapse" id="search-result">
          {Array.isArray(searchResult)
            ? searchResult.map((sin, index) => (
                <div
                  className="row mb-3 "
                  key={index}
                  onClick={() => {
                    watch(sin._id, sin.movieType);
                  }}
                >
                  <div className="col-12">
                    <span>{sin.movieName}</span>
                  </div>
                </div>
              ))
            : "Movie not Found"}
        </div>
      </div>}
    </div>
  );
};
