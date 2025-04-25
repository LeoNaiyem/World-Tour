function VisitedCountries({ country }) {
  const { flags, name, capital } = country;
  return (
    <div className="sidebar-country active">
      <img src={flags.png} alt={name.common} className="sidebar-flag" />
      <div className="sidebar-country-info">
        <span className="sidebar-country-name">{name.common}</span>
        <span className="sidebar-country-capital">{capital}</span>
      </div>
    </div>
  );
}
export default VisitedCountries;
