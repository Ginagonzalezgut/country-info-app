import Country from "./Country";
import "../scss/components/Countries.scss";

function ListCountries({ countriesData }) {
  function renderCountries() {
    return countriesData.map((countryData, index) => {
      return <Country countryInfo={countryData} key={index} />;
    });
  }

  return <div className="countries">{renderCountries()}</div>;
}

export default ListCountries;
