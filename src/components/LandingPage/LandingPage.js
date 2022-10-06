import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../Reuable/NavBar/NavBar";
import { cardData, ListData } from "../../constant";
import Footer from "../Reuable/NavBar/Footer/Footer";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search) {
      navigate(`/products/${search}`);
    }
  };

  return (
    <>
      <NavBar />
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="What are you looking for?"
          />
          <button type="submit" onClick={handleSearch} className="searchButton">
            <i className="fa fa-search"/>
          </button>
        </div>
      </div>
      <div className="landing_main">
        <div className="main">
          <p>No design or coding required, a time saver for you</p>
          <h1>Landing page that converts & get you customers</h1>
          <p>
            No matter how much you know about code or design, building a landing
            page can be overwhelming. With Shade, you don't have to worry,
            because we've done the hard works for you. Simply change text,
            color, images and you are ready to release!
          </p>
        </div>
      </div>
      <div></div>
      <div className="image">
        {cardData.map((item, i) => {
          return (
            <div className="card" key={i}>
              <img
                src={item.url}
                alt="Avatar"
                style={{ width: "300px", height: "200px" }}
              />
              <div className="container">
                <h4>
                  <b>{item.name}</b>
                </h4>
                <p>{item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="subscription">
        {Array(3)
          .fill(1)
          ?.map(() => {
            return (
              <div className="sub-card">
                <ul>
                  {ListData?.map((list, i) => {
                    return <li key={i}>{list}</li>;
                  })}
                </ul>
                <button className="btn btn-1 btn-sep icon-info">Buy Now</button>
              </div>
            );
          })}
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
