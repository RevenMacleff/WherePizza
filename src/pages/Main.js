import React, { useEffect, useState } from "react";

import { db } from "../firebase/firebase-config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import "../scss/app.scss";
import Categories from "../components/Categories";
import Ads from "../components/Ads";
import PizzaList from "../components/PizzaList";
const Main = () => {
  const [pizzas, setPizzas] = useState([]);
  const [snacks, setSnacks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /*   useEffect(() => {
    const getPizzas = async () => {
      const data = await getDocs(usersCollectionRef);
      setPizzas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setIsLoading(false);
    };
    const getSnacks = async () => {
      const data = await getDocs(snacksCollectionRef);
      setSnacks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setIsLoading(false);
    };
    const usersCollectionRef = collection(db, "food");
    const snacksCollectionRef = collection(db, "snacks");
    getPizzas();
    getSnacks();
  }, []); */
  useEffect(() => {
    const usersCollectionRef = collection(db, "food");
    const snacksCollectionRef = collection(db, "snacks");
    /*     const sorteredSnacks = query(snacksCollectionRef, orderBy("price", "asc")); */
    Promise.all([getDocs(usersCollectionRef), getDocs(snacksCollectionRef)]).then(
      ([usersData, snacksData]) => {
        setPizzas(usersData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setSnacks(snacksData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setIsLoading(false);
      }
    );
  }, []);
  return (
    <>
      <Categories></Categories>
      <Ads></Ads>
      <PizzaList
        food={pizzas}
        loading={isLoading}
        title={"Пицца"}
        showFilterbutton={true}></PizzaList>
      <PizzaList
        food={snacks}
        loading={isLoading}
        title={"Снэки"}
        showFilterbutton={false}></PizzaList>
    </>
  );
};

export default Main;
