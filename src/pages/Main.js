import React, { useEffect, useState } from "react";

import { db } from "../firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import "../scss/app.scss";
import Categories from "../components/Categories";
import Ads from "../components/Ads";
import PizzaList from "../components/PizzaList";
const Main = () => {
  const [pizzas, setPizzas] = useState([]);
  const [snacks, setSnacks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [generalFilters, setGeneralFilters] = useState([]);

  const onFilterSelectAll = (filter) => {
    setGeneralFilters(filter);
  };

  useEffect(() => {
    const pizzasCollectionRef = collection(db, "food");
    const snacksCollectionRef = collection(db, "snacks");

    Promise.all([getDocs(pizzasCollectionRef), getDocs(snacksCollectionRef)]).then(
      ([usersData, snacksData]) => {
        setPizzas(usersData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setSnacks(snacksData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setIsLoading(false);
      }
    );
  }, []);
  /*   const visibleData = pizzas.filter((item) => {
    const arraysHaveSameValues = generalFilters.some((value) => item.category.includes(value));
    if (arraysHaveSameValues) {
      return item.category.every((value, index) => value === generalFilters[index]);
    } else {
      return pizzas;
    }
  }); */

  const visibleData = pizzas.filter((pizza) => {
    return generalFilters.every((ingredient) => {
      if (ingredient === undefined) {
        return true;
      } else {
        return pizza.category.includes(ingredient);
      }
    });
  });
  console.log(generalFilters);
  console.log(visibleData);
  return (
    <>
      <Categories></Categories>
      <Ads></Ads>
      <PizzaList
        food={visibleData}
        loading={isLoading}
        title={"Пицца"}
        showFilterbutton={true}
        onFilterSelectAll={onFilterSelectAll}></PizzaList>
      <PizzaList
        food={snacks}
        loading={isLoading}
        title={"Снэки"}
        showFilterbutton={false}></PizzaList>
    </>
  );
};

export default Main;
