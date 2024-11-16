import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <h1>Welcome to "Phone Book"!</h1>
      <p className={styles.homeGreeting}>"Forget the chaos of contacts! Easily organize your phone book and find the information you need in seconds."</p>
    </div>
  );
};

export default HomePage;