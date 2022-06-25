/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import modalImg from "assets/modal/modal-image.png";
import crosshair from "assets/modal/crosshair.png";

export default function ModalWindow({ active, setActive }) {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__wrapper">
        <img
          src={crosshair}
          className="modal__crosshair"
          onClick={() => setActive(false)}
        />
        <Image src={modalImg} className="modal__img" />
        <div className="modal__content">
          <h3 className="modal__title">S.A.N.TEAM</h3>
          <p className="modal__text">
            Якщо у Вас є запитання або ви хочете записатись на заняття, придбати
            наші послуги, зателефонуйте нам за телефоном:
          </p>
          <span className="modal__phone">+380978277742 Наталія Бодня</span>
          <span className="modal__phone">+380677878809 Олексій Кузьмічов</span>
          <span className="modal__phone">+380677391909 Сюзанна Лавриш</span>
        </div>
      </div>
    </div>
  );
}
