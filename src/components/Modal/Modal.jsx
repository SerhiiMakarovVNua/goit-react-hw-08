import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { deleteContact } from "../../redux/contacts/operations";
import styles from "./Modal.module.css";

const Modal = ({ id, onModalClose }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const onKeyDown = (evt) => {
      if (evt.code === "Escape") {
        onModalClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onModalClose]);

  const onBackdropClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      onModalClose();
    }
  };

  const onYesClick = () => {
    dispatch(deleteContact(id));
  };

  const onNoClick = () => {
    onModalClose();
  };

  return (
    <div className={styles.backdrop} onClick={onBackdropClick}>
      <div className={styles.modal}>
        <p className={styles.modalText}>
          Are you sure you want to delete the contact?
        </p>
        <div className={styles.modalBtns}>
          <button className={styles.btn} type="button" onClick={onYesClick}>
            Yes
          </button>
          <button className={styles.btn} type="button" onClick={onNoClick}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;