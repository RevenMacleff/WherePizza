import React, { useState } from "react";
import Food from "./Food";
import Skeleton from "./PizzaBlock/Skeleton";
import Filters from "./Filters";
import PizzasTop from "./PizzasTop";

const PizzaList = ({ food, loading, title, showFilterbutton }) => {
  const [filtershow, setFiltershow] = useState(false);
  /*   const [showfilterbutton, setShowfilterbutton] = useState(true); */

  const items = food.map((item, id) => {
    return <Food key={id} {...item} loading={loading}></Food>;
  });

  const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index}></Skeleton>);
  const show = loading ? skeletons : items;

  return (
    <section className="food">
      <Filters isActive={filtershow} showFilter={setFiltershow} pizzas={food}></Filters>
      <div className="container">
        <PizzasTop
          showFilter={setFiltershow}
          title={title}
          showFilterbutton={showFilterbutton}></PizzasTop>
        <div className="food__list">{show}</div>
      </div>
    </section>
  );
};

export default PizzaList;
