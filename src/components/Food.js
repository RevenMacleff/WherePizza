import React, { useState } from "react";
import Skeleton from "./PizzaBlock/Skeleton";
import Modal from "./Modal";
const Food = ({ id, img, name, descr, price, loading, category }) => {
  const [modalshow, setModalshow] = useState(false);
  return (
    <div className="food__block" key={id}>
      <Modal
        img={img}
        modalChange={setModalshow}
        modalshow={modalshow}
        name={name}
        category={category}></Modal>
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
