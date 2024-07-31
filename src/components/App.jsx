import "../scss/App.scss";
import Header from "./Header";
import ListCountries from "./ListCountries";
import countriesInfo from "../services/data.json";

function App() {
  return (
    <>
      <Header />
      <ListCountries countriesData={countriesInfo} />
    </>
  );
}

export default App;
