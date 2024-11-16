import { ThreeDots } from "react-loader-spinner";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div  className={styles.loading}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="grey"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;