function Filter({ onChangeInput }) {
  function handleChangeInput(event) {
    const valueInput = event.target.value;
    onChangeInput(valueInput);
  }

  return (
    <div>
      <form action="">
        <legend>Filters</legend>
        <label htmlFor="country">By country</label>
        <input type="text" placeholder="Spain" onChange={handleChangeInput} />
        <label htmlFor="continet">By continet</label>
        <select name="" id="">
          <option value="">All</option>
          <option value="">Europe</option>
          <option value="">North America</option>
          <option value="">Asia</option>
          <option value="">Oceania</option>
          <option value="">Africa</option>
          <option value="">South America</option>
        </select>
      </form>
    </div>
  );
}

export default Filter;
