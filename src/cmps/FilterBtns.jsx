function FilterBtns(props) {
  const filterBy = props.filterBy;
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-3" >
          <button
            type="button"
            className="bg-primary text-white"
            onClick={() => filterBy("ALL")}
          >
            ALL
          </button>
          <button
            type="button"
            className="bg-primary text-white"
            onClick={() => filterBy("COMPLETED")}
          >
            COMPLETED
          </button>
          <button
            type="button"
            className="bg-primary text-white"
            onClick={() => filterBy("LEFT")}
          >
            LEFT
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterBtns;
