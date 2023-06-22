import React, { useState } from "react";

const Filters = ({ isActive, showFilter, onFilterSelectAll }) => {
  const [filterall, setFilterall] = useState(0);
  const [filtercheese, setFiltercheese] = useState(0);
  const [filtermeat, setFiltermeat] = useState(0);
  const [filterchoice, setFilterchoice] = useState(0);
  const all = ["Хит", "Новинка"];
  const cheese = ["Моцарелла", "Чеддер", "Пармезан"];
  const meat = ["Пепперони", "Курица", "Ветчина", "Говядина", "Бекон"];
  const choice = ["Лук", "Перец", "Томаты", "Чеснок", "Огурцы", "Шампиньоны"];
  const onReset = () => {
    setFilterall(0);
    setFiltercheese(0);
    setFilterchoice(0);
    setFiltermeat(0);
  };

  const allMap = all.map((categoryName, id) => {
    return (
      <li
        key={id}
        className={filterall.id === id ? "filters__check filters__check_active" : "filters__check"}
        onClick={() => setFilterall({ name: categoryName, id: id })}>
        {categoryName}
      </li>
    );
  });

  const CheeseMap = cheese.map((categoryName, id) => {
    return (
      <li
        key={id}
        className={
          filtercheese.id === id ? "filters__check filters__check_active" : "filters__check"
        }
        onClick={() => setFiltercheese({ name: categoryName, id: id })}>
        {categoryName}
      </li>
    );
  });
  const MeatMap = meat.map((categoryName, id) => {
    return (
      <li
        key={id}
        className={filtermeat.id === id ? "filters__check filters__check_active" : "filters__check"}
        onClick={() => setFiltermeat({ name: categoryName, id: id })}>
        {categoryName}
      </li>
    );
  });
  const ChoiceMap = choice.map((categoryName, id) => {
    return (
      <li
        key={id}
        className={
          filterchoice.id === id ? "filters__check filters__check_active" : "filters__check"
        }
        onClick={() => setFilterchoice({ name: categoryName, id: id })}>
        {categoryName}
      </li>
    );
  });

  let filters = "filters";
  if (isActive === true) {
    filters += " active";
  } else {
    filters = "filters";
  }

  return (
    <div className={filters}>
      <div className="filters__overlay"></div>
      <div className="filters__block">
        <div className="filters__close" onClick={() => showFilter(false)}>
          <svg
            width="29"
            height="30"
            viewBox="0 0 29 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.1568 14.5231L28.4489 3.23075C29.1837 2.49623 29.1837 1.30861 28.4489 0.574085C27.7144 -0.160437 26.5267 -0.160437 25.7922 0.574085L14.4998 11.8665L3.20781 0.574085C2.47295 -0.160437 1.28567 -0.160437 0.551149 0.574085C-0.183716 1.30861 -0.183716 2.49623 0.551149 3.23075L11.8432 14.5231L0.551149 25.8155C-0.183716 26.55 -0.183716 27.7376 0.551149 28.4721C0.917206 28.8385 1.39852 29.0226 1.87948 29.0226C2.36045 29.0226 2.84141 28.8385 3.20781 28.4721L14.4998 17.1798L25.7922 28.4721C26.1586 28.8385 26.6396 29.0226 27.1205 29.0226C27.6015 29.0226 28.0825 28.8385 28.4489 28.4721C29.1837 27.7376 29.1837 26.55 28.4489 25.8155L17.1568 14.5231Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="filters__title">Фильтры</div>
        <div className="filters__wrap">
          <div className="filters__top">
            <div className="filters__subtitle">Общее</div>
            <ul className="filters__category">{allMap}</ul>
            <div className="filters__subtitle">Сыр</div>
            <ul className="filters__category">{CheeseMap}</ul>
            <div className="filters__subtitle">Мясо</div>
            <ul className="filters__category">{MeatMap}</ul>
            <div className="filters__subtitle">Компонент</div>
            <ul className="filters__category">{ChoiceMap}</ul>
          </div>
          <div className="filters__buttons">
            <button className="button button_none" onClick={() => onReset()}>
              Сбросить
            </button>
            <button
              className="button"
              onClick={() =>
                onFilterSelectAll([
                  filterall.name,
                  filtercheese.name,
                  filterchoice.name,
                  filtermeat.name,
                ])
              }>
              Применить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
