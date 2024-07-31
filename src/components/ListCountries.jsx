import Country from "./Country";

function ListCountries({ countriesData }) {
  function renderCountries() {
    return countriesData.map((countryData, index) => {
      return <Country countryInfo={countryData} key={index} />;
    });
  }

  return <div>{renderCountries()}</div>;
}

export default ListCountries;
