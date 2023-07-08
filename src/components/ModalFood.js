import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";
const ModalFood = ({ modalshow, modalChange, img, name, descr, price }) => {
  const dispatch = useDispatch();
  const modal = modalshow ? "modal modal_food active" : "modal";
  const overlay = modalshow ? "modal-overlay active" : "modal-overlay";
  const onClickAdd = () => {
    const item = {
      name,
      price: price,
      img,
    };
    dispatch(addItem(item));
  };
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
          <div className="modal__left modal__left_food">
            <img src={img} alt="" />
          </div>
          <div className="modal__right modal__right_food">
            <div className="modal__title">{name}</div>
            <div className="modal__descr">{descr}</div>
            <div className="modal__button modal__button_food" onClick={onClickAdd}>
              {" "}
              Добавить в корзину за {price} Р
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFood;
