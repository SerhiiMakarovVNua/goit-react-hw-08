import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { useState } from "react";
import styles from "./Contact.module.css";
import Modal from "../Modal/Modal";

const Contact = ({ id, name, number }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onModalOpen = () => {
    setIsModalOpen(true);
  };

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    onModalOpen();
  };

  return (
    <div className={styles.contactConteiner}>
      <div className={styles.contactItem}>
        <p><span className={styles.icon}><BsFillPersonFill size={20}/></span>{name}</p>
        <p><span className={styles.icon}><BsFillTelephoneFill /></span>{number}</p>
      </div>
      <button className={styles.btn} type="button" onClick={handleClick}>Delete</button>
      {isModalOpen && <Modal id={id} onModalClose={onModalClose} />}
    </div>
  );
};

export default Contact;