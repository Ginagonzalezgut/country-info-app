function Country({ countryInfo }) {
  return (
    <div className="country">
      <h1>{countryInfo.flag}</h1>
      <h1>{countryInfo.name.common}</h1>
      <h2>{countryInfo.capital}</h2>
      <h2>{countryInfo.continents}</h2>
    </div>
  );
}

export default Country;
