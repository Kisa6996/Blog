import { Container } from "react-bootstrap";
import ControlledCarousel from "../controlled-carousel/controlled-carousel";
import styles from "./main.module.css";
function Main() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.block}>
          <h1 className={styles.title}>
            Привет, меня зовут Никита. И я начинающий фотограф
          </h1>
          <p className={styles.subtitle}>
            На этом сайте вы можете посмотреть мои работы
          </p>
        </div>
      </div>
      <h1 className={styles.titleSlid}>Мои работы</h1>
      <Container>
        <ControlledCarousel />
      </Container>
    </>
  );
}

export default Main;
