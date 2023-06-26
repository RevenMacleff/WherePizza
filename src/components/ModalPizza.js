import { getDocs, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase-config";

const ModalPizza = ({ modalshow, modalChange, img, name, category }) => {
  const [del, setDel] = useState([]);
  const [addings, setAddings] = useState([]);
  const modal = modalshow ? "modal active" : "modal";
  const overlay = modalshow ? "modal-overlay active" : "modal-overlay";
  useEffect(() => {
    const getAddings = async () => {
      const data = await getDocs(addingsCollectionRef);
      setAddings(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    const addingsCollectionRef = collection(db, "toppings");
    getAddings();
  }, []);
  const toppings = addings.map((topping, id) => {
    return (
      <div className="modal__adding adding" key={id}>
        <div className="adding__img">
          <img src={topping.img} alt="" />
        </div>
        <div className="adding__name">{topping.name}</div>
        <div className="adding__price">{topping.price}₽</div>
      </div>
    );
  });
  const elements = category.map((i, id) => {
    if (i === "Хит" || i === "Новинка") {
      return false;
    }
    const isActive = del.includes(id); // проверяем, является ли элемент активным
    const deleted = isActive ? "modal__del modal__del_active" : "modal__del";

    return (
      <button
        key={id}
        className={deleted}
        onClick={() => {
          if (isActive) {
            // если элемент уже выбран, удаляем его из массива
            setDel(del.filter((item) => item !== id));
          } else {
            // иначе добавляем его в массив
            setDel([...del, id]);
          }
        }}>
        {i}
        <i>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="7" cy="7" r="6.6" stroke="#737272" strokeWidth="0.8"></circle>
            <path
              d="M5 5L9 9"
              stroke="#737272"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"></path>
            <path
              d="M9 5L5 9"
              stroke="#737272"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"></path>
          </svg>
        </i>
      </button>
    );
  });

  return (
    <div>
      <div className={overlay}></div>
      <div className={modal}>
        <div className="close-modal" onClick={() => modalChange(false)}>
          <svg
            width="29"
            height="30"
            viewBox="0 0 29 30"
            fill="white"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.1568 14.5231L28.4489 3.23075C29.1837 2.49623 29.1837 1.30861 28.4489 0.574085C27.7144 -0.160437 26.5267 -0.160437 25.7922 0.574085L14.4998 11.8665L3.20781 0.574085C2.47295 -0.160437 1.28567 -0.160437 0.551149 0.574085C-0.183716 1.30861 -0.183716 2.49623 0.551149 3.23075L11.8432 14.5231L0.551149 25.8155C-0.183716 26.55 -0.183716 27.7376 0.551149 28.4721C0.917206 28.8385 1.39852 29.0226 1.87948 29.0226C2.36045 29.0226 2.84141 28.8385 3.20781 28.4721L14.4998 17.1798L25.7922 28.4721C26.1586 28.8385 26.6396 29.0226 27.1205 29.0226C27.6015 29.0226 28.0825 28.8385 28.4489 28.4721C29.1837 27.7376 29.1837 26.55 28.4489 25.8155L17.1568 14.5231Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="modal__block">
          <div className="modal__left">
            <img src={img} alt="" />
          </div>
          <div className="modal__right">
            <div className="modal__wrap">
              {" "}
              <div className="modal__scroll">
                {" "}
                <div className="modal__title">{name}</div>
                <div className="modal__subtitle">30 см, традиционное тесто</div>
                <ul className="modal__deletes">{elements}</ul>
                <div className="modal__selector">
                  <ul>
                    <li>Маленькая</li>
                    <li className="active">Средняя</li>
                    <li>Большая</li>
                  </ul>
                  <ul>
                    <li className="active">Тонкое</li>
                    <li>Традиционное</li>
                  </ul>
                </div>
                <div className="modal__add">Добавить по вкусу</div>
                <div className="modal__addings">{toppings}</div>
              </div>
            </div>
            <div className="modal__button">Добавить в корзину за 400Р</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPizza;
