import { Link} from "react-router-dom";
import styles from "./Home.module.scss"
import { PAGE_ROUTES } from "../../utils/contants";

const Home = () =>{

  return (
    <div className={styles.container}>
      <h1>This is the home page</h1>
      <Link to={PAGE_ROUTES.LOGIN}>Navigate to Login page</Link>
    </div>
  );
}

export default Home;