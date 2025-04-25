import React, { useState } from "react";
import "./Country.css";
const Country = ({ country, handleAddVisit }) => {
  const {
    name,
    flags,
    population,
    region,
    coatOfArms,
    capital,
    area,
    languages,
    continents,
    borders,
    timezones,
    subregion,
    startOfWeek,
    fifa,
    maps,
  } = country;
  const [isVisited, setIsVisited] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleVisited = () => {
    setIsVisited(!isVisited);
  };
  const handleAdded = () => {
    setIsAdded(!isAdded);
  };

  const handleClick = () => {
    handleAddVisit(country);
    handleAdded();
  };
  return (
    <div className={`country-card bahamas-card ${isVisited && "active"}`}>
      {/* Header with Flag and Coat of Arms */}
      <div className={`country-header ${isVisited && "active"}`}>
        {isVisited && <span className="active-indicator">ALREADY VISITED</span>}
        {isAdded && <span className="active-indicator">🌍 NO MY LIST</span>}
        <img src={flags.png} alt={name.common} className="country-flag" />
        <div className="country-titles">
          <h2>{name.common}</h2>
          <h3>{name.official}</h3>
          <div className="coat-of-arms">
            <img src={coatOfArms.png} alt={name.common} />
          </div>
        </div>
      </div>

      {/* Key Information Grid */}
      <div className="country-info-grid">
        <div className="info-section">
          <div className="info-item">
            <span className="info-label">Capital</span>
            <span className="info-value">{capital}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Population</span>
            <span className="info-value">{population}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Area</span>
            <span className="info-value">{area}</span>
          </div>
        </div>

        <div className="info-section">
          <div className="info-item">
            <span className="info-label">Languages</span>
            <span className="info-value">{languages?.eng}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Borders</span>
            <span className="info-value">{borders}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Timezone</span>
            <span className="info-value">{timezones}</span>
          </div>
        </div>
      </div>

      {/* Additional Details Accordion */}
      <div className="details-accordion">
        <details>
          <summary>More Information</summary>
          <div className="accordion-content">
            <p>
              <strong>Region:</strong> {region}
            </p>
            <p>
              <strong>Coordinates:</strong> {continents}
            </p>
            <p>
              <strong>Subregion:</strong> {subregion}
            </p>
            <p>
              <strong>Star Of Week:</strong> {startOfWeek}
            </p>
            <p>
              <strong>FIFA Code:</strong> {fifa}
            </p>
          </div>
        </details>
      </div>

      {/* Map Links */}
      <div className="map-links">
        <button
          onClick={handleClick}
          className={`next-visit-btn ${isAdded ? "added" : ""}`}
          disabled={isAdded}
          aria-disabled={isAdded}
        >
          {isAdded ? "" : "+"}
          {isAdded ? "Added" : "Add"}
        </button>
        <a href={maps?.googleMaps} target="_blank" rel="noopener noreferrer">
          <button className="map-button">
            <i className="fas fa-map-marked-alt"></i> View on Google Maps
          </button>
        </a>
        <button
          className={`visited-btn ${isVisited ? "active" : ""}`}
          onClick={handleVisited}
        >
          <i className="fas fa-passport"></i> {/* Optional icon */}
          {isVisited ? "Visited" : "Not Yet"}
        </button>
      </div>
    </div>
  );
};

export default Country;
