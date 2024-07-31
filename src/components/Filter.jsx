function Filter({ onChangeInput, onChangeSelect }) {
  function handleChangeInput(event) {
    const valueInput = event.target.value;
    onChangeInput(valueInput);
  }

  function handleChangeSelect(event) {
    const valueInput = event.target.value;
    onChangeSelect(valueInput);
  }

  return (
    <div>
      <form action="">
        <legend>Filters</legend>
        <label htmlFor="country">By country</label>
        <input type="text" placeholder="Spain" onChange={handleChangeInput} />
        <label htmlFor="continet">By continet</label>
        <select onChange={handleChangeSelect} name="" id="">
          <option value="all">All</option>
          <option value="europe">Europe</option>
          <option value="north-america">North America</option>
          <option value="asia">Asia</option>
          <option value="oceania">Oceania</option>
          <option value="africa">Africa</option>
          <option value="south-america">South America</option>
        </select>
      </form>
    </div>
  );
}

export default Filter;
