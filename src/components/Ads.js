import React from "react";

const Ads = () => {
  const ads = [
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
  ];

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
