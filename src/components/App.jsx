import "../scss/App.scss";
import Header from "./Header";
import ListCountries from "./ListCountries";
import countriesInfo from "../services/data.json";
import Filter from "./Filter";
import { useState } from "react";

function App() {
  const [filterValue, setfilterValue] = useState("");
  const [continet, setcontinet] = useState("");

  function handleChangeInput(value) {
    setfilterValue(value);
  }
  function handleChangeSelect(value) {
    setcontinet(value);
  }
  const filterCountries = countriesInfo.filter((countryInfo) => {
    console.log(continet);

    return countryInfo.name.common
      .toLowerCase()
      .includes(filterValue.toLowerCase());
  });
  return (
    <>
      <Header />
      <Filter
        onChangeInput={handleChangeInput}
        onChangeSelect={handleChangeSelect}
      />
      <ListCountries countriesData={filterCountries} />
    </>
  );
}

export default App;
