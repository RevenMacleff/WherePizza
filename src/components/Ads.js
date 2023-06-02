import React, { useEffect, useState } from "react";

const Ads = () => {
  const [ads, setAds] = useState([]);
  /*   const ads = [
    { id: 0, img: "img/ads1.png", descr: "3 средние пиццы от 999 рублей" },
    {
      id: 1,
      img: "img/ads2.png",
      descr: "Кэшбек 10% на самовывоз (доставка)",
    },
    { id: 2, img: "img/ads3.png", descr: "3 средние пиццы от 999 рублей" },
    {
      id: 3,
      img: "img/ads4.png",
      descr: "Кэшбек 10% на самовывоз (доставка)",
    },
  ]; */

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3001/ads", requestOptions)
      .then((response) => response.json())
      .then((result) => setAds(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);
  const result = ads.map((ads) => {
    return (
      <li key={ads.id} className="ads__item">
        <div className="ads__img">
          <img src={ads.img} alt={ads.descr} />
        </div>
      </li>
    );
  });
  return (
    <div className="ads">
      <div className="container">
        <ul className="ads__wrap">{result}</ul>
      </div>
    </div>
  );
};

export default Ads;
