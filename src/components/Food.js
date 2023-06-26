import React, { useState } from "react";
import Skeleton from "./PizzaBlock/Skeleton";
import ModalPizza from "./ModalPizza";
import ModalFood from "./ModalFood";
const Food = ({ id, img, name, descr, price, loading, category }) => {
  const [modalshow, setModalshow] = useState(false);
  return (
    <div className="food__block" key={id}>
      {category ? (
        <ModalPizza
          img={img}
          modalChange={setModalshow}
          modalshow={modalshow}
          name={name}
          category={category}></ModalPizza>
      ) : (
        <ModalFood
          img={img}
          modalChange={setModalshow}
          modalshow={modalshow}
          name={name}></ModalFood>
      )}
      <div className="food__up">
        <div className="food__img">
          {loading ? <Skeleton></Skeleton> : <img src={img} alt={name} />}
        </div>
        <div className="food__name">{name}</div>
        <div className="food__descr">{descr}</div>
      </div>
      <div className="food__down">
        <div className="food__bottom">
          <button className="food__button" onClick={() => setModalshow(true)}>
            Выбрать
          </button>
          <div className="food__price">от {price} ₽</div>
        </div>
      </div>
    </div>
  );
};

export default Food;
