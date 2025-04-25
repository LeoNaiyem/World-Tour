import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import VisitedCountries from "../VisitedCountries/VisitedCountries";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [addVisit, setAddVisit] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleAddVisit = (country) => {
    const newAdded = [...addVisit, country];
    setAddVisit(newAdded);
  };
  return (
    <>
      <h4 className="total-country">Total Countries: {countries.length}</h4>
      <div className=" country-display-container">
        {/* Fixed Left Sidebar */}
        <div className="country-sidebar">
          <h3 className="sidebar-title">Selected Countries</h3>

          <div className="country-list">
            {addVisit.map((country, i) => (
              <VisitedCountries key={i} country={country}></VisitedCountries>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="country-detail-view">
          <div className="countries-grid">
            {countries.map((country, i) => (
              <Country
                key={i}
                country={country}
                handleAddVisit={handleAddVisit}
              ></Country>
            ))}
          </div>
          <div className="bahamas-card"></div>
        </div>
      </div>
    </>
  );
};

export default Countries;
