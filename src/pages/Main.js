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
  const [desserts, setDesserts] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [generalFilters, setGeneralFilters] = useState([]);

  const onFilterSelectAll = (filter) => {
    setGeneralFilters(filter.filter((ingredient) => ingredient));
  };

  useEffect(() => {
    const pizzasCollectionRef = collection(db, "food");
    const snacksCollectionRef = collection(db, "snacks");
    const dessertsCollectionRef = collection(db, "desserts");
    const drinksCollectionRef = collection(db, "drinks");

    Promise.all([
      getDocs(pizzasCollectionRef),
      getDocs(snacksCollectionRef),
      getDocs(dessertsCollectionRef),
      getDocs(drinksCollectionRef),
    ]).then(([usersData, snacksData, dessertsData, drinksData]) => {
      setPizzas(usersData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setSnacks(snacksData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setDesserts(dessertsData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setDrinks(drinksData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setIsLoading(false);
    });
  }, []);
  const visibleData = pizzas.filter((pizza) => {
    return generalFilters.every((ingredient) => pizza.category.includes(ingredient));
  });
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
      <PizzaList
        food={desserts}
        loading={isLoading}
        title={"Дессерты"}
        showFilterbutton={false}></PizzaList>
      <PizzaList
        food={drinks}
        loading={isLoading}
        title={"Напитки"}
        showFilterbutton={false}></PizzaList>
    </>
  );
};

export default Main;
