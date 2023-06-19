import React from "react";

const Categories = () => {
  const categories = [
    { id: 0, img: "img/fire.svg", descr: "Акции" },
    { id: 1, img: "img/Pizza.svg", descr: "Пицца" },
    { id: 2, img: "img/Sushi.svg ", descr: "Суши" },
    { id: 3, img: "img/Drink.svg", descr: "Напитки" },
    { id: 4, img: "img/Snacks.svg ", descr: "Закуски" },
    { id: 5, img: "img/Combo.svg ", descr: "Комбо " },
    { id: 6, img: "img/Dessert.svg ", descr: "Дессерты" },
    { id: 7, img: "img/Sauce.svg ", descr: "Соусы" },
  ];

  /*   const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3001/categories", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setCategories(result);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []); */

  const listItems = categories.map((categories) => (
    <li key={categories.id} className="categories__item">
      <div className="categories__img">
        <img src={categories.img} alt={categories.descr} />
      </div>
      <div className="categories__descr">{categories.descr}</div>
    </li>
  ));

  return (
    <div className="categories">
      <div className="container">
        <ul className="categories__list">{listItems}</ul>
      </div>
    </div>
  );
};

export default Categories;
