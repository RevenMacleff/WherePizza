import React from "react";

const PizzasTop = ({ showFilter, title, showFilterbutton }) => {
  return (
    <div className="food__top">
      <div className="food__title">{title}</div>
      {showFilterbutton && (
        <button onClick={() => showFilter(true)} className="food__filter">
          <div className="food__fitler-img">
            <img src="img/Filter.svg" alt="fitler" />
          </div>
          Фильтры
        </button>
      )}
    </div>
  );
};

export default PizzasTop;
